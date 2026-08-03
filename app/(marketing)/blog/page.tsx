import type { Metadata } from 'next'
import { ColumnExplorer } from '@/components/blog/ColumnExplorer'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'コラム',
  description: `${SITE_CONFIG.name}が発信する、集客・採用に関するコラム一覧です。`,
}

export default function BlogIndexPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            コラム
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-fg sm:text-lg">
            集客・採用でよくあるお悩みを整理して発信しています。まずは今のお悩みから探してみてください。
          </p>
        </div>

        <div className="mt-6">
          <ColumnExplorer />
        </div>
      </div>
    </section>
  )
}
