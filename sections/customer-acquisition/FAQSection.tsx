const FAQS = [
  {
    question: 'Google検索対策（SEO）だけ、Googleマップ対策（MEO）だけの対策でも十分ではないですか？',
    answer:
      '部分的な対策だけでは、比較・検討の途中でお客様が離脱してしまうケースが多くあります。見つけてから問い合わせに至るまでの導線全体を整えることで、はじめて成果につながります。',
  },
  {
    question: 'AI検索（ChatGPTなど）対策とは、具体的に何をするのですか？',
    answer:
      'ChatGPTやGoogleのAI回答の中で、自社が候補として紹介されやすくなるよう、情報の構造化や比較されやすい文章設計を行います。Google検索対策（SEO）と並行して進めることで効果が高まります。',
  },
  {
    question: 'すでにホームページやLPがありますが、作り直す必要がありますか？',
    answer:
      '必ずしも作り直す必要はありません。まず現状の導線のどこに課題があるかを整理したうえで、必要な部分だけを改善するご提案も可能です。',
  },
  {
    question: '個人事業主やフリーランスでも相談できますか？',
    answer:
      'はい、ご相談いただけます。美容サロン、整体院、士業、工務店、スクールなど、幅広い業種の事業者様をご支援しています。',
  },
  {
    question: '費用はどのくらいかかりますか？',
    answer:
      '事業内容や現状の課題によって異なるため、まずは現状をお伺いしたうえでご提案します。お気軽にフォームからご相談ください。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer:
      '施策の内容や現状によって異なります。まずは導線のどこに課題があるかを整理するところから始め、優先順位をつけてご提案します。',
  },
] as const

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            よくあるご質問
          </h2>
          <p className="mt-4 text-base text-muted-fg sm:text-lg">
            ご相談前によくいただく質問をまとめました。
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-white px-5 py-4 transition-colors hover:border-primary/30 sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
                <span>{faq.question}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-muted-fg transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-fg sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
