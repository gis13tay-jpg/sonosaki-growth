import { SITE_CONFIG } from '@/constants/site'
import { SearchDemoVideo } from './SearchDemoVideo'

function IconLine() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 10.5v4.5m0 0l-1.5-1.5m1.5 1.5l1.5-1.5m-6-9h1.5m-1.5 3h1.5m-1.5 3h6.75M6.75 3v18a1.5 1.5 0 001.5 1.5h11.25a1.5 1.5 0 001.5-1.5V8.25L15 3H6.75z" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* 左：コピー */}
          <div className="max-w-lg lg:max-w-none">
            <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
              集客導線設計 / SONOSAKI Growth
            </span>

            <h1 className="mt-5 leading-[1.15] tracking-tight text-foreground">
              <span className="block text-xl font-semibold text-muted-fg sm:text-2xl">
                お客様は、今日も検索しています。
              </span>
              <span className="mt-2 block text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                あなたのお店や会社は、見つかっていますか？
              </span>
            </h1>

            <p className="mt-7 text-base leading-relaxed text-muted-fg sm:text-lg">
              Google検索、Googleマップ、ChatGPT。
              <br />
              お客様の探し方が変わる今、検索されても見つからなければ選ばれません。
              <br />
              Google検索・Googleマップ・AI検索・SNSをつなぎ、見つけてもらえる集客導線を整えます。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={SITE_CONFIG.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white transition-all hover:brightness-95 active:scale-[0.98]"
              >
                <IconLine />
                LINEで無料相談する
              </a>
              <a
                href={SITE_CONFIG.leadMagnetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-surface active:scale-[0.98]"
              >
                <IconDocument />
                改善ロードマップを無料で受け取る
              </a>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-medium leading-relaxed text-emerald-700 sm:text-sm">
              <IconShield />
              <span>
                まずはお気軽にご相談ください。友だち追加後、一方的な営業メッセージは送りません。ご質問にだけお答えします。
              </span>
            </div>
          </div>

          {/* 右：検索デモ動画 */}
          <div className="w-full lg:pl-4">
            <SearchDemoVideo />
          </div>

        </div>
      </div>
    </section>
  )
}
