export const PERSONAL_FAQ = [
  {
    question: '進む方向が何も決まっていなくても受けられますか',
    answer:
      'はい。多くの方が「何が問題か分からない」という状態から始めます。最初の数回で、今の状況と迷いの背景を整理するところから進めます。',
  },
  {
    question: '6回受ければ必ず答えが出ますか',
    answer:
      '全ての方に同じ結論をお約束するものではありません。ご自身の判断基準を整理し、納得できる方向と最初の行動を選べる状態を目指します。',
  },
  {
    question: 'どのくらいの期間で受けますか',
    answer: '目安は1〜2週間に1回のペースで、全6回を2〜3か月程度で行います。ご都合に応じて調整します。',
  },
  {
    question: '40代以外でも受けられますか',
    answer:
      '主に40代以降の方を想定した内容ですが、年齢だけで対象を限定しているわけではありません。ご相談のうえで判断いたします。',
  },
  {
    question: 'セッションはオンラインですか',
    answer: 'はい、オンラインでの実施を基本としています。',
  },
  {
    question: '支払い方法を教えてください',
    answer: '一括払い（198,000円）と、3回払い（66,000円×3回）からお選びいただけます。',
  },
]

export function FAQSection() {
  return (
    <section className="bg-[#f4f4f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          よくあるご質問
        </h2>
        <div className="mt-8 space-y-3">
          {PERSONAL_FAQ.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[#123524]/15 bg-white px-5 py-4 sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#123524] sm:text-lg">
                <span className="flex-1">{item.question}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-[#123524] transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-[#1f2a24]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
