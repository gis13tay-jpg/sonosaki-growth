import { SITE_CONFIG } from '@/constants/site'

const REASSURANCES = [
  '何から手をつければいいか分からない状態でも大丈夫です',
  'Google検索・Googleマップ・AI検索・Instagram・ページ制作を、バラバラにではなくまとめて整理します',
] as const

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          まずは、現状を整理するところから。
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
          良いサービスが、正しく見つけられ、選ばれるように。
          <br className="hidden sm:block" />
          集客導線の現状を、一緒に整理しませんか。
        </p>

        <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left" role="list">
          {REASSURANCES.map((text) => (
            <li key={text} className="flex items-start gap-2.5 text-sm text-white sm:text-base">
              <CheckIcon />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            LINEで無料相談する
          </a>
        </div>

        <div className="mx-auto mt-5 inline-flex max-w-md items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-medium leading-relaxed text-white sm:text-sm">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span>
            まずはお気軽にご相談ください。友だち追加後、一方的な営業メッセージは送りません。ご質問にだけお答えします。
          </span>
        </div>

        <p className="mt-4 text-xs text-white/70">
          入力いただいた情報は、お問い合わせ対応の目的以外には使用しません。
        </p>
      </div>
    </section>
  )
}
