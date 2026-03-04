import { NextRequest, NextResponse } from 'next/server'
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

  // Формируем имя файла
  let fileName: string
  let folder: string
  let fileUrl: string
  const origin = req.nextUrl.origin

  if (lang === 'uk') {
    // Для українських ролей: видаляємо '-en', замінюємо дефіси на підкреслення, додаємо _role.rml.txt
    const baseName = slug.replace('-en', '').replace(/-/g, '_')
    fileName = `${baseName}_role.rml.txt`
    folder = 'ua'
    fileUrl = `${origin}/roles/${folder}/${fileName}`
  } else {
    // Для англійських ролей: пробуємо різні варіанти
    folder = 'en'
    
    // Варіант 1: простий формат (slug_без_дефісів.rml.txt)
    const simpleName = slug.replace(/-/g, '_') + '.rml.txt'
    let response = await fetch(`${origin}/roles/en/${simpleName}`)
    
    if (response.ok) {
      fileName = simpleName
      fileUrl = `${origin}/roles/en/${simpleName}`
    } else {
      // Варіант 2: формат з __en__role
      const altName = slug.replace(/-/g, '_') + '__en__role.rml.txt'
      response = await fetch(`${origin}/roles/en/${altName}`)
      
      if (response.ok) {
        fileName = altName
        fileUrl = `${origin}/roles/en/${altName}`
      } else {
        return NextResponse.json({ 
          error: 'File not found on server',
          attempted: [`${origin}/roles/en/${simpleName}`, `${origin}/roles/en/${altName}`]
        }, { status: 404 })
      }
    }
  }

  try {
    const response = await fetch(fileUrl)
    
    if (!response.ok) {
      return NextResponse.json({ error: 'File not found on server' }, { status: 404 })
    }

    const fileContent = await response.text()

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('Error fetching file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}