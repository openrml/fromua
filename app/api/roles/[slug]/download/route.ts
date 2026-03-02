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

  if (lang === 'uk') {
    const baseName = slug.replace('-en', '').replace(/-/g, '_')
    fileName = `${baseName}_role.rml.txt`
    folder = 'ua'
  } else {
    const baseName = slug.replace(/-/g, '_')
    fileName = `${baseName}.rml.txt`
    folder = 'en'
  }

  // Получаем базовый URL сайта (работает и локально, и на проде)
  const origin = req.nextUrl.origin
  const fileUrl = `${origin}/roles/${folder}/${fileName}`

  try {
    let response = await fetch(fileUrl)

    // Если файл не найден и это английский, пробуем альтернативное имя
    if (!response.ok && lang === 'en') {
      const altFileName = slug.replace(/-/g, '_') + '__en__role.rml.txt'
      const altFileUrl = `${origin}/roles/en/${altFileName}`
      response = await fetch(altFileUrl)
      
      if (response.ok) {
        fileName = altFileName
      }
    }

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