'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const lang = (navigator.language || navigator.languages?.[0] || '').toLowerCase()
    // Ukrainian and Russian → /uk, everything else → /en
    const locale = lang.startsWith('uk') || lang.startsWith('ru') ? 'uk' : 'en'
    router.replace(`/${locale}`)
  }, [router])

  return null
}
