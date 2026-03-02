import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { getRoleBySlug } from '@/lib/roles'
export const runtime = 'edge';
export const dynamic = 'force-dynamic'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  const { slug } = await params
  const lang = req.nextUrl.searchParams.get('lang') ?? 'en'

  const role = getRoleBySlug(slug)
  if (!role) {
    return NextResponse.json({ error: 'Role not found' }, { status: 404 })
  }

  // Визначаємо шлях до файлу в public
  let fileName: string
  let filePath: string

  if (lang === 'uk') {
    // Для українських файлів: anticipatory_grief_support_role.rml.txt
    // Конвертуємо slug: anticipatory-grief-support-en → anticipatory_grief_support
    const baseName = slug
      .replace('-en', '')
      .replace(/-/g, '_')
    fileName = `${baseName}_role.rml.txt`
    filePath = path.join(process.cwd(), 'public', 'roles', 'ua', fileName)
  } else {
    // Для англійських файлів: anticipatory_grief_support__en__role.rml.txt
    // Конвертуємо slug: anticipatory-grief-support-en → anticipatory_grief_support__en__role.rml.txt
    const baseName = slug
      .replace(/-/g, '_')
    fileName = `${baseName}.rml.txt`  // Так, саме .rml.txt, не __en__role.rml.txt
    filePath = path.join(process.cwd(), 'public', 'roles', 'en', fileName)
  }

  console.log('Looking for file:', filePath) // Для дебагу

  try {
    // Перевіряємо чи існує файл
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      
      // Спробуємо альтернативний формат для EN
      if (lang === 'en') {
        const altFileName = slug.replace(/-/g, '_') + '__en__role.rml.txt'
        const altFilePath = path.join(process.cwd(), 'public', 'roles', 'en', altFileName)
        
        if (fs.existsSync(altFilePath)) {
          const fileContent = fs.readFileSync(altFilePath, 'utf-8')
          return new NextResponse(fileContent, {
            headers: {
              'Content-Type': 'text/plain; charset=utf-8',
              'Content-Disposition': `attachment; filename="${altFileName}"`,
            },
          })
        }
      }
      
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Читаємо файл
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Повертаємо файл
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('Error reading file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}