'use client'

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-context'

export default function StandardPage() {
  const { t } = useLanguage()
  const s = t.standard

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {s.protocolDoc}
                </span>
                <span className="h-px w-12 bg-border" />
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  RML 0.9.1
                </span>
              </div>
              <h1 className="text-5xl font-sans font-black tracking-tight text-foreground md:text-6xl text-balance max-w-3xl">
                {s.heading}
              </h1>
              <p className="max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
                {s.sub}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Content */}
            <div className="lg:col-span-2 flex flex-col gap-16">

              {/* What is RML */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.whatIsRml}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{s.p1}</p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{s.p2}</p>
                <div className="bg-secondary border border-border p-5">
                  <span className="font-mono text-sm text-foreground">rml://openrml/[slug]/[version]</span>
                  <p className="font-mono text-xs text-muted-foreground mt-2">{s.uriDesc}</p>
                </div>
              </section>

              {/* Role vs Prompt */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.roleVsPrompt}
                </h2>
                <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                  <div className="bg-background p-6 flex flex-col gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{s.promptLabel}</span>
                    <ul className="flex flex-col gap-3">
                      {s.promptItems.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">—</span>
                          <span className="font-sans text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="bg-background p-6 flex flex-col gap-4 border-l"
                    style={{ borderColor: 'var(--color-accent)' }}
                  >
                    <span className="font-mono text-xs" style={{ color: 'var(--color-accent)' }}>{s.rmlLabel}</span>
                    <ul className="flex flex-col gap-3">
                      {s.rmlItems.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="font-mono text-xs" style={{ color: 'var(--color-highlight)' }}>✓</span>
                          <span className="font-sans text-sm text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Identity System */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.identity}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{s.ip1}</p>
                <div className="bg-secondary border border-border p-5 flex flex-col gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{s.identityFormat}</span>
                  <span className="font-mono text-base text-foreground">{s.identityFormatVal}</span>
                  <div className="border-t border-border pt-3 grid grid-cols-2 gap-2">
                    {s.identityFields.map(([k, v]) => (
                      <div key={k} className="flex flex-col gap-0.5">
                        <span className="font-mono text-xs text-muted-foreground">{k}</span>
                        <span className="font-mono text-xs text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Architecture layers */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.architecture}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{s.ap1}</p>
                <div className="flex flex-col gap-px bg-border border border-border">
                  {s.archLayers.map((layer, i) => (
                    <div key={layer.layer} className="flex gap-6 bg-background p-5">
                      <span
                        className="font-mono text-xs font-bold shrink-0 w-12"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans text-sm font-bold text-foreground">{layer.layer}</span>
                        <span className="font-mono text-xs text-muted-foreground">{layer.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Versioning */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.versioning}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{s.vp1}</p>
                <div className="grid grid-cols-3 gap-px bg-border border border-border">
                  {s.versionSegments.map((item) => (
                    <div key={item.segment} className="bg-background p-5 flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold text-foreground">{item.segment}</span>
                      <span className="font-sans text-xs text-muted-foreground leading-relaxed">{item.description}</span>
                      <span className="font-mono text-xs text-muted-foreground">{item.example}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Licensing */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {s.licensing}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {s.licenses.map((lic, i) => {
                    const colors = [
                      'var(--color-highlight)',
                      'var(--color-accent)',
                      'var(--color-muted-foreground)',
                      'var(--color-muted-foreground)',
                    ]
                    return (
                      <div key={lic.id} className="border border-border p-5 flex flex-col gap-2">
                        <span className="font-mono text-xs font-bold" style={{ color: colors[i] }}>{lic.id}</span>
                        <span className="font-sans text-sm font-bold text-foreground">{lic.label}</span>
                        <span className="font-sans text-xs text-muted-foreground leading-relaxed">{lic.description}</span>
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="border border-border p-6 flex flex-col gap-4 sticky top-24">
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {s.quickRef}
                </span>
                <nav className="flex flex-col gap-3" aria-label="Page sections">
                  {s.sections.map((section) => (
                    <span
                      key={section}
                      className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      — {section}
                    </span>
                  ))}
                </nav>

                <div className="border-t border-border pt-4 flex flex-col gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{s.currentVersion}</span>
                  <span className="font-mono text-xl font-bold text-foreground">RML 0.9.1</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
