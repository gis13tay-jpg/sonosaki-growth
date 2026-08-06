const TOOL_SUPPORT = ['対話の機会をつくる', '記録する', '要約する', '情報を整理する', '質問候補を出す'] as const
const HUMAN_ONLY = [
  '本音を話せる信頼関係をつくる',
  '言葉にならない変化に気づく',
  '相手に合わせて伝え方を変える',
  'これまでの関係を踏まえて言葉を選ぶ',
  '本人の人生と会社の未来をつなぐ',
] as const

function IconTool() {
  return (
    <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#123524]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}

export function LimitationsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
            1on1を導入しただけでは、
            <br />
            人を理解したことにはならない。
          </h2>
        </div>

        {/* 調査数字 */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-4xl font-extrabold text-slate-900 sm:text-5xl">55.7%</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
              1on1を実施している
              <br />
              企業の割合
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-slate-900 sm:text-5xl">3人に1人</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
              部下側が
              <br />
              「効果を感じていない」
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          出典：パーソル総合研究所「職場での対話に関する定量調査」2025年
        </p>

        {/* 一本の流れ */}
        <div className="mt-16">
          <p className="text-center text-xs font-semibold text-slate-400">
            1on1・DX・AXが支援できること
          </p>
          <div className="mx-auto mt-4 flex max-w-md flex-col gap-2.5">
            {TOOL_SUPPORT.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5">
                <IconTool />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <ArrowDown />

          <p className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
            それでも、対話するのは人。
          </p>

          <ArrowDown />

          <p className="text-center text-xs font-semibold text-slate-400">人にしかできないこと</p>
          <div className="mx-auto mt-4 flex max-w-md flex-col gap-2.5">
            {HUMAN_ONLY.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-full border border-[#123524]/20 bg-[#123524]/5 px-4 py-2.5">
                <IconHeart />
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white px-6 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-sm font-medium leading-relaxed text-slate-900 sm:text-base">
            DXやAXは、人を理解するための補助にはなる。
            <br />
            しかし、信頼関係そのものを自動化することはできない。
          </p>
        </div>
      </div>
    </section>
  )
}
