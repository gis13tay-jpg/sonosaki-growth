import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: '会社概要',
  description: `${SITE_CONFIG.name}の会社概要です。`,
}

const COMPANY_FACTS = [
  { label: '会社名', value: SITE_CONFIG.name },
  {
    label: '事業内容',
    value:
      '集客導線の設計・構築（Google検索対策・Googleマップ対策・AI検索対策・SNS・ホームページ・ページ制作・コラム・LINE運用）',
  },
  { label: '所在地', value: '（ご記入ください）' },
  { label: '設立', value: '（ご記入ください）' },
  { label: '代表者', value: '（ご記入ください）' },
  { label: 'お問い合わせ', value: 'LINE公式アカウントよりご連絡ください' },
]

export default function AboutPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          会社概要
        </h1>

        <p className="mt-6 text-base leading-relaxed text-foreground">
          {SITE_CONFIG.name}は、ホームページ制作会社でも、AI検索対策会社でもありません。
          Google検索、Googleマップ、AI検索（ChatGPTなど）、Instagram、ホームページ、
          お問い合わせにつながるページ（LP）、コラム、LINEなどを組み合わせ、
          お客様に「見つけて→理解して→選んでいただく」までの集客導線を設計・構築する会社です。
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-fg">
          個人事業主やフリーランス、美容サロン、整体院、士業、工務店、スクールなど、
          「良いサービスなのに集客できない」と悩む事業者様を対象に、施策単体ではなく仕組みとしての集客導線をご提案しています。
        </p>

        <dl className="mt-10 divide-y divide-border rounded-2xl border border-border">
          {COMPANY_FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6 sm:px-6">
              <dt className="w-28 shrink-0 text-sm font-semibold text-foreground">{fact.label}</dt>
              <dd className="text-sm text-muted-fg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
