'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  CATEGORY_GROUPS,
  categoryDisplayLabel,
  categoryLabel,
  getLatestColumns,
  getPopularColumns,
  searchColumns,
  type Column,
} from '@/data/columns'
import { CONCERNS } from '@/data/concerns'

function IconSearch() {
  return (
    <svg className="h-4 w-4 shrink-0 text-muted-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function ArticleCard({ column }: { column: Column }) {
  return (
    <Link
      href={`/blog/${column.slug}`}
      className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
    >
      <div className="flex items-center gap-2 text-xs text-muted-fg">
        <span className="rounded-full bg-primary-light px-2.5 py-0.5 font-semibold text-primary">
          {categoryLabel(column.category)}
        </span>
        <time dateTime={column.publishedAt}>{column.publishedAt}</time>
      </div>
      <h2 className="text-base font-bold leading-snug text-foreground">{column.title}</h2>
      <p className="text-sm leading-relaxed text-muted-fg">{column.excerpt}</p>
    </Link>
  )
}

export function ColumnExplorer() {
  const [query, setQuery] = useState('')

  const searchResults = useMemo(() => searchColumns(query), [query])
  const isSearching = query.trim().length > 0

  const popular = useMemo(() => getPopularColumns(4), [])
  const latest = useMemo(
    () => getLatestColumns(6, popular.map((c) => c.slug)),
    [popular],
  )

  return (
    <div>
      {/* 検索 */}
      <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 shadow-sm">
        <IconSearch />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="記事を検索"
          aria-label="コラムを検索"
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-fg focus:outline-none sm:text-base"
        />
      </div>

      {isSearching ? (
        <div className="mt-8">
          <p className="text-sm text-muted-fg">
            「{query}」の検索結果：{searchResults.length}件
          </p>
          {searchResults.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-border bg-surface p-6 text-center text-sm text-muted-fg">
              該当する記事が見つかりませんでした。別のキーワードでお試しください。
            </p>
          ) : (
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {searchResults.map((column) => (
                <ArticleCard key={column.slug} column={column} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* 今のお悩みから探す */}
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

          {/* カテゴリから探す */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-foreground sm:text-base">
              カテゴリから探す
            </h2>
            <div className="mt-3 space-y-4">
              {CATEGORY_GROUPS.map((group) => (
                <div key={group.key}>
                  <p className="text-xs font-medium text-muted-fg">{group.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`${group.linkBase}/${category.slug}`}
                        className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:text-sm"
                      >
                        {group.linkBase === '/blog/category'
                          ? categoryDisplayLabel(category.slug)
                          : category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 人気の記事 */}
          <div className="mt-12">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">人気の記事</h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {popular.map((column) => (
                <ArticleCard key={column.slug} column={column} />
              ))}
            </div>
          </div>

          {/* 最新の記事 */}
          {latest.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">最新の記事</h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {latest.map((column) => (
                  <ArticleCard key={column.slug} column={column} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
