import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { COLUMNS, COLUMN_CATEGORIES } from '@/data/columns'
import { SITE_CONFIG } from '@/constants/site'

type Params = { slug: string }

export function generateStaticParams() {
  return COLUMNS.map((column) => ({ slug: column.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const column = COLUMNS.find((c) => c.slug === slug)
  return column ? { title: column.title, description: column.excerpt } : { title: 'コラム' }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const column = COLUMNS.find((c) => c.slug === slug)
  if (!column) notFound()

  const category = COLUMN_CATEGORIES.find((c) => c.slug === column.category)

  return (
    <article className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-sm text-muted-fg transition-colors hover:text-primary">
          ← コラム一覧に戻る
        </Link>

        <div className="mt-4 flex items-center gap-3 text-xs text-muted-fg">
          {category && (
            <Link
              href={`/blog/category/${category.slug}`}
              className="rounded-full bg-primary-light px-2.5 py-0.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              {category.label}
            </Link>
          )}
          <time dateTime={column.publishedAt}>{column.publishedAt}</time>
        </div>

        <h1 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
          {column.title}
        </h1>

        <div className="mt-8 space-y-5">
          {column.content.map((paragraph, idx) => (
            <p key={idx} className="text-base leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary bg-primary-light p-6 text-center sm:p-8">
          <p className="text-base font-bold text-foreground sm:text-lg">
            この記事の内容で気になることがあれば
          </p>
          <p className="mt-1 text-sm text-muted-fg">
            まずはお気軽にご相談ください。しつこい営業は行いません。
          </p>
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            LINEで無料相談する
          </a>
        </div>
      </div>
    </article>
  )
}
