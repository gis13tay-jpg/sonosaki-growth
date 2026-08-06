type Tool = {
  name: string
  category: string
  purpose: string
  description: string
  iconBg: string
  iconColor: string
  icon: React.ReactNode
}

const TOOLS: Tool[] = [
  {
    name: 'Google検索（SEO）',
    category: '見つけてもらう',
    purpose: 'Googleで検索した人に見つけてもらう仕組み',
    description: 'キーワードで検索した人を、自社のページへ誘導します。',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: 'Googleマップ（MEO）',
    category: '見つけてもらう',
    purpose: '地域のお客様に見つけてもらう仕組み',
    description: 'Googleマップ上での表示を最適化し、近くの人に発見されます。',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    name: 'AI検索（ChatGPTなど）',
    category: '見つけてもらう',
    purpose: 'AIの回答の中で紹介されるための設計',
    description: 'ChatGPTやGoogle AIが質問に答えるとき、自社が候補として挙がる状態をつくります。',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    category: '興味を持ってもらう',
    purpose: 'まだ知らない人に興味を持ってもらう入口',
    description: '写真・動画・ストーリーを通じて、ブランドの世界観や人柄を伝えます。',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    name: 'ホームページ',
    category: '理解してもらう',
    purpose: '会社やサービスを理解してもらう場所',
    description: '誰のためのサービスか、なぜ選ばれるのかを整理し、信頼をつくります。',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'お問い合わせにつながるページ（LP）',
    category: '問い合わせにつなげる',
    purpose: '問い合わせや購入につなげるページ',
    description: 'ひとつの目的に絞り、訪問者を行動へ導くための専用ページです。',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    name: 'LINE',
    category: '関係を続ける',
    purpose: '問い合わせ後も関係を続ける場所',
    description: '一度つながったお客様に、継続的にアプローチし、信頼関係を深めます。',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="flex items-start justify-between gap-2">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tool.iconBg} ${tool.iconColor}`}>
          {tool.icon}
        </div>
        <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted-fg">
          {tool.category}
        </span>
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{tool.name}</p>
        <p className="mt-1 text-xs font-medium leading-relaxed text-primary">{tool.purpose}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-fg">{tool.description}</p>
      </div>
    </div>
  )
}

export function EducationSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            それぞれは、何のためにあるのか。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
            Google検索、Googleマップ、AI検索、Instagram、ページ、LINE——
            それぞれが「お客様との接点のどの段階」を担うかを理解することで、
            何が必要かが見えてきます。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-fg">
          どれかひとつで十分な場合もあれば、複数を組み合わせる必要がある場合もあります。
          <br className="hidden sm:block" />
          まず現状を整理することが、正しい選択への第一歩です。
        </p>
      </div>
    </section>
  )
}
