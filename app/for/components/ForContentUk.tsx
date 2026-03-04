// app/for/components/ForContentUk.tsx
import Link from 'next/link'
import { AudienceCard } from './AudienceCard'
import { AUDIENCES_UA } from '../data/audiences'

export function ForContentUk() {
  return (
    <section lang="uk" className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Для кого
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
        <p className="text-xl text-muted-foreground max-w-3xl">
          FromUA.life створено для всіх, хто живе в умовах хронічного стресу, невизначеності та криз. 
          Але різним людям він потрібен з різних причин. Ось як наші ролі можуть допомогти саме вам.
        </p>
      </div>

      <div className="grid gap-8">
        {AUDIENCES_UA.map((audience, idx) => (
          <AudienceCard key={idx} audience={audience} lang="uk" />
        ))}
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">Не знаєте, з чого почати?</h2>
        
        <p className="text-muted-foreground">
          Почніть із трьох питань:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Що болить просто зараз?</strong> (тривога, втома, втрата, конфлікт, гроші)</li>
          <li><strong className="text-foreground">Коли це сталося?</strong> (сьогодні, минулого тижня, рік тому, хронічно)</li>
          <li><strong className="text-foreground">Що ви вже пробували?</strong> (терапія, друзі, алкоголь, ігнорування)</li>
        </ol>

        <p className="text-muted-foreground">
          Відповіді підкажуть категорію. А далі — просто виберіть роль, яка відгукується назвою.
        </p>

        <p className="text-muted-foreground">
          Якщо помилитесь — нічого страшного. Завантажте іншу. Вони безкоштовні.
        </p>
      </div>

      <div className="space-y-4 p-8 border-2 border-[var(--color-highlight)] bg-accent/20 rounded-lg">
        <h3 className="text-xl font-bold text-foreground">Пам'ятайте</h3>
        
        <p className="text-muted-foreground">
          FromUA.life — це не заміна терапії, друзів, родини або бога.
        </p>

        <p className="text-foreground font-medium">
          Це інструмент. Як молоток. Молоток не будує дім сам — але з ним будувати легше.
        </p>

        <p className="text-muted-foreground">
          Беріть. Користуйтесь. Діліться.
        </p>

        <p className="text-muted-foreground italic">
          Бо виживати в хаосі поодинці — найважча робота у світі. А ми вже 10 років робимо її разом.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Переглянути всі ролі →
          </Link>
        </div>
      </div>
    </section>
  )
}