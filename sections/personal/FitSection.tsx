const FIT = [
  '自分の考えを整理しながら方向性を決めたい',
  'これまでの経験を今後に活かしたい',
  '考えるだけでなく、具体的に動き始めたい',
  '誰かの正解ではなく、自分で判断できるようになりたい',
]

const NOT_FIT = [
  '短時間で正解だけを教えてほしい',
  '求人だけを紹介してほしい',
  'セッション外では何も考えたくない',
  '特定の成果を必ず保証してほしい',
]

export function FitSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          合う人・合わない人
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#123524]/20 bg-[#eaf3ee] p-6 sm:p-7">
            <p className="text-base font-semibold text-[#123524]">合う人</p>
            <ul className="mt-4 space-y-3" role="list">
              {FIT.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#1f2a24]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#123524]/10 bg-[#f4f4f5] p-6 sm:p-7">
            <p className="text-base font-semibold text-[#3f4a44]">合わない人</p>
            <ul className="mt-4 space-y-3" role="list">
              {NOT_FIT.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#3f4a44]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
