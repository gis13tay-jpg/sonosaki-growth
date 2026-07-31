'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/constants/site'
import { CONCERNS } from '@/data/concerns'

const RESULTS: Record<string, string> = {
  inquiries:
    'Google検索・Googleマップ・ホームページから、相談までの流れが途中で切れている可能性があります。',
  repeat: '来店後のLINE案内や、再来店する理由づくりが不足している可能性があります。',
  'hiring-apply':
    '求職者が会社を見つけ、仕事内容や働く魅力を理解できる情報が不足している可能性があります。',
  'hiring-retain': '採用時に伝えている内容と、入社後の実態にズレがある可能性があります。',
  sns: '投稿を見る場所はあっても、サービスを理解して相談するまでのページや導線が不足している可能性があります。',
  unknown: '現在の集客経路を整理し、優先して改善する場所を決める必要があります。',
}

function CheckIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function QuickDiagnosisSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const result = selected ? RESULTS[selected] : null

  return (
    <section className="bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            今、一番困っていることは何ですか？
          </h2>
          <p className="mt-2 text-xs text-muted-fg sm:text-sm">
            1つ選ぶと、その場で簡単な診断結果が表示されます
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CONCERNS.map((concern) => {
            const checked = concern.slug === selected
            return (
              <button
                key={concern.slug}
                type="button"
                onClick={() => setSelected(concern.slug)}
                aria-pressed={checked}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all sm:text-base ${
                  checked
                    ? 'border-primary bg-primary-light text-primary shadow-sm'
                    : 'border-border bg-white text-foreground hover:border-primary/40 hover:bg-primary-light/40'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    checked ? 'border-primary bg-primary text-white' : 'border-border text-transparent'
                  }`}
                >
                  <CheckIcon />
                </span>
                {concern.label}
              </button>
            )
          })}
        </div>

        {result && (
          <div className="mt-6 rounded-2xl border border-primary bg-white p-6 text-center shadow-sm sm:p-7">
            <p className="text-xs font-semibold text-primary sm:text-sm">診断結果</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{result}</p>
            <a
              href={SITE_CONFIG.leadMagnetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
            >
              あなたに合う改善方法を見る
            </a>
            <p className="mt-3 text-xs text-muted-fg">無料で受け取れます。入力は1分程度です。</p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-4 text-xs font-medium text-muted-fg underline underline-offset-2 transition-colors hover:text-foreground"
            >
              別の項目を選び直す
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
