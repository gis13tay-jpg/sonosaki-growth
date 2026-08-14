import Link from 'next/link'
import { BUTTON_PRIMARY } from '@/sections/second-career/theme'

const BEFORE = [
  '周囲からどう思われるかで決める',
  '自分が何を望んでいるか分からない',
  'これまでの経験に価値を感じられない',
  '調べるほど選べなくなる',
  '半年後も同じことで迷っている',
]

const PROCESS = ['対話', '気づく', '整理する', '選ぶ', '試す']

const AFTER = [
  '自分が大切にしたいことが分かる',
  '自分の基準で比較できる',
  'これまでの経験を今後へ使える',
  '自分で方向を決められる',
  '小さな行動から人生を動かせる',
]

export function BeforeAfterSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold leading-snug tracking-tight text-[#123524] sm:text-3xl">
          「このままでいいのかな」から、
          <br />
          「私はこうしたい」へ。
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
          <div className="rounded-2xl border border-[#123524]/10 bg-[#f4f4f5] p-6 sm:p-7">
            <p className="text-sm font-semibold text-[#3f4a44]">BEFORE</p>
            <ul className="mt-4 space-y-3" role="list">
              {BEFORE.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#1f2a24]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 md:flex-col md:gap-3">
            {PROCESS.map((step, idx) => (
              <div key={step} className="flex flex-row items-center gap-2 md:flex-col">
                <span className="rounded-full bg-[#e8622a] px-3 py-1.5 text-xs font-bold text-white sm:text-sm">
                  {step}
                </span>
                {idx < PROCESS.length - 1 && (
                  <svg
                    className="h-4 w-4 shrink-0 text-[#123524]/40 md:h-4 md:w-4 md:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#123524]/25 bg-[#eaf3ee] p-6 sm:p-7">
            <p className="text-sm font-semibold text-[#123524]">AFTER</p>
            <ul className="mt-4 space-y-3" role="list">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base leading-relaxed text-[#123524]">
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/personal" className={BUTTON_PRIMARY}>
            プログラム内容と料金を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
