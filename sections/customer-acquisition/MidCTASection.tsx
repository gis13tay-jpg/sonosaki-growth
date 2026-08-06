import { SITE_CONFIG } from '@/constants/site'

export function MidCTASection() {
  return (
    <section className="bg-primary-light py-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div>
          <p className="text-lg font-bold text-foreground sm:text-xl">
            まずは資料で、集客導線の考え方を知りたい方へ
          </p>
          <p className="mt-1 text-sm text-muted-fg">
            Google検索・Googleマップ・AI検索・SNSをどう組み合わせるかをまとめた資料を無料で配布しています。
          </p>
        </div>
        <a
          href={SITE_CONFIG.leadMagnetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98]"
        >
          改善ロードマップを無料で受け取る
        </a>
      </div>
    </section>
  )
}
