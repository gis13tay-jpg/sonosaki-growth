const AUDIENCE = [
  '仕事への意欲が以前のように戻らない',
  '辞めたいほどではないが、このままでいいとも思えない',
  '何を学べばいいか分からない',
  'これまでの経験を今後どう使えばいいか分からない',
  '仕事以前に、これからどう生きたいか分からない',
  '一人で何度考えても同じ迷いに戻る',
]

export function AudienceSection() {
  return (
    <section className="bg-[#eaf3ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          このような方へ
        </h2>
        <ul className="mt-8 space-y-4" role="list">
          {AUDIENCE.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 text-lg leading-relaxed text-[#1f2a24] shadow-sm"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e8622a]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
