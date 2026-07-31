import type { Metadata } from 'next'
import Link from 'next/link'
import { COLUMNS, COLUMN_CATEGORIES } from '@/data/columns'
import { CONCERNS } from '@/data/concerns'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'コラム',
  description: `${SITE_CONFIG.name}が発信する、集客・採用に関するコラム一覧です。`,
}

function categoryLabel(slug: string) {
  return COLUMN_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}

export default function BlogIndexPage() {
  const sorted = [...COLUMNS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

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

        <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-sm font-semibold text-foreground sm:text-base">
            今のお悩みから探す
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CONCERNS.map((concern) => (
              <Link
                key={concern.slug}
                href={`/blog/concern/${concern.slug}`}
                className="rounded-full border border-primary bg-white px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:text-sm"
              >
                {concern.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-foreground sm:text-base">
            方法・テーマから探す
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {COLUMN_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:text-sm"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {sorted.map((column) => (
            <Link
              key={column.slug}
              href={`/blog/${column.slug}`}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs text-muted-fg">
                <span className="rounded-full bg-primary-light px-2.5 py-0.5 font-semibold text-primary">
                  {categoryLabel(column.category)}
                </span>
                <time dateTime={column.publishedAt}>{column.publishedAt}</time>
              </div>
              <h2 className="text-base font-bold leading-snug text-foreground">
                {column.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-fg">{column.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
