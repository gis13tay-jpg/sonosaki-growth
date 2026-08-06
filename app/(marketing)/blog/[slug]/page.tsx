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
  if (!column) return { title: 'コラム' }

  const keywords = [column.primaryKeyword, ...(column.relatedKeywords ?? [])].filter(
    (v): v is string => Boolean(v),
  )
  const url = `${SITE_CONFIG.url}/blog/${column.slug}`
  const description = column.description ?? column.excerpt
  const publishedTime = new Date(column.publishedAt).toISOString()
  const modifiedTime = new Date(column.updatedAt ?? column.publishedAt).toISOString()
  const ogImage = `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`

  return {
    title: column.title,
    description,
    ...(keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: column.title,
      description,
      publishedTime,
      modifiedTime,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: column.title,
      description,
      images: [ogImage],
    },
  }
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
  const hasSections = (column.contentSections?.length ?? 0) > 0
  const ctaHref = column.ctaHref ?? SITE_CONFIG.lineUrl
  const ctaExternal = !column.ctaHref
  const ctaLabel = column.ctaLabel ?? 'LINEで無料相談する'
  const ctaDescription =
    column.ctaDescription ?? 'まずはお気軽にご相談ください。しつこい営業は行いません。'
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${column.slug}`
  const ogImage = `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`

  return (
    <article className="bg-background py-16 sm:py-20">
      {column.faq && column.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: column.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            url: canonicalUrl,
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
            headline: column.title,
            description: column.description ?? column.excerpt,
            image: [ogImage],
            datePublished: column.publishedAt,
            dateModified: column.updatedAt ?? column.publishedAt,
            author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
            publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
          }),
        }}
      />

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
          {column.updatedAt && column.updatedAt !== column.publishedAt && (
            <span>（更新：{column.updatedAt}）</span>
          )}
        </div>

        <h1 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
          {column.title}
        </h1>

        {column.leadAnswer && (
          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-primary-light/40 p-5 sm:p-6">
            <p className="text-sm font-bold text-primary">結論</p>
            <p className="mt-2 text-base leading-relaxed text-foreground">{column.leadAnswer}</p>
          </div>
        )}

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

        {hasSections ? (
          <div className="mt-8 space-y-6">
            {column.contentSections!.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-base leading-relaxed text-foreground ${
                      section.heading || pIdx > 0 ? 'mt-3' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  section.ordered ? (
                    <ol className="mt-3 list-decimal space-y-1.5 pl-5" role="list">
                      {section.list.map((item) => (
                        <li key={item} className="text-base leading-relaxed text-foreground">
                          {item}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-3 space-y-1.5" role="list">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-foreground">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-fg" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {column.content.map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* FAQ */}
        {column.faq && column.faq.length > 0 && (
          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              よくあるご質問
            </h2>
            <div className="mt-4 space-y-3">
              {column.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-border bg-surface px-4 py-3 sm:px-5 sm:py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
                    <span className="flex-1">{item.question}</span>
                    <svg
                      className="h-4 w-4 shrink-0 text-muted-fg transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-fg sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-primary bg-primary-light p-6 text-center sm:p-8">
          <p className="text-base font-bold text-foreground sm:text-lg">
            この記事の内容で気になることがあれば
          </p>
          <p className="mt-1 text-sm text-muted-fg">{ctaDescription}</p>
          {ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
            >
              {ctaLabel}
            </Link>
          )}
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
