'use client'

import { useLocale } from '@/components/locale-provider'

export function RolesPageHeader() {
  const { t } = useLocale()
  const rc = t.rolesCatalog

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            {rc.galleryLabel}
          </span>
          <h1 className="text-4xl font-sans font-black tracking-tight text-foreground md:text-5xl">
            {rc.heading}
          </h1>
          <p className="max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
            {rc.sub}
          </p>
        </div>
      </div>
    </div>
  )
}
