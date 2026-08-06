const FAQS = [
  {
    question: '求人を出しても応募が来ない原因は何ですか？',
    answer:
      '応募が来ない原因は、求人媒体や条件だけとは限りません。仕事内容や待遇は書かれていても、「この会社で働く意味」「どのような人に合う会社か」「入社後にどのような未来を描けるか」が伝わっていない場合があります。SONOSAKI Growthでは、条件の見直しだけでなく、会社が大切にしていることと、求職者が望む働き方をつなぐ採用メッセージを設計します。',
  },
  {
    question: '採用しても社員がすぐ辞めるのはなぜですか？',
    answer:
      '早期離職は、本人の忍耐力だけが原因とは限りません。採用時に伝えていた内容と実際の働き方の違い、上司とのコミュニケーション、本人の特性と役割の不一致、将来を描けないことなど、複数の要因があります。辞める理由を聞くだけではなく、その人が「ここで働き続ける理由」をつくれているかを整理する必要があります。',
  },
  {
    question: '社員理解とは、具体的に何を理解することですか？',
    answer:
      'SONOSAKI Growthが考える社員理解とは、性格を一つのタイプへ分類することではありません。本人の特性、価値観、力を発揮しやすい環境、望んでいる未来を複数の視点から理解し、任せる仕事、伝え方、役割、育成方法へつなげることです。人を評価するためではなく、その人が力を発揮できる方法を見つけるために行います。',
  },
  {
    question: '1on1を導入しても効果が出ないのはなぜですか？',
    answer:
      '1on1は、実施するだけでは効果が出るとは限りません。上司からの進捗確認だけになっている、本音を話せる関係がない、全員に同じ質問をしている、話した内容が役割や働き方へ反映されないといった場合、部下は効果を感じにくくなります。対話の回数だけでなく、相手を理解し、実際の関わり方を変えることが重要です。',
  },
  {
    question: '人事DXやAIを導入すれば、社員の定着率は上がりますか？',
    answer:
      '人事DXやAIは、情報整理、記録、分析、業務効率化には役立ちます。一方で、本音を話せる信頼関係をつくることや、言葉にならない変化に気づくこと、相手に合わせて伝え方を変えることまでは自動化できません。ツールを導入することと、人を理解できる組織になることは分けて考える必要があります。',
  },
  {
    question: '社員の価値観と会社の目標は、どのようにつなげればよいですか？',
    answer:
      '全員に会社の目標を一方的に理解させるだけでは、十分とはいえません。社員が大切にしていること、将来望んでいる生活、得意なことを理解し、現在の仕事が本人の未来と会社の目標の両方にどうつながるかを具体的にします。「会社のために働く」だけではなく、「この会社で働くことが自分の未来にもつながる」と感じられる状態を目指します。',
  },
  {
    question: '小規模企業でも採用・定着・組織づくりの相談はできますか？',
    answer:
      'はい。個人事業主や社員数の少ない会社でも相談できます。人数が少ない組織ほど、一人の採用や退職、経営者との関係が会社全体へ大きく影響します。求人票の見直し、採用メッセージ、少人数チームの役割整理、社員との関わり方など、現在の人数と課題に合わせて支援内容を設計します。',
  },
  {
    question: 'SONOSAKI Growthでは、どこまで支援してもらえますか？',
    answer:
      '採用メッセージや求人票の設計から、入社後の定着、社員理解、役割・配置、社内コミュニケーション、組織づくりまで対応します。すべての施策を一度に導入するのではなく、現在起きている問題を整理し、優先度の高い部分から支援内容を設計します。まず6問の組織診断で、採用と組織のどこから見直すべきかを確認できます。',
  },
] as const

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            採用・定着・組織づくりに関する
            <br className="sm:hidden" />
            よくあるご質問
          </h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            SONOSAKI Growthの支援内容や、採用・定着・社員理解についてよくいただくご質問をまとめました。
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-[#123524]/30 sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 sm:text-base">
                <span className="flex-1">{faq.question}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
