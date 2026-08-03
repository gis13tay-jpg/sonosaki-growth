import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { COLUMNS, categoryLabel } from '@/data/columns'
import { INDUSTRIES } from '@/data/industries'
import { Breadcrumbs } from '@/components/blog/Breadcrumbs'

type Params = { industry: string }

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ industry: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { industry } = await params
  const found = INDUSTRIES.find((i) => i.slug === industry)
  return { title: found ? `${found.label}向けのコラム一覧` : 'コラム' }
}

export default async function BlogIndustryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { industry } = await params
  const found = INDUSTRIES.find((i) => i.slug === industry)
  if (!found) notFound()

  const articles = COLUMNS.filter((c) => c.industries.includes(industry)).sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  )

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'コラム', href: '/blog' }, { label: found.label }]} />

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {found.label}向けのコラム
        </h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => (
            <Link
              key={i.slug}
              href={`/blog/industry/${i.slug}`}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                i.slug === industry
                  ? 'border-primary bg-primary-light text-primary'
                  : 'border-border bg-white text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {i.label}
            </Link>
          ))}
        </div>

        {articles.length === 0 ? (
          <p className="mt-10 text-sm text-muted-fg">
            この業種向けの記事は、まだありません。順次公開していきます。
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {articles.map((column) => (
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
        )}
      </div>
    </section>
  )
}
