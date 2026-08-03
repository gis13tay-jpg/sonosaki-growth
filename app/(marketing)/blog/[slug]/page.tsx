import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  COLUMNS,
  COLUMN_CATEGORIES,
  categoryLabel,
  getAlsoReadColumns,
  getRelatedColumns,
} from '@/data/columns'
import { CONCERNS } from '@/data/concerns'
import { SITE_CONFIG } from '@/constants/site'
import { Breadcrumbs } from '@/components/blog/Breadcrumbs'

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

function concernLabel(slug: string) {
  return CONCERNS.find((c) => c.slug === slug)?.label ?? slug
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
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
  const relatedColumns = getRelatedColumns(column, 3)
  const alsoReadColumns = getAlsoReadColumns(
    column,
    relatedColumns.map((c) => c.slug),
    3,
  )

  return (
    <article className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'コラム', href: '/blog' },
            ...(category ? [{ label: category.label, href: `/blog/category/${category.slug}` }] : []),
            { label: column.title },
          ]}
        />

        <div className="mt-2 flex items-center gap-3 text-xs text-muted-fg">
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

        {column.keyTakeaways.length > 0 && (
          <div className="mt-6 rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm font-bold text-foreground sm:text-base">この記事で分かること</p>
            <ul className="mt-3 space-y-2" role="list">
              {column.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground sm:text-base">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {/* この記事の分類 */}
        <div className="mt-12 space-y-6 border-t border-border pt-8">
          {category && (
            <p className="text-sm text-muted-fg">
              この記事は「
              <Link href={`/blog/category/${category.slug}`} className="font-semibold text-primary hover:underline">
                {category.label}
              </Link>
              」カテゴリです。
            </p>
          )}

          {column.concerns.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-foreground">関連する悩み</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {column.concerns.map((concernSlug) => (
                  <Link
                    key={concernSlug}
                    href={`/blog/concern/${concernSlug}`}
                    className="rounded-full border border-primary bg-white px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    {concernLabel(concernSlug)}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 関連記事 */}
        {relatedColumns.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground">関連記事</p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedColumns.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="w-fit rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {categoryLabel(related.category)}
                  </span>
                  <h2 className="text-sm font-bold leading-snug text-foreground">{related.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* この記事を読んだ人はこちらも読んでいます */}
        {alsoReadColumns.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground">
              この記事を読んだ人はこちらも読んでいます
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {alsoReadColumns.map((also) => (
                <Link
                  key={also.slug}
                  href={`/blog/${also.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="w-fit rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {categoryLabel(also.category)}
                  </span>
                  <h2 className="text-sm font-bold leading-snug text-foreground">{also.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
