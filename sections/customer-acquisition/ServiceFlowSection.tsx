import { SITE_CONFIG } from '@/constants/site'

type StageItem = {
  stage: string
  description: string
  tools: { name: string; role: string }[]
}

const FLOW_STAGES: StageItem[] = [
  {
    stage: '見つけてもらう',
    description: '存在を知られるための入口をつくる',
    tools: [
      { name: 'AI検索（ChatGPTなど）', role: 'ChatGPT・AI Overviewで名前が挙がる' },
      { name: 'Google検索', role: '検索結果から自社ページへ誘導する' },
      { name: 'Googleマップ', role: '地域の人に発見される' },
    ],
  },
  {
    stage: '興味を持ってもらう',
    description: '「気になる」から「知りたい」へ変える',
    tools: [
      { name: 'Instagram', role: '世界観・人柄・日常でファン化する' },
      { name: 'コラム', role: '専門性と実績で信頼をつくる' },
    ],
  },
  {
    stage: '理解・比較してもらう',
    description: 'なぜこのサービスなのかを伝える',
    tools: [
      { name: 'ホームページ', role: '誰のため・何のためかを整理して伝える' },
      { name: 'コラム', role: '具体的な事例や考え方で深く理解してもらう' },
    ],
  },
  {
    stage: '問い合わせにつなげる',
    description: '行動のハードルを下げ、次の一歩へ',
    tools: [
      { name: '相談ページ（LP）', role: '目的に絞ったページで迷わせない' },
      { name: 'ホームページ', role: 'お問い合わせ導線を設計する' },
    ],
  },
  {
    stage: '関係を続ける',
    description: '一度きりで終わらせない仕組みをつくる',
    tools: [
      { name: 'LINE', role: 'つながりを維持し、再接触のきっかけをつくる' },
      { name: 'コラム', role: '継続的なコンテンツで信頼を積み重ねる' },
    ],
  },
]

function ChevronDown() {
  return (
    <div className="flex justify-center py-3">
      <svg
        className="h-6 w-6 text-border"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}

export function ServiceFlowSection() {
  return (
    <section id="service-flow" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            「選ばれる」は、流れの中にある。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
            各施策はバラバラに存在するものではなく、
            顧客が「見つけて→理解して→選ぶ」流れの中に位置づけられます。
          </p>
        </div>

        <div className="mt-12">
          {FLOW_STAGES.map((item, idx) => (
            <div key={item.stage}>
              <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                  {/* 左：ステージ情報 */}
                  <div className="sm:w-44 sm:shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-bold text-foreground">{item.stage}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-fg">{item.description}</p>
                  </div>

                  {/* 右：ツール一覧 */}
                  <div className="flex-1 space-y-2.5">
                    {item.tools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-3 rounded-xl bg-surface px-4 py-3">
                        <span className="shrink-0 rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {tool.name}
                        </span>
                        <p className="text-sm leading-relaxed text-muted-fg">{tool.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {idx < FLOW_STAGES.length - 1 && <ChevronDown />}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface px-6 py-6 sm:px-8 sm:py-7">
          <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
            どの段階をどの施策で担うかを設計することが、
            <br className="hidden sm:block" />
            SONOSAKI Growthの役割です。
          </p>
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            LINEで無料相談する
          </a>
          <p className="mt-2.5 text-xs text-muted-fg">
            友だち追加後、一方的な営業メッセージは送りません。ご質問にだけお答えします。
          </p>
        </div>
      </div>
    </section>
  )
}
