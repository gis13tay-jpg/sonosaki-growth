const INCLUDES = [
  '1対1のオンラインセッション全6回',
  'セッション間の課題と振り返り',
  '自分の判断基準の整理',
  'これまでの経験の整理',
  '今後の方向性の整理',
  '90日間の行動計画',
  '期間中のメッセージ相談',
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#123524] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          40代からのキャリア再設計プログラム
        </h2>

        <div className="mt-8 rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/20 sm:p-10">
          <p className="text-sm font-semibold text-white/80">料金</p>
          <p className="mt-2 text-3xl font-bold sm:text-4xl">
            全6回　198,000円
            <span className="text-lg font-semibold text-white/80">（税込）</span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="text-base font-semibold text-white/90">含まれるもの</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-white/90">
                  <span aria-hidden="true">・</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-base font-semibold text-white/90">支払い方法</p>
            <ul className="mt-4 space-y-2.5" role="list">
              <li className="text-base leading-relaxed text-white/90">一括払い：198,000円</li>
              <li className="text-base leading-relaxed text-white/90">3回払い：66,000円×3回</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-10">
          <h3 className="text-xl font-bold sm:text-2xl">6回の会話に支払う料金ではありません。</h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-white/90 sm:text-lg">
            <p>19.8万円は、小さな金額ではありません。</p>
            <p>
              だからこそ、一時的に気持ちを軽くするための相談ではなく、これからの5年・10年で、時間とお金をどこへ使うのかを決めるところまで扱います。
            </p>
            <p>
              間違った選択、目的のない資格取得、何年も迷い続ける時間を減らし、自分に必要な一歩を選ぶためのプログラムです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
