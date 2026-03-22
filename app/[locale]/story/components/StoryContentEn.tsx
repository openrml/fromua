// app/story/components/StoryContentEn.tsx
import Link from 'next/link'

export function StoryContentEn({ locale }: { locale: string }) {
  return (
    <section lang="en" className="space-y-12 border-b border-border pb-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          How It Began
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
      </div>

      <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
        <p className="text-xl leading-relaxed">
          <strong className="text-foreground">2022.</strong> For many, life changed sharply and without warning.
        </p>

        <p>
          The war forced people to rethink their plans, find new sources of income, and learn new skills. At that same time, large language models began to develop rapidly—AI became accessible to almost everyone.
        </p>

        <p className="text-foreground font-medium">
          It seemed like an opportunity.
        </p>

        <p>
          But in practice, something strange happened: people tried working with AI—and were disappointed.
        </p>

        <p>
          The answers were eloquent but superficial. The results were inconsistent. The same prompt would yield different effects. It felt like a lottery.
        </p>

        <p>
          AI was perceived as:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>An oracle,</li>
          <li>A chatbox,</li>
          <li>A super search engine,</li>
          <li>A "magic button."</li>
        </ul>

        <p className="text-foreground font-medium">
          But it was none of these things.
        </p>
      </div>

      <div className="space-y-6 border-l-4 border-[var(--color-highlight)] pl-6">
        <h2 className="text-2xl font-bold text-foreground">The Observation</h2>
        
        <p className="text-muted-foreground">
          Over time, it became clear: the problem wasn't the power of the model.
        </p>

        <p className="text-muted-foreground">
          LLMs are probabilistic systems. They amplify the form of the input.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-6 border border-destructive/20 bg-destructive/5 rounded-lg">
            <p className="font-mono text-sm text-destructive mb-3">If a prompt is:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vague,</li>
              <li>• Emotional,</li>
              <li>• Lacking boundaries,</li>
              <li>• Unstructured,</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-destructive">The response will be the same.</p>
          </div>

          <div className="p-6 border border-[var(--color-highlight)]/20 bg-[var(--color-highlight)]/5 rounded-lg">
            <p className="font-mono text-sm text-foreground mb-3">If a prompt is:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Formalized,</li>
              <li>• Broken down into stages,</li>
              <li>• Includes a role,</li>
              <li>• Includes constraints,</li>
              <li>• Defines the output format,</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-foreground">The response becomes predictable.</p>
          </div>
        </div>

        <p className="text-foreground font-medium">
          The AI doesn't become "smarter." It becomes manageable.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Why Some Succeed and Others Don't</h2>
        
        <p className="text-muted-foreground">
          Research in critical and analytical thinking shows that consistent skills in structural decomposition and task formalization are demonstrated by a relatively small portion of people—estimates suggest around 15-25% of the adult population by strict criteria.
        </p>

        <p className="text-foreground font-medium">
          This is not a matter of intelligence.
        </p>

        <p className="text-foreground font-medium">
          It's a matter of the habit of thinking structurally.
        </p>

        <p className="text-muted-foreground">
          Most people are used to thinking intuitively. AI, however, requires formulating a task as a system.
        </p>

        <p className="text-muted-foreground">
          Without structure, there's a feeling of chaos.<br />
          With structure, control emerges.
        </p>
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">From Observation to Protocol</h2>
        
        <p className="text-muted-foreground">
          A simple question arose:
        </p>

        <p className="text-xl text-foreground font-medium italic">
          Can interaction with AI be formalized to make it repeatable?
        </p>

        <p className="text-muted-foreground">
          That's how the idea of <strong className="text-foreground">OpenRML</strong> was born—an open protocol for structured interaction with language models.
        </p>

        <p className="text-muted-foreground">
          The core idea is simple:
        </p>

        <p className="text-muted-foreground">
          Every request begins not with arbitrary text, but with clearly described elements:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Role,</li>
          <li>Objective,</li>
          <li>Process,</li>
          <li>Constraints,</li>
          <li>Output format.</li>
        </ul>

        <p className="text-foreground font-medium">
          This transforms a dialogue into a procedure.
        </p>

        <p className="text-muted-foreground">
          Not magic.<br />
          Not the "art of the right words."<br />
          But a system.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Testing in Practice</h2>
        
        <p className="text-muted-foreground">
          An idea must work in reality.
        </p>

        <p className="text-muted-foreground">
          So a simple experiment was conducted: the role "Frontend Dev Pro" was created, and with its help, the code for a constructor was written—without prior knowledge of React.
        </p>

        <p className="text-muted-foreground">
          The goal wasn't for the "AI to do everything itself." The goal was to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Break the process into stages,</li>
          <li>Maintain boundaries,</li>
          <li>Adjust the result,</li>
          <li>Move iteratively.</li>
        </ul>

        <p className="text-foreground font-medium">
          The approach proved replicable.
        </p>

        <p className="text-muted-foreground">
          Today, this constructor is available as an open reference implementation of RML—<strong className="text-foreground">openrml-builder</strong>. Anyone can not only use the ready-made roles but also create their own using the same structural principle.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Why FromUA Came to Be</h2>
        
        <p className="text-muted-foreground">
          If structure truly helps—it shouldn't remain a personal observation.
        </p>

        <p className="text-muted-foreground">
          FromUA was created as an open gallery of AI roles, designed according to the structural principle.
        </p>

        <p className="text-muted-foreground">
          These are not chatbots.<br />
          These are not abstract prompts.
        </p>

        <p className="text-foreground font-medium">
          These are formalized frameworks for working with AI that you can:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Use in any LLM,</li>
          <li>Adapt to your own tasks,</li>
          <li>Combine,</li>
          <li>Download and apply without being tied to a specific platform.</li>
        </ul>
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">The Main Idea</h2>
        
        <p className="text-foreground font-medium text-lg">
          AI is not a magic button.
        </p>

        <p className="text-foreground font-medium text-lg">
          It amplifies your way of thinking.
        </p>

        <p className="text-muted-foreground">
          Give a person a structure—they gain a tool.<br />
          Without structure—they get a random result.
        </p>

        <p className="text-muted-foreground">
          FromUA is an attempt to make structure accessible.
        </p>

        <p className="text-foreground font-medium">
          Not as a theory.<br />
          But as a practice.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Why Mentioning Confucius is Relevant Here</h2>
        
        <p className="text-muted-foreground">
          Confucius lived in an era of political and social chaos.
        </p>

        <p className="text-muted-foreground">
          He was not interested in mysticism or prophecy.<br />
          He was interested in order.
        </p>

        <p className="text-muted-foreground">
          He spoke about the role of a person, the correct form of action, the discipline of thought and behavior.
        </p>

        <p className="text-foreground font-medium">
          Not about what to think, but about how to structure action in a complex reality.
        </p>

        <p className="text-muted-foreground">
          Today's chaos has a different nature—informational and technological.
        </p>

        <p className="text-muted-foreground">
          AI has become a new force that everyone interacts with. But without structure, this interaction turns into noise.
        </p>

        <p className="text-muted-foreground">
          Drawing a parallel, the task of the 21st century is not to worship technology or fear it, but to develop a form of discipline when working with it.
        </p>

        <p className="text-foreground font-medium">
          AI does not amplify emotion or intention.<br />
          It amplifies structure.
        </p>

        <p className="text-muted-foreground">
          In this sense, the conversation about roles, boundaries, and task formalization is not about technology.
        </p>

        <p className="text-foreground font-medium">
          It's about a culture of thinking in a new era.
        </p>

        <p className="text-muted-foreground italic">
          This is why mentioning Confucius is relevant here—<br />
          not as a symbol of antiquity,<br />
          but as a reminder that in times of chaos, it is not strength that survives,<br />
          but order.
        </p>
      </div>

      <div className="space-y-4 p-8 border-2 border-[var(--color-highlight)] bg-accent/20 rounded-lg">
        <p className="text-muted-foreground italic">
          From 2022 to today, this path was walked by one developer. But the tool born from a personal observation is now available to everyone.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={`/${locale}/roles`}
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Go to the Role Gallery →
          </Link>
          <a
            href="https://rolesai.life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Create Your Own Role ↗
          </a>
        </div>
      </div>
    </section>
  )
}