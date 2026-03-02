// scripts/import-roles.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Отримуємо поточну директорію
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Імпортуємо наші модулі
import { parseRMLRole } from '../lib/rml/parser.js';
import { mergeEnUaRoles, updateCategoriesStats } from '../lib/rml/mapper.js';
import type { ParsedRole, RoleFileInfo } from '../lib/rml/types.js';

// Конфігурація
const CONFIG = {
  ROLES_DIR: path.join(process.cwd(), 'roles'),
  EN_DIR: path.join(process.cwd(), 'roles', 'en'),
  UA_DIR: path.join(process.cwd(), 'roles', 'ua'),
  PUBLIC_EN_DIR: path.join(process.cwd(), 'public', 'roles', 'en'),
  PUBLIC_UA_DIR: path.join(process.cwd(), 'public', 'roles', 'ua'),
  OUTPUT_FILE: path.join(process.cwd(), 'lib', 'roles.ts'),
};

// Кольори для виводу в консоль
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Функція для створення бекапу
function createBackup(filePath: string): void {
  if (fs.existsSync(filePath)) {
    const backupPath = `${filePath}.backup-${Date.now()}`;
    fs.copyFileSync(filePath, backupPath);
    log(`📦 Backup created: ${path.basename(backupPath)}`, 'blue');
  }
}

// Функція для читання файлів з папки
function readRoleFiles(directory: string, language: 'en' | 'ua'): RoleFileInfo[] {
  if (!fs.existsSync(directory)) {
    log(`⚠️  Directory not found: ${directory}`, 'yellow');
    return [];
  }

  return fs.readdirSync(directory)
    .filter(file => file.endsWith('.rml.txt') || file.endsWith('.txt'))
    .map(file => ({
      name: file,
      path: path.join(directory, file),
      content: fs.readFileSync(path.join(directory, file), 'utf-8'),
      language
    }));
}

// Функція для пошуку відповідної української версії
function findMatchingUaFile(enFile: RoleFileInfo, uaFiles: RoleFileInfo[]): RoleFileInfo | undefined {
  // Беремо назву файлу
  const enFileName = enFile.name;
  
  // Забираємо '__en__role.rml.txt' і додаємо '_role.rml.txt'
  const baseName = enFileName.replace('__en__role.rml.txt', '');
  const expectedUaName = `${baseName}_role.rml.txt`;
  
  console.log(`  🔍 Looking for: ${expectedUaName}`);
  
  return uaFiles.find(uf => uf.name === expectedUaName);
}

// Функція для копіювання файлів в public
function copyToPublic(enFile: RoleFileInfo, uaFile: RoleFileInfo): void {
  try {
    if (!fs.existsSync(CONFIG.PUBLIC_EN_DIR)) {
      fs.mkdirSync(CONFIG.PUBLIC_EN_DIR, { recursive: true });
    }
    if (!fs.existsSync(CONFIG.PUBLIC_UA_DIR)) {
      fs.mkdirSync(CONFIG.PUBLIC_UA_DIR, { recursive: true });
    }
    
    const enDest = path.join(CONFIG.PUBLIC_EN_DIR, enFile.name);
    const uaDest = path.join(CONFIG.PUBLIC_UA_DIR, uaFile.name);
    
    fs.copyFileSync(enFile.path, enDest);
    fs.copyFileSync(uaFile.path, uaDest);
    
    log(`  📋 Copied to public: ${enFile.name} / ${uaFile.name}`, 'cyan');
  } catch (error) {
    log(`  ❌ Failed to copy to public: ${error}`, 'red');
  }
}

// Головна функція імпорту
async function importAllRoles() {
  log('\n🚀 STARTING RML IMPORT PROCESS', 'green');
  log('════════════════════════════════════════\n', 'green');

  // Крок 1: Створюємо бекап
  log('📦 Step 1: Creating backup...', 'blue');
  createBackup(CONFIG.OUTPUT_FILE);

  // Крок 2: Читаємо файли
  log('\n📂 Step 2: Scanning directories...', 'blue');
  
  const enFiles = readRoleFiles(CONFIG.EN_DIR, 'en');
  const uaFiles = readRoleFiles(CONFIG.UA_DIR, 'ua');
  
  log(`   Found: ${enFiles.length} EN files, ${uaFiles.length} UA files`, 'cyan');

  if (enFiles.length === 0) {
    log('\n❌ No EN files found! Aborting.', 'red');
    process.exit(1);
  }

  // Крок 3: Парсинг та мерж
  log('\n🔄 Step 3: Parsing and merging roles...', 'blue');
  
  const roles = [];
  const errors: string[] = [];
  const warnings: { file: string; warnings: string[] }[] = [];

  for (const enFile of enFiles) {
    log(`\n  Processing: ${enFile.name}`, 'cyan');
    
    const enResult = parseRMLRole(enFile.content);
    
    if (!enResult.isValid) {
      errors.push(`EN ${enFile.name}: ${enResult.errors.join(', ')}`);
      log(`  ❌ Invalid EN file: ${enResult.errors.join(', ')}`, 'red');
      continue;
    }
    
    if (enResult.warnings.length > 0) {
      warnings.push({ file: `EN ${enFile.name}`, warnings: enResult.warnings });
    }
    
    const uaFile = findMatchingUaFile(enFile, uaFiles);
    
    if (!uaFile) {
      errors.push(`EN ${enFile.name}: No matching UA file found`);
      log(`  ❌ No matching UA file found`, 'red');
      continue;
    }
    
    const uaResult = parseRMLRole(uaFile.content);
    
    if (!uaResult.isValid) {
      errors.push(`UA ${uaFile.name}: ${uaResult.errors.join(', ')}`);
      log(`  ❌ Invalid UA file: ${uaResult.errors.join(', ')}`, 'red');
      continue;
    }
    
    if (uaResult.warnings.length > 0) {
      warnings.push({ file: `UA ${uaFile.name}`, warnings: uaResult.warnings });
    }
    
    try {
      const mergedRole = mergeEnUaRoles(enResult.role, uaResult.role);
      roles.push(mergedRole);
      
      copyToPublic(enFile, uaFile);
      
      log(`  ✅ Success: ${mergedRole.title} / ${mergedRole.titleUa}`, 'green');
    } catch (error) {
      errors.push(`Merge failed for ${enFile.name}: ${error}`);
      log(`  ❌ Merge failed: ${error}`, 'red');
    }
  }

  // Крок 4: Оновлюємо статистику категорій
  log('\n📊 Step 4: Updating categories statistics...', 'blue');
  const categories = updateCategoriesStats(roles);

  // Крок 5: Генеруємо файл roles.ts
  log('\n📝 Step 5: Generating roles.ts...', 'blue');
  
  const output = `// Auto-generated from RML files on ${new Date().toLocaleString()}
// Total roles: ${roles.length}
// Errors: ${errors.length}
// Warnings: ${warnings.length}

import { Role } from './types';

export const ROLES: Role[] = ${JSON.stringify(roles, null, 2)};

export const CATEGORIES = ${JSON.stringify(categories, null, 2)};

// Helper functions
export function getRoleBySlug(slug: string): Role | undefined {
  return ROLES.find(r => r.slug === slug);
}

export function getRolesByCategory(categorySlug: string): Role[] {
  return ROLES.filter(r => r.categorySlug === categorySlug);
}

export function getRelatedRoles(slugs: string[]): Role[] {
  return ROLES.filter(r => slugs.includes(r.slug));
}

export function searchRoles(query: string, locale: 'en' | 'uk' = 'en'): Role[] {
  const q = query.toLowerCase();
  return ROLES.filter(role => {
    const title = locale === 'uk' ? role.titleUa : role.title;
    const desc = locale === 'uk' ? role.shortDescriptionUa : role.shortDescription;
    return title.toLowerCase().includes(q) || 
           desc.toLowerCase().includes(q) ||
           role.tags.some(tag => tag.toLowerCase().includes(q));
  });
}
`;

  fs.writeFileSync(CONFIG.OUTPUT_FILE, output);
  
  log('\n════════════════════════════════════════', 'green');
  log('📊 IMPORT RESULTS', 'green');
  log('════════════════════════════════════════\n', 'green');
  
  log(`✅ Successfully imported: ${roles.length} roles`, 'green');
  log(`❌ Errors: ${errors.length}`, errors.length > 0 ? 'red' : 'green');
  log(`⚠️  Warnings: ${warnings.length}`, warnings.length > 0 ? 'yellow' : 'green');
  
  if (errors.length > 0) {
    log('\n❌ ERROR DETAILS:', 'red');
    errors.forEach(e => log(`  - ${e}`, 'red'));
  }
  
  if (warnings.length > 0) {
    log('\n⚠️  WARNING DETAILS:', 'yellow');
    warnings.forEach(w => {
      log(`  - ${w.file}:`, 'yellow');
      w.warnings.forEach(warn => log(`    • ${warn}`, 'yellow'));
    });
  }
  
  log('\n📄 Output file:', 'blue');
  log(`  ${CONFIG.OUTPUT_FILE}`, 'cyan');
  
  log('\n📁 Public files:', 'blue');
  log(`  EN: ${CONFIG.PUBLIC_EN_DIR}`, 'cyan');
  log(`  UA: ${CONFIG.PUBLIC_UA_DIR}`, 'cyan');
  
  log('\n✨ IMPORT COMPLETED!\n', 'green');
}

// Запускаємо імпорт
importAllRoles().catch(error => {
  log(`\n💥 FATAL ERROR: ${error}`, 'red');
  process.exit(1);
});