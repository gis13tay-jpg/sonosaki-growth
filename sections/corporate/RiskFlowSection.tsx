const FLOW = [
  '今後の役割が見えない',
  '意欲と主体性が低下する',
  '指示された仕事だけになる',
  '経験が組織で活かされない',
  '若手への負担と組織の停滞が広がる',
]

const CONSEQUENCES = [
  '人件費と貢献度のバランスが崩れる',
  '若手が次の役割へ進みにくくなる',
  'ベテランの知識や判断力が継承されない',
  '本人も会社も動けない状態が長期化する',
  '活躍できる社員まで将来に希望を持ちにくくなる',
]

function FlowArrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <svg className="h-5 w-5 text-[#123524]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-5-5m5 5l5-5" />
      </svg>
    </div>
  )
}

export function RiskFlowSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          放置した場合に起きること
        </h2>

        <div className="mt-10">
          {FLOW.map((step, idx) => (
            <div key={step}>
              <div className="rounded-2xl border border-[#123524]/15 bg-[#f7f2ea] px-5 py-4 text-center text-base font-semibold leading-relaxed text-[#123524] sm:text-lg">
                {step}
              </div>
              {idx < FLOW.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>

        <ul className="mt-10 space-y-3" role="list">
          {CONSEQUENCES.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-[#3f4a44]">
              <span aria-hidden="true">・</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-[#123524] p-6 text-white sm:p-8">
          <p className="text-lg leading-relaxed sm:text-xl">
            社員に「自分でキャリアを考えてほしい」と伝えるだけでは、行動は変わりません。
            <br />
            本人への働きかけと、経験を活かせる役割・制度の両方が必要です。
          </p>
        </div>
      </div>
    </section>
  )
}
