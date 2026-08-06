const MOMENTS = [
  '最初のお客様に喜んでもらえた日',
  '初めて社員を迎えた日の責任',
  '働く人と、その家族も幸せにしたいという思い',
  '一人ひとりの可能性を信じられる会社',
  '朝、会社へ行くことにワクワクできる組織',
  '家族に「この会社で働けてよかった」と話せる仕事',
] as const

export function FoundingStorySection() {
  return (
    <section className="bg-[#0b1c33] py-24 sm:py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-white/60 sm:text-base">
          会社を始めた日のことを、
          <br />
          覚えていますか。
        </p>

        <h2 className="mt-8 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
          あなたがつくりたかったのは、
          <br />
          ただ利益を上げる会社でしたか。
        </h2>

        <ul className="mx-auto mt-16 flex max-w-sm flex-col gap-6" role="list">
          {MOMENTS.map((moment) => (
            <li key={moment} className="text-sm leading-relaxed text-white/75 sm:text-base">
              {moment}
            </li>
          ))}
        </ul>

        <p className="mt-20 text-2xl font-extrabold leading-relaxed text-white sm:text-3xl">
          日本でいちばん、
          <br />
          生きがいを感じられる会社へ。
        </p>

        <p className="mt-16 text-base font-semibold leading-relaxed text-white/80 sm:text-lg">
          あの日思い描いた会社を、
          <br />
          もう一度ここからつくりませんか。
        </p>
      </div>
    </section>
  )
}
