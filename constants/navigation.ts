export type NavItem = {
  label: string
  href: string
  cta?: boolean
}

export const NAV_LINKS: NavItem[] = [
  { label: 'サービス', href: '/services' },
  { label: '導入事例', href: '/cases' },
  { label: 'ブログ', href: '/blog' },
  { label: '会社概要', href: '/about' },
  { label: 'お問い合わせ', href: '/contact', cta: true },
]
