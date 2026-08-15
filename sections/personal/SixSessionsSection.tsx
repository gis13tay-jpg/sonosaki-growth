const SESSIONS = [
  { n: 1, text: '「何となくこのままでは嫌」が、具体的に何を変える必要があるのか分かる状態になる。' },
  { n: 2, text: '周囲の評価や一般論ではなく、自分が何を基準に選ぶのかが分かる。' },
  { n: 3, text: '自分には何もないという状態から、これまでの経験の何が価値になるのか分かる。' },
  { n: 4, text: '今の役割だけに縛られず、自分の経験を今後どう活かせるかが見えてくる。' },
  { n: 5, text: '自分の判断基準とこれからの時間を踏まえて、進む方向を決められる。' },
  { n: 6, text: '考えて終わる状態から、いつ、何をするかを決め、実際に動き始められる。' },
]

export function SixSessionsSection() {
  return (
    <section className="bg-[#eaf3ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          全6回で起きる変化
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SESSIONS.map((session) => (
            <div
              key={session.n}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#123524] text-sm font-bold text-white">
                {session.n}
              </span>
              <p className="text-base leading-relaxed text-[#1f2a24]">{session.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
