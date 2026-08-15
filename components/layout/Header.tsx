import Link from 'next/link'
import { NAV_LINKS } from '@/constants/navigation'
import { SITE_CONFIG } from '@/constants/site'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="グローバルナビゲーション"
        >
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold tracking-tight text-primary"
          >
            {SITE_CONFIG.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex" role="list">
            {NAV_LINKS.filter((item) => !item.cta).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:inline-flex"
            >
              LINEで無料相談する
            </a>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}
