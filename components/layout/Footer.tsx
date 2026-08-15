import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

// /aboutは現在の内容が新事業と一致していないため、更新するまでフッターにも表示しない
const FOOTER_NAV = [
  { label: 'トップページ', href: '/' },
  { label: 'プログラム・料金', href: '/personal' },
  { label: 'コラム', href: '/blog' },
  { label: '企業向け', href: '/corporate' },
  { label: 'プライバシーポリシー', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-block text-xl font-bold text-primary">
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-muted-fg">{SITE_CONFIG.nameJa}</p>
            <p className="text-sm leading-relaxed text-muted-fg">
              これまでの経験を、これからの力に。
              <br />
              40代以降のキャリア再設計を支援します。
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
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
