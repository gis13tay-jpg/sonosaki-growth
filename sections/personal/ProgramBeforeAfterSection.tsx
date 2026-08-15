const BEFORE = [
  '何を変えたいのか分からない',
  '周囲の評価で決めてしまう',
  '自分には何もないと感じる',
  '考えても方向を決められない',
  '行動に移せない',
]

const AFTER = [
  '何を変える必要があるか分かる',
  '自分の判断基準で考えられる',
  'これまでの経験の価値が分かる',
  '自分で方向を決められる',
  '最初の行動を実行できる',
]

export function ProgramBeforeAfterSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          6回終了時に目指す状態
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#123524]/15 bg-[#f4f4f5] p-6 sm:p-7">
            <p className="text-sm font-semibold text-[#3f4a44]">BEFORE</p>
            <ul className="mt-4 space-y-3" role="list">
              {BEFORE.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#1f2a24]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#123524]/25 bg-[#eaf3ee] p-6 sm:p-7">
            <p className="text-sm font-semibold text-[#123524]">AFTER</p>
            <ul className="mt-4 space-y-3" role="list">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base leading-relaxed text-[#123524]">
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
