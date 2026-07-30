import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

const FOOTER_NAV = [
  { label: '会社概要', href: '/about' },
  { label: 'サービス', href: '/services' },
  { label: '導入事例', href: '/cases' },
  { label: 'ブログ', href: '/blog' },
  { label: 'お問い合わせ', href: '/contact' },
]

const FOOTER_LEGAL = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
]

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-block text-xl font-bold text-primary">
              SONOSAKI Growth
            </Link>
            <p className="text-sm leading-relaxed text-muted-fg">
              AI検索・Google検索・Instagram・ブログ・LINE・LPを
              <br />
              組み合わせた「選ばれる仕組み」を設計・構築します。
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-fg transition-colors hover:text-primary"
              >
                <IconInstagram />
              </a>
              <a
                href={SITE_CONFIG.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-fg transition-colors hover:text-primary"
              >
                <IconX />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">会社情報</h2>
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
            <h2 className="mb-4 text-sm font-semibold text-foreground">法的情報</h2>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LEGAL.map((link) => (
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

        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-fg">
          <p>© {new Date().getFullYear()} SONOSAKI Growth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
