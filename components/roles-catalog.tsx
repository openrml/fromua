'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ROLES, CATEGORIES_WITH_META } from '@/lib/roles'
import { RoleCard } from '@/components/role-card'
import { useLocale } from '@/components/locale-provider'

const ARCHETYPES = Array.from(new Set(ROLES.map((r) => r.archetype))).sort()

export function RolesCatalog() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [archetype, setArchetype] = useState('all')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const { t, locale } = useLocale()
  const rc = t.rolesCatalog

  // Зчитування category з URL при завантаженні
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && CATEGORIES_WITH_META.some(c => c.slug === categoryParam)) {
      setCategory(categoryParam)
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    let roles = ROLES
    if (search.trim()) {
      const q = search.toLowerCase()
      roles = roles.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          (r.titleUa && r.titleUa.toLowerCase().includes(q)) ||
          r.description.toLowerCase().includes(q) ||
          (r.descriptionUa && r.descriptionUa.toLowerCase().includes(q)) ||
          r.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q)
      )
    }
    if (category !== 'all') roles = roles.filter((r) => r.category === category)
    if (archetype !== 'all') roles = roles.filter((r) => r.archetype === archetype)
    return roles
  }, [search, category, archetype])

  const hasActiveFilters = category !== 'all' || archetype !== 'all' || search

  return (
    <div className="flex flex-col gap-8">
      {/* Filters bar */}
      <div className="flex flex-col gap-4 border border-border p-5">
        {/* Search */}
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <span className="font-mono text-xs text-muted-foreground shrink-0">{rc.search}</span>
          <input
            type="search"
            placeholder={rc.searchPlaceholder}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{rc.category}</span>
            <select
              value={category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
              className="bg-transparent font-mono text-xs text-foreground outline-none cursor-pointer border border-border px-2 py-1"
            >
              <option value="all">{rc.all}</option>
              {CATEGORIES_WITH_META.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {locale === 'uk' ? c.labelUa : c.label} ({c.count})
                </option>
              ))}
            </select>
          </div>

          {/* Archetype */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{rc.archetype}</span>
            <select
              value={archetype}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setArchetype(e.target.value)}
              className="bg-transparent font-mono text-xs text-foreground outline-none cursor-pointer border border-border px-2 py-1"
            >
              <option value="all">{rc.all}</option>
              {ARCHETYPES.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className="flex-1" />

          {/* View toggle */}
          <div className="flex items-center border border-border">
            <button
              onClick={() => setView('grid')}
              className={`px-3 py-1.5 font-mono text-xs transition-colors ${view === 'grid' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label={rc.grid}
            >
              {rc.grid}
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-1.5 font-mono text-xs transition-colors ${view === 'list' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label={rc.list}
            >
              {rc.list}
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          {locale === 'uk' ? `Знайдено: ${filtered.length} ${filtered.length === 1 ? 'роль' : filtered.length < 5 ? 'ролі' : 'ролей'}` : `${filtered.length} role${filtered.length !== 1 ? 's' : ''} found`}
        </span>
        {hasActiveFilters && (
          <button
            onClick={() => { setSearch(''); setCategory('all'); setArchetype('all') }}
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {rc.clearFilters}
          </button>
        )}
      </div>

      {/* Grid / List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 border border-border">
          <span className="font-mono text-sm text-muted-foreground">{rc.noMatch}</span>
          <button
            onClick={() => { setSearch(''); setCategory('all'); setArchetype('all') }}
            className="font-mono text-xs border border-border px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {rc.resetFilters}
          </button>
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((role: import('@/lib/roles').Role) => (
            <div key={role.slug} className="bg-background">
              <RoleCard role={role} variant="compact" />
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-border px-6">
          {filtered.map((role: import('@/lib/roles').Role) => (
            <RoleCard key={role.slug} role={role} variant="default" />
          ))}
        </div>
      )}
    </div>
  )
}