'use client'

import { useState, useMemo } from 'react'
import { ROLES, CATEGORIES } from '@/lib/roles'
import { RoleCard } from '@/components/role-card'
import { useLanguage } from '@/components/language-context'

const ARCHETYPES = Array.from(new Set(ROLES.map((r) => r.archetype))).sort()
const LICENSES_LIST = Array.from(new Set(ROLES.map((r) => r.license))).sort()

export function RolesCatalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [archetype, setArchetype] = useState('all')
  const [license, setLicense] = useState('all')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const { t, locale } = useLanguage()
  const rc = t.rolesCatalog

  const filtered = useMemo(() => {
    let roles = ROLES
    if (search.trim()) {
      const q = search.toLowerCase()
      roles = roles.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.titleUa.toLowerCase().includes(q) ||
          r.shortDescription.toLowerCase().includes(q) ||
          r.shortDescriptionUa.toLowerCase().includes(q) ||
          r.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q)
      )
    }
    if (category !== 'all') roles = roles.filter((r) => r.categorySlug === category)
    if (archetype !== 'all') roles = roles.filter((r) => r.archetype === archetype)
    if (license !== 'all') roles = roles.filter((r) => r.license === license)
    return roles
  }, [search, category, archetype, license])

  const hasActiveFilters = category !== 'all' || archetype !== 'all' || license !== 'all' || search

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
            onChange={(e) => setSearch(e.target.value)}
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
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent font-mono text-xs text-foreground outline-none cursor-pointer border border-border px-2 py-1"
            >
              <option value="all">{rc.all}</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {locale === 'uk' ? c.labelUa : c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Archetype */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{rc.archetype}</span>
            <select
              value={archetype}
              onChange={(e) => setArchetype(e.target.value)}
              className="bg-transparent font-mono text-xs text-foreground outline-none cursor-pointer border border-border px-2 py-1"
            >
              <option value="all">{rc.all}</option>
              {ARCHETYPES.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* License */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{rc.license}</span>
            <select
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              className="bg-transparent font-mono text-xs text-foreground outline-none cursor-pointer border border-border px-2 py-1"
            >
              <option value="all">{rc.all}</option>
              {LICENSES_LIST.map((l) => (
                <option key={l} value={l}>{l}</option>
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
          {rc.rolesFound(filtered.length)}
        </span>
        {hasActiveFilters && (
          <button
            onClick={() => { setSearch(''); setCategory('all'); setArchetype('all'); setLicense('all') }}
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
            onClick={() => { setSearch(''); setCategory('all'); setArchetype('all'); setLicense('all') }}
            className="font-mono text-xs border border-border px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {rc.resetFilters}
          </button>
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((role) => (
            <div key={role.slug} className="bg-background">
              <RoleCard role={role} view="grid" />
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-border px-6">
          {filtered.map((role) => (
            <RoleCard key={role.slug} role={role} view="list" />
          ))}
        </div>
      )}
    </div>
  )
}