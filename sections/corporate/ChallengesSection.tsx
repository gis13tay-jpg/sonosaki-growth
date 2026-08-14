const CHALLENGES = [
  '40代・50代社員が自ら動かない',
  '研修を実施しても行動が変わらない',
  '管理職以外の役割を示せない',
  '役職定年後の配置に困っている',
  'ベテラン社員の経験を活かし切れていない',
  '本人へ今後を考えてほしいが、対話が進まない',
]

export function ChallengesSection() {
  return (
    <section className="bg-[#eaf3ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          このような課題はありませんか
        </h2>
        <ul className="mt-8 space-y-4" role="list">
          {CHALLENGES.map((item) => (
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
