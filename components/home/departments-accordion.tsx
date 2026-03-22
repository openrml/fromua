'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { DEPARTMENTS, getDepartmentInfo, DEPARTMENT_COLORS } from '@/lib/department-mapping'
import { ROLES } from '@/lib/roles'
import { useLocale } from '@/components/locale-provider'

export function DepartmentsAccordion() {
  const { locale } = useLocale()
  const [openDepartment, setOpenDepartment] = useState<number | null>(null)

  const toggleDepartment = (id: number) => {
    setOpenDepartment(openDepartment === id ? null : id)
  }

  // Групуємо ролі по відділеннях
  const rolesByDepartment = DEPARTMENTS.map(dept => {
    const departmentRoles = ROLES.filter(role => {
      const deptInfo = getDepartmentInfo(role.slug)
      return deptInfo?.department === dept.id
    })
    
    return {
      ...dept,
      roles: departmentRoles
    }
  })

  return (
    <div className="space-y-3">
      {rolesByDepartment.map(dept => {
        const isOpen = openDepartment === dept.id
        const deptColor = DEPARTMENT_COLORS[dept.id as keyof typeof DEPARTMENT_COLORS]

        return (
          <div 
            key={dept.id} 
            className="border border-border rounded-lg overflow-hidden"
            style={{
              borderLeftWidth: '4px',
              borderLeftColor: deptColor.border
            }}
          >
            {/* Header */}
            <button
              onClick={() => toggleDepartment(dept.id)}
              className="w-full p-6 text-left hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{dept.emoji}</span>
                    <h3 className="text-xl font-bold">
                      {locale === 'uk' ? 'ВІДДІЛЕННЯ' : 'SECTION'} {dept.id}: {locale === 'uk' ? dept.nameUa.toUpperCase() : dept.name.toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">
                    {locale === 'uk' ? dept.descriptionUa : dept.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <span 
                    className="text-sm font-mono font-semibold px-3 py-1 rounded"
                    style={{
                      backgroundColor: deptColor.bg,
                      color: deptColor.text
                    }}
                  >
                    {dept.count} {locale === 'uk' ? 'інструментів' : 'tools'}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
            </button>

            {/* Content */}
            {isOpen && (
              <div className="border-t border-border bg-secondary/30">
                <div className="p-6 space-y-3">
                  {dept.roles.map(role => {
                    const deptInfo = getDepartmentInfo(role.slug)
                    const roleTitle = locale === 'uk' && role.titleUa ? role.titleUa : role.title
                    const stateDesc = locale === 'uk' ? deptInfo?.stateDescriptionUa : deptInfo?.stateDescription

                    return (
                      <Link
                        key={role.slug}
                        href={`/${locale}/roles/${role.slug}`}
                        className="flex items-start gap-4 p-4 border border-border rounded-lg bg-background hover:border-foreground/50 hover:shadow-sm transition-all group"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      >
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                          style={{
                            backgroundColor: deptColor.bg,
                            border: `1px solid ${deptColor.border}`
                          }}
                        >
                          {role.slug === 'stop-kran-dlya-paniky' && '🚨'}
                          {role.slug === 'stop-knopka-dlya-spohadiv' && '💔'}
                          {role.slug === 'doroha-kriz-sl-ozy' && '🫂'}
                          {role.slug === 'suputnyk-pry-khronichnomu-bolyu' && '🩹'}
                          {role.slug === 'kolyskova-dlya-doroslykh' && '🛏️'}
                          {role.slug === 'vymknuty-rezhym-radar' && '⚡'}
                          {role.slug === 'probach-sebe' && '🔄'}
                          {role.slug === 'ne-zhory-svityachy-inshym' && '🕯️'}
                          {role.slug === 'mystetstvo-chekaty' && '⏳'}
                          {role.slug === 'hid-po-tilu-pislya-travmy' && '🧭'}
                          {role.slug === 'toy-khto-ne-sudyt' && '🤝'}
                          {role.slug === 'bat-ky-pid-chas-buri' && '👨‍👩‍👧'}
                          {role.slug === 'koly-kokhannya-pid-tyskom' && '💑'}
                          {role.slug === 'ty-tam-ya-tut-my-razom' && '📱'}
                          {role.slug === 'budivnychyy-spil-noty' && '🏘️'}
                          {role.slug === 'kyshen-kovyy-yuryst' && '⚖️'}
                          {role.slug === 'hroshi-instruktsiya-z-vyzhyvannya' && '💰'}
                          {role.slug === 'hroshi-pislya-vs-oho' && '📊'}
                          {role.slug === 'biznes-dlya-tykh-u-koho-nichoho-nemaye' && '💡'}
                          {role.slug === 'strateh-vidnovlennya-enerhiyi' && '🔋'}
                          {role.slug === 'pratsyuyu-z-lizhka-ale-zhyvu' && '💻'}
                          {role.slug === 'malen-ki-kroky-do-zhyttya' && '🐾'}
                          {role.slug === 'strateh-zminy-kar-yery-we' && '🎯'}
                          {role.slug === 'suputnyk-perezavantazhennya-zhyttya' && '🔄'}
                          {role.slug === 'navishcho-prokydatys-zavtra' && '🌅'}
                          {role.slug === 'obzhyvannya-novoho-svitu' && '🏡'}
                          {role.slug === 'mizh-viynoyu-i-myrom' && '🎖️'}
                          {role.slug === 'ai-kouch-zi-shi' && '🤖'}
                          {role.slug === 'hid-z-tsyfrovoyi-bezpeky' && '🔐'}
                          {role.slug === 'vidpochynok-yakyy-likuye' && '🎮'}
                          {role.slug === 'tsyfrovyy-bronezhylet' && '🛡️'}
                          {role.slug === 'poryadok-u-khati-poryadok-u-holovi' && '🧹'}
                          {role.slug === 'pomichnyk-na-kukhni' && '👨‍🍳'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base mb-1 group-hover:text-foreground/80">
                            {roleTitle}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {stateDesc}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                          <span className="text-sm">→</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
