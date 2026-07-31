import { SITE_CONFIG } from '@/constants/site'

const TARGETS = [
  {
    id: 'sales',
    label: '集客に困っている',
    description: '問い合わせや予約を増やしたい方へ',
    items: [
      'ホームページやLPを作ったが成果につながらない',
      'サロンがInstagramを更新しても予約につながらない',
      'AI検索で自社が出てこない',
      '検索対策（SEO）やWeb集客が何から始めればいいか分からない',
    ],
  },
  {
    id: 'hiring',
    label: '採用に困っている',
    description: '応募者を増やし、自社を選ばれたい方へ',
    items: [
      '求人媒体だけに頼っており応募が来ない',
      '会社の魅力がうまく伝わっていない',
      '採用サイトを整備したい',
      '採用しても短期間で辞めてしまう',
    ],
  },
] as const

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function TargetSelectorSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            あなたはどちらですか？
          </h2>
          <p className="mt-4 text-base text-muted-fg sm:text-lg">
            状況に合わせた導線をご案内します。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TARGETS.map((target) => (
            <a
              key={target.id}
              href={SITE_CONFIG.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg active:scale-[0.99] sm:p-8"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground">{target.label}</h3>
                <p className="mt-1 text-sm text-muted-fg">{target.description}</p>
                <ul className="mt-5 space-y-2.5" role="list">
                  {target.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <span className="inline-flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors group-hover:bg-primary-hover">
                  LINEで無料相談する
                </span>
                <p className="mt-2.5 text-center text-xs text-muted-fg">
                  友だち追加後、一方的な営業メッセージは送りません。ご質問にだけお答えします。
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
