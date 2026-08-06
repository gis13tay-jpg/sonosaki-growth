import { SITE_CONFIG } from '@/constants/site'

export type NavItem = {
  label: string
  href: string
  cta?: boolean
  external?: boolean
}

export const NAV_LINKS: NavItem[] = [
  { label: '組織診断', href: '/#diagnosis' },
  { label: '集客支援', href: '/customer-acquisition' },
  { label: 'よくある質問', href: '/#faq' },
  { label: 'LINEで無料相談する', href: SITE_CONFIG.lineUrl, cta: true, external: true },
]

// ハンバーガーメニュー（スマートフォン）専用のナビゲーション。
// デスクトップヘッダーのNAV_LINKSとは独立させ、「組織支援」「役立つ情報」を軸にした4項目に絞る
export const MOBILE_NAV_LINKS: NavItem[] = [
  { label: '組織支援', href: '/' },
  { label: '集客支援', href: '/customer-acquisition' },
  { label: '役立つ情報', href: '/blog' },
  { label: 'よくある質問', href: '/#faq' },
]
