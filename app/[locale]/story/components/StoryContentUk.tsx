// app/story/components/StoryContentUk.tsx
import Link from 'next/link'

export function StoryContentUk({ locale }: { locale: string }) {
  return (
    <section lang="uk" className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Як починалось
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
      </div>

      <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
        <p className="text-xl leading-relaxed">
          <strong className="text-foreground">2022 рік.</strong> Життя багатьох людей змінилося різко і без попередження.
        </p>

        <p>
          Війна змусила переглядати плани, шукати нові джерела доходу, освоювати нові навички. У цей же час почали стрімко розвиватися великі мовні моделі — ШІ став доступним практично кожному.
        </p>

        <p className="text-foreground font-medium">
          Здавалося, це шанс.
        </p>

        <p>
          Але на практиці відбувалося дивне: люди пробували працювати з ШІ — і розчаровувалися.
        </p>

        <p>
          Відповіді були красивими, але поверхневими. Результати — нестабільними. Той самий запит давав різний ефект. Виникало відчуття лотереї.
        </p>

        <p>
          ШІ сприймався як:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>оракул,</li>
          <li>балачка,</li>
          <li>супер-пошуковик,</li>
          <li>«чарівна кнопка».</li>
        </ul>

        <p className="text-foreground font-medium">
          Але він не був нічим із цього.
        </p>
      </div>

      <div className="space-y-6 border-l-4 border-[var(--color-highlight)] pl-6">
        <h2 className="text-2xl font-bold text-foreground">Спостереження</h2>
        
        <p className="text-muted-foreground">
          З часом стало зрозуміло: проблема не в потужності моделі.
        </p>

        <p className="text-muted-foreground">
          LLM — це ймовірнісні системи. Вони підсилюють форму входу.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-6 border border-destructive/20 bg-destructive/5 rounded-lg">
            <p className="font-mono text-sm text-destructive mb-3">Якщо запит:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• розмитий,</li>
              <li>• емоційний,</li>
              <li>• без меж,</li>
              <li>• без структури,</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-destructive">відповідь буде такою ж.</p>
          </div>

          <div className="p-6 border border-[var(--color-highlight)]/20 bg-[var(--color-highlight)]/5 rounded-lg">
            <p className="font-mono text-sm text-foreground mb-3">Якщо ж запит:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• формалізований,</li>
              <li>• розбитий на етапи,</li>
              <li>• містить роль,</li>
              <li>• містить обмеження,</li>
              <li>• задає формат результату,</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-foreground">відповідь стає передбачуваною.</p>
          </div>
        </div>

        <p className="text-foreground font-medium">
          ШІ не стає «розумнішим». Він стає керованим.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Чому в одних виходить, а в інших — ні</h2>
        
        <p className="text-muted-foreground">
          Дослідження в галузі критичного та аналітичного мислення показують, що стійкі навички структурної декомпозиції та формалізації завдань демонструє відносно невелика частина людей — у різних оцінках це близько 15–25% дорослого населення за строгими критеріями.
        </p>

        <p className="text-foreground font-medium">
          Це не питання інтелекту.
        </p>

        <p className="text-foreground font-medium">
          Це питання звички мислити структурно.
        </p>

        <p className="text-muted-foreground">
          Більшість людей звикли мислити інтуїтивно. ШІ ж вимагає постановки завдання у вигляді системи.
        </p>

        <p className="text-muted-foreground">
          Без структури виникає відчуття хаосу.<br />
          Зі структурою — з'являється контроль.
        </p>
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">Від спостереження до протоколу</h2>
        
        <p className="text-muted-foreground">
          Виникло просте запитання:
        </p>

        <p className="text-xl text-foreground font-medium italic">
          Чи можна формалізувати взаємодію з ШІ так, щоб вона була повторюваною?
        </p>

        <p className="text-muted-foreground">
          Так з'явилася ідея <strong className="text-foreground">OpenRML</strong> — відкритого протоколу структурованої взаємодії з мовними моделями.
        </p>

        <p className="text-muted-foreground">
          Суть проста:
        </p>

        <p className="text-muted-foreground">
          Кожен запит починається не з довільного тексту, а з чітко описаних елементів:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>роль,</li>
          <li>мета,</li>
          <li>процес,</li>
          <li>обмеження,</li>
          <li>формат результату.</li>
        </ul>

        <p className="text-foreground font-medium">
          Це перетворює діалог на процедуру.
        </p>

        <p className="text-muted-foreground">
          Не магію.<br />
          Не «мистецтво правильних слів».<br />
          А систему.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Перевірка практикою</h2>
        
        <p className="text-muted-foreground">
          Ідея має працювати в реальності.
        </p>

        <p className="text-muted-foreground">
          Тому було проведено простий експеримент: створено роль Frontend Dev Pro і з її допомогою написано код конструктора — без попереднього знання React.
        </p>

        <p className="text-muted-foreground">
          Завдання було не в тому, щоб «ШІ все зробив сам». Завдання було в тому, щоб:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>розбити процес на етапи,</li>
          <li>утримувати рамки,</li>
          <li>коригувати результат,</li>
          <li>рухатися ітеративно.</li>
        </ul>

        <p className="text-foreground font-medium">
          Підхід виявився відтворюваним.
        </p>

        <p className="text-muted-foreground">
          Сьогодні цей конструктор доступний як відкрита референсна імплементація RML — <strong className="text-foreground">openrml-builder</strong>. Кожен може не тільки використовувати готові ролі, а й створювати власні за тим самим структурним принципом.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Навіщо з'явився FromUA</h2>
        
        <p className="text-muted-foreground">
          Якщо структура справді допомагає — вона не має залишатися особистим спостереженням.
        </p>

        <p className="text-muted-foreground">
          FromUA створювався як відкрита галерея AI-ролей, оформлених за структурним принципом.
        </p>

        <p className="text-muted-foreground">
          Це не чат-боти.<br />
          Це не абстрактні промпти.
        </p>

        <p className="text-foreground font-medium">
          Це оформлені рамки роботи з ШІ, які можна:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>використовувати в будь-якій LLM,</li>
          <li>адаптувати під свої завдання,</li>
          <li>комбінувати,</li>
          <li>завантажувати і застосовувати без прив'язки до платформи.</li>
        </ul>
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">Головне</h2>
        
        <p className="text-foreground font-medium text-lg">
          ШІ не є чарівною кнопкою.
        </p>

        <p className="text-foreground font-medium text-lg">
          Він підсилює спосіб мислення.
        </p>

        <p className="text-muted-foreground">
          Якщо дати людині структуру — вона отримує інструмент.<br />
          Якщо структури немає — вона отримує випадковий результат.
        </p>

        <p className="text-muted-foreground">
          FromUA — це спроба зробити структуру доступною.
        </p>

        <p className="text-foreground font-medium">
          Не як теорію.<br />
          А як практику.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Чому тут доречно згадати Конфуція</h2>
        
        <p className="text-muted-foreground">
          Конфуцій жив у часи політичного й соціального хаосу.
        </p>

        <p className="text-muted-foreground">
          Його не цікавила містика чи пророцтва.<br />
          Його цікавив порядок.
        </p>

        <p className="text-muted-foreground">
          Він говорив про роль людини, про правильну форму дії, про дисципліну мислення й поведінки.
        </p>

        <p className="text-foreground font-medium">
          Не про те, що думати, а про те, як вибудовувати дію в складній реальності.
        </p>

        <p className="text-muted-foreground">
          Сьогодні хаос має іншу природу — інформаційну й технологічну.
        </p>

        <p className="text-muted-foreground">
          ШІ став новою силою, з якою взаємодіє кожен. Але без структури ця взаємодія перетворюється на шум.
        </p>

        <p className="text-muted-foreground">
          Якщо провести паралель, то завдання XXI століття — не поклонятися технології й не боятися її, а виробити форму дисципліни при роботі з нею.
        </p>

        <p className="text-foreground font-medium">
          ШІ підсилює не емоцію й не намір.<br />
          Він підсилює структуру.
        </p>

        <p className="text-muted-foreground">
          У цьому сенсі розмова про ролі, межі й формалізацію задач — це не про технологію.
        </p>

        <p className="text-foreground font-medium">
          Це про культуру мислення в нову епоху.
        </p>

        <p className="text-muted-foreground italic">
          Саме тому тут доречно згадати Конфуція —<br />
          не як символ давнини,<br />
          а як нагадування про те, що в періоди хаосу виживає не сила,<br />
          а порядок.
        </p>
      </div>

      <div className="space-y-4 p-8 border-2 border-[var(--color-highlight)] bg-accent/20 rounded-lg">
        <p className="text-muted-foreground italic">
          Від 2022-го до сьогодні цей шлях пройшов один розробник. Але інструмент, який народився з особистого спостереження, тепер доступний кожному.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={`/${locale}/roles`}
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Перейти до галереї ролей →
          </Link>
          <a
            href="https://rolesai.life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Створити власну роль ↗
          </a>
        </div>
      </div>
    </section>
  )
}