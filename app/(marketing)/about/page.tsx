import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: '会社概要',
  description: `${SITE_CONFIG.name}が提供する、40代以降のキャリア再設計支援（個人向けプログラム・企業向けミドルシニア支援）についての会社概要です。`,
}

const COMPANY_FACTS = [
  { label: '会社名', value: SITE_CONFIG.name },
  {
    label: '事業内容',
    value:
      '40代以降を対象とした個人向けキャリア再設計プログラムの提供、および企業向けミドルシニア人材のキャリア自律・活性化支援（研修・個別面談・組織分析）',
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
          {SITE_CONFIG.name}は、40代以降のキャリア再設計を支援する会社です。転職だけを唯一の正解とはせず、現職での役割の変え方、社内での新しい挑戦、副業、転職など、複数の選択肢の中からご本人が納得できる方向を選べるよう、これまでの経験や判断基準を整理するサポートを行っています。
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-fg">
          個人の方向けには、全6回の個別プログラムを通じて、感情の整理、判断基準の言語化、これまでの経験の棚卸し、今後の方向性の検討、最初の行動計画までを伴走します。法人の方向けには、40代・50代社員のキャリア停滞や役職定年後の役割整理など、ミドルシニア人材が自らキャリアを考え、行動できる状態をつくる研修・個別面談・組織分析を提供しています。
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
