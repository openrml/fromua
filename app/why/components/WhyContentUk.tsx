// app/why/components/WhyContentUk.tsx
import Link from 'next/link'
import { ReasonCard } from './ReasonCard'
import { VUCAComponent } from './VUCAComponent'
import { WhyNotCard } from './WhyNotCard'
import { REASONS_UA } from '../data/reasons'
import { SCIENTIFIC_BASIS_UA } from '../data/scientificBasis'
import { WHY_NOT_OTHERS_UA } from '../data/whyNotOthers'

export function WhyContentUk() {
  return (
    <section lang="uk" className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Чому це працює
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
        <p className="text-xl text-muted-foreground">
          FromUA.life — це не &quot;ще один додаток для ментального здоров'я&quot;. Це інша філософія.
        </p>
      </div>

      {/* Main Reasons */}
      <div className="space-y-8">
        {REASONS_UA.map((reason, idx) => (
          <ReasonCard key={idx} reason={reason} />
        ))}
      </div>

      {/* Scientific Basis */}
      <div className="space-y-8 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">{SCIENTIFIC_BASIS_UA.title}</h2>
        
        {/* VUCA Framework */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">{SCIENTIFIC_BASIS_UA.vuca.title}</h3>
          <p className="text-muted-foreground">{SCIENTIFIC_BASIS_UA.vuca.subtitle}</p>
          
          <div className="grid gap-4">
            {SCIENTIFIC_BASIS_UA.vuca.components.map((comp, idx) => (
              <VUCAComponent key={idx} component={comp} />
            ))}
          </div>
        </div>

        {/* Neuropsychology */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">{SCIENTIFIC_BASIS_UA.neuropsychology.title}</h3>
          <p className="text-muted-foreground">{SCIENTIFIC_BASIS_UA.neuropsychology.content}</p>
        </div>
      </div>

      {/* Why Not Others */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Чому це працює там, де інше не працює</h2>
        
        <div className="grid gap-6">
          {WHY_NOT_OTHERS_UA.map((item, idx) => (
            <WhyNotCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Main Reason */}
      <div className="space-y-6 p-8 bg-gradient-to-r from-accent/20 to-accent/40 border-2 border-[var(--color-highlight)] rounded-lg">
        <h2 className="text-2xl font-bold text-foreground">Головна причина, чому це працює</h2>
        
        <p className="text-lg text-foreground font-medium">
          Тому що це створено людьми, які вижили.
        </p>

        <p className="text-muted-foreground">
          Не консультантами з Лондона.<br />
          Не дослідниками зі Стенфорда.<br />
          Не корпораціями з мільйонними бюджетами.
        </p>

        <p className="text-muted-foreground">
          А людьми, які:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Слухали сирени і рахували секунди до прильоту</li>
          <li>Ховали дітей, друзів, батьків</li>
          <li>Втрачали дім і будували новий</li>
          <li>Жили 10 років у стані, який світ тільки починає пізнавати</li>
        </ul>

        <p className="text-foreground font-medium text-lg pt-4">
          Це не теорія. Це дистильований досвід виживання.
        </p>

        <p className="text-foreground font-medium text-lg">
          І тому це працює.
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-4 p-8 border-2 border-foreground bg-accent/20 rounded-lg">
        <h3 className="text-xl font-bold text-foreground">Резюме: 5 причин, чому це працює</h3>
        
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Засновано на реальному досвіді</strong>, а не на теорії</li>
          <li><strong className="text-foreground">Структура замість порожніх слів</strong> — конкретні кроки, а не мотивація</li>
          <li><strong className="text-foreground">Безпека вбудована в протокол</strong> — етичні правила, редиректи, заборони</li>
          <li><strong className="text-foreground">Відкритість і доступність</strong> — .txt файли, без реєстрації, безкоштовно</li>
          <li><strong className="text-foreground">Масштабованість</strong> — одна роль може допомогти мільйонам</li>
        </ol>

        <div className="flex flex-wrap gap-4 pt-6">
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Спробувати роль →
          </Link>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Читати нашу історію
          </Link>
        </div>
      </div>
    </section>
  )
}