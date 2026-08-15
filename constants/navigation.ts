import { SITE_CONFIG } from '@/constants/site'

export type NavItem = {
  label: string
  href: string
  cta?: boolean
  external?: boolean
}

// SONOSAKI SECOND CAREERへのリニューアルに伴うナビゲーション。
// デスクトップとモバイルで同じ主要リンクを表示するため、1つの配列を両方から参照する。
// /about（会社概要）は現在の内容が新事業と一致していないため、更新するまでメニューに表示しない
export const NAV_LINKS: NavItem[] = [
  { label: 'トップページ', href: '/' },
  { label: 'プログラム・料金', href: '/personal' },
  { label: 'コラム', href: '/blog' },
  { label: '企業向け', href: '/corporate' },
  { label: 'LINEで無料相談する', href: SITE_CONFIG.lineUrl, cta: true, external: true },
]

export const MOBILE_NAV_LINKS: NavItem[] = NAV_LINKS
