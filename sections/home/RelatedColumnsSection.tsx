import Link from 'next/link'
import { COLUMNS, categoryLabel, getLatestColumns } from '@/data/columns'

function pickRelatedColumns(limit = 3) {
  const hiringColumns = COLUMNS.filter((c) => c.category === 'hiring')
  const fillerColumns = getLatestColumns(limit, hiringColumns.map((c) => c.slug))
  return [...hiringColumns, ...fillerColumns].slice(0, limit)
}

export function RelatedColumnsSection() {
  const columns = pickRelatedColumns(3)

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            関連コラム
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#123524] underline underline-offset-4"
          >
            コラム一覧を見る
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {columns.map((column) => (
            <Link
              key={column.slug}
              href={`/blog/${column.slug}`}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#123524]/30 hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-[#123524]/10 px-2.5 py-0.5 text-xs font-semibold text-[#123524]">
                {categoryLabel(column.category)}
              </span>
              <h3 className="text-base font-bold leading-snug text-slate-900">{column.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{column.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
