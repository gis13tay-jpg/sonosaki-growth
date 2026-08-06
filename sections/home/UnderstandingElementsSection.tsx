const CIRCLES = [
  {
    title: '特性',
    description: '得意・苦手・行動や思考の傾向',
    color: 'bg-[#0b1c33]/80',
    position: 'top-0 left-0 items-start justify-start pl-[10%] pt-[10%]',
  },
  {
    title: '価値観',
    description: '働くうえで大切にしていること',
    color: 'bg-[#123524]/80',
    position: 'top-0 right-0 items-start justify-end pr-[10%] pt-[10%]',
  },
  {
    title: '環境',
    description: '力を発揮しやすい任せ方・伝え方',
    color: 'bg-[#0e6b63]/80',
    position: 'bottom-0 left-0 items-end justify-start pl-[10%] pb-[10%]',
  },
  {
    title: '未来',
    description: '本人が望んでいる人生や働き方',
    color: 'bg-[#9c7a1f]/80',
    position: 'bottom-0 right-0 items-end justify-end pr-[10%] pb-[10%]',
  },
] as const

export function UnderstandingElementsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            SONOSAKIが理解する4つの要素
          </h2>
        </div>

        {/* 4つの円が重なる図 */}
        <div className="relative mx-auto mt-14 aspect-square w-full max-w-[280px] sm:max-w-sm">
          {CIRCLES.map((circle) => (
            <div
              key={circle.title}
              className={`absolute flex h-[65%] w-[65%] rounded-full ${circle.color} ${circle.position}`}
            >
              <span className="text-base font-bold text-white sm:text-lg lg:text-xl">{circle.title}</span>
            </div>
          ))}

          {/* 中央 */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center shadow-[0_0_20px_rgba(0,0,0,0.12)] sm:h-28 sm:w-28">
            <p className="px-2 text-xs font-bold leading-snug text-slate-900 sm:text-sm">
              この会社に
              <br />
              いる意味
            </p>
          </div>
        </div>

        {/* 凡例（詳細説明） */}
        <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          {CIRCLES.map((circle) => (
            <div key={circle.title} className="flex items-start gap-3">
              <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${circle.color}`} />
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">{circle.title}</span>
                <span className="ml-1">{circle.description}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          4つを理解し、会社が目指す未来と仕事の役割につなげることで、「ここで働く理由」が生まれます。
        </p>
      </div>
    </section>
  )
}
