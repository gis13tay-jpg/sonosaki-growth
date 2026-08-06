import { GREEN_BADGE_BG } from './theme'

const PROBLEMS = [
  {
    title: '応募はあるが、求める人材と噛み合わない',
    description: '条件面では応募が来ても、自社が求める人物像とズレが生じやすい',
  },
  {
    title: '採用してもすぐに辞めてしまう',
    description: '入社前後の情報のギャップから、早期離職が起こりやすい',
  },
  {
    title: '何を考えているか分からない社員が増えている',
    description: '価値観や本音が見えず、関わり方に迷いが生じる',
  },
  {
    title: '制度や研修を増やしても、雰囲気が変わらない',
    description: '施策は整っていても、一人ひとりへの理解が置き去りになりやすい',
  },
  {
    title: '問題が起きても、原因がはっきりしない',
    description: '場当たり的な対応になり、同じ問題が繰り返されやすい',
  },
] as const

function IconAlert() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

export function ProblemsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            採用・定着・組織で、
            <br />
            こんなことが起きていませんか。
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${GREEN_BADGE_BG}`}>
                <IconAlert />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 sm:text-base">{problem.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
