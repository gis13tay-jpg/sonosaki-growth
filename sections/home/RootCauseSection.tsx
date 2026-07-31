import { cn } from '@/lib/utils'

const GAPS = [
  {
    number: 1,
    title: '見つけてもらえない',
    description: 'AI検索やGoogle検索で候補に入らない',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: '伝わらない',
    description: '誰のための、何のサービスなのか分からない',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: '比べられない',
    description: '競合との違いや、選ぶ理由が見えない',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: '問い合わせにつながらない',
    description: '次に何をすればよいか分からない',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    ),
  },
  {
    number: 5,
    title: '関係が続かない',
    description: '一度の接点で終わり、検討につながらない',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
] as const

function ArrowRight() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <svg
        className="h-5 w-5 shrink-0 text-border"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  )
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-2 lg:hidden">
      <svg
        className="h-5 w-5 text-border"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}

export function RootCauseSection() {
  return (
    <section id="root-cause" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            良いサービスが選ばれないのは、
            <br />
            導線のどこかが途切れているから。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
            お客様があなたを見つけ、サービスを理解し、相談するまでの流れ。
            私たちは、この一連の流れを「集客導線」と呼んでいます。
            お客様は以下の5段階を経て問い合わせます。どこかに「断絶」があると、そこで離脱します。
          </p>
        </div>

        {/* カードフロー */}
        <div className="mt-12 flex flex-col lg:flex-row lg:items-stretch lg:gap-2">
          {GAPS.map((gap, idx) => (
            <div key={gap.number} className="flex flex-col lg:flex-row lg:items-center">
              <div
                className={cn(
                  'flex flex-col gap-3 rounded-2xl border bg-white p-5 transition-all duration-200',
                  'hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg',
                  'lg:min-h-[200px] lg:w-44 lg:shrink-0',
                )}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {gap.number}
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {gap.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{gap.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-fg">{gap.description}</p>
                </div>
              </div>
              {idx < GAPS.length - 1 && (
                <>
                  <ArrowRight />
                  <ArrowDown />
                </>
              )}
            </div>
          ))}
        </div>

        {/* まとめ */}
        <div className="mt-8 rounded-xl border border-border bg-surface px-6 py-6 sm:px-8 sm:py-7">
          <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
            まず施策を増やすのではなく、
            どこで導線が途切れているのかを整理します。
          </p>
        </div>
      </div>
    </section>
  )
}
