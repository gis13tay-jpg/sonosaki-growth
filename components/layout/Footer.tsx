import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

const FOOTER_NAV = [
  { label: '組織診断', href: '/#diagnosis' },
  { label: '集客支援', href: '/customer-acquisition' },
  { label: 'よくある質問', href: '/#faq' },
  { label: 'お問い合わせ', href: '/#contact' },
]

const FOOTER_ABOUT = [
  { label: 'コラム', href: '/blog' },
  { label: '会社概要', href: '/about' },
  { label: 'プライバシーポリシー', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="inline-block text-xl font-bold text-primary">
              SONOSAKI Growth
            </Link>
            <p className="text-sm leading-relaxed text-muted-fg">
              AI検索・Google検索・Instagram・コラム・LINE・ページ制作を
              <br />
              組み合わせた「選ばれる仕組み」を設計・構築します。
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">サイト内</h2>
            <ul className="space-y-2.5" role="list">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-fg transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">その他</h2>
            <ul className="space-y-2.5" role="list">
              {FOOTER_ABOUT.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-fg transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center">
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            LINEで無料相談する
          </a>
          <p className="mt-6 text-sm text-muted-fg">
            © {new Date().getFullYear()} SONOSAKI Growth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
