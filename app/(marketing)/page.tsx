import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="max-w-2xl space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
          サイト準備中
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          SONOSAKI Growth
        </h1>
        <p className="text-lg leading-relaxed text-muted-fg">
          AI検索・Google検索・Instagram・ブログ・LINE・LPを組み合わせた
          <br />
          「選ばれる仕組み」を設計・構築します。
        </p>
        <p className="text-sm text-muted-fg">
          サイト公開まで、しばらくお待ちください。
        </p>
      </div>
    </section>
  )
}
