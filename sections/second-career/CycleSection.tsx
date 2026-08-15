const ALONE_CYCLE = ['モヤモヤする', '一人で考える', 'これまでと同じ前提で考える', '不安になり決められない', 'またモヤモヤする']

const DIALOGUE_CYCLE = ['モヤモヤを話す', '第三者から問い直される', '感情・経験・思い込みに気づく', '自分の判断基準ができる', '小さな行動を試せる']

const POINTS = [
  '自分にとって当たり前の経験は、自分では価値に気づきにくい',
  '思い込みは、自分一人では思い込みだと気づきにくい',
  '感情と現実的な条件が混ざると判断が難しくなる',
  '不安が強いほど、行動より情報収集を続けやすい',
  'SONOSAKIは答えを押しつけるのではなく、本人が自分で判断できる状態をつくる',
]

function DownArrow({ color }: { color: string }) {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <svg className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-5-5m5 5l5-5" />
      </svg>
    </div>
  )
}

export function CycleSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold leading-snug tracking-tight text-[#123524] sm:text-3xl">
          一人で考え続けても答えが出にくい理由
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-center text-sm font-bold text-[#3f4a44]">一人で考え続けると</p>
            <div className="mt-4">
              {ALONE_CYCLE.map((step, idx) => (
                <div key={step}>
                  <div className="rounded-xl border border-[#123524]/15 bg-[#f4f4f5] px-4 py-3 text-center text-sm font-medium leading-relaxed text-[#3f4a44] sm:text-base">
                    {step}
                  </div>
                  {idx < ALONE_CYCLE.length - 1 && <DownArrow color="text-[#123524]/30" />}
                </div>
              ))}
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#3f4a44]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0113.15-4.95M19.5 12a7.5 7.5 0 01-13.15 4.95M4.5 4.5v4.5h4.5M19.5 19.5V15h-4.5" />
                </svg>
                また振り出しに戻る
              </div>
            </div>
          </div>

          <div>
            <p className="text-center text-sm font-bold text-[#123524]">第三者との対話が入ると</p>
            <div className="mt-4">
              {DIALOGUE_CYCLE.map((step, idx) => (
                <div key={step}>
                  <div className="rounded-xl border border-[#123524]/25 bg-[#eaf3ee] px-4 py-3 text-center text-sm font-medium leading-relaxed text-[#123524] sm:text-base">
                    {step}
                  </div>
                  {idx < DIALOGUE_CYCLE.length - 1 && <DownArrow color="text-[#123524]/50" />}
                </div>
              ))}
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#e8622a]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                次の行動へ進める
              </div>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-14 max-w-2xl space-y-3" role="list">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-base leading-relaxed text-[#1f2a24]">
              <span aria-hidden="true">・</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
