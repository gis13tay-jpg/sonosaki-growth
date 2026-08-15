import Link from 'next/link'
import { categoryLabel, getLatestColumns } from '@/data/columns'
import { BUTTON_OUTLINE } from '@/sections/second-career/theme'

export function ColumnsSection() {
  const columns = getLatestColumns(3)

  return (
    <section className="bg-[#f4f4f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          これからの生き方を考えるためのヒント
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {columns.map((column) => (
            <Link
              key={column.slug}
              href={`/blog/${column.slug}`}
              className="flex flex-col gap-3 rounded-2xl border border-[#123524]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs text-[#3f4a44]">
                <span className="rounded-full bg-[#eaf3ee] px-2.5 py-0.5 font-semibold text-[#123524]">
                  {categoryLabel(column.category)}
                </span>
                <time dateTime={column.publishedAt}>{column.publishedAt}</time>
              </div>
              <h3 className="text-base font-bold leading-snug text-[#123524]">{column.title}</h3>
              <p className="text-sm leading-relaxed text-[#3f4a44]">{column.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className={BUTTON_OUTLINE}>
            コラムをすべて見る
          </Link>
        </div>
      </div>
    </section>
  )
}
