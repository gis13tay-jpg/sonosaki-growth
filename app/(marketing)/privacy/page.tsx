import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${SITE_CONFIG.name}のプライバシーポリシーです。`,
}

const SECTIONS = [
  {
    title: '1. 個人情報の取得について',
    body: '当社は、LINE公式アカウントおよびお問い合わせフォームを通じて、お名前・会社名・メールアドレス・電話番号・お問い合わせ内容などの個人情報を取得する場合があります。',
  },
  {
    title: '2. 個人情報の利用目的',
    body: 'お預かりした個人情報は、お問い合わせへの回答、サービスに関するご案内、その他お客様とのやり取りに必要な範囲でのみ利用し、目的外の利用は行いません。',
  },
  {
    title: '3. 第三者提供について',
    body: '法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
  },
  {
    title: '4. LINE公式アカウントの利用について',
    body: 'ご相談の窓口としてLINE公式アカウントを利用しています。LINEアプリ上でのやり取りには、LINE株式会社が定めるプライバシーポリシーが適用されます。',
  },
  {
    title: '5. アクセス解析について',
    body: '当サイトでは、サービス改善を目的としてアクセス解析ツールを導入する場合があります。取得する情報に個人を特定する情報は含まれません。',
  },
  {
    title: '6. 個人情報の開示・訂正・削除について',
    body: 'ご本人からの個人情報の開示・訂正・削除等のご希望があった場合、ご本人確認のうえ、合理的な範囲で速やかに対応いたします。',
  },
  {
    title: '7. お問い合わせ窓口',
    body: '個人情報の取り扱いに関するお問い合わせは、LINE公式アカウントよりご連絡ください。',
  },
]

export default function PrivacyPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="mt-4 text-sm text-muted-fg">
          {SITE_CONFIG.name}（以下「当社」といいます）は、お客様の個人情報を大切に取り扱います。本ページでは、個人情報の取り扱いについて定めます。
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-base font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-fg">
          制定日：（ご記入ください）
        </p>
      </div>
    </section>
  )
}
