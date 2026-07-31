import { SITE_CONFIG } from '@/constants/site'

export type NavItem = {
  label: string
  href: string
  cta?: boolean
  external?: boolean
}

export const NAV_LINKS: NavItem[] = [
  { label: '導線の課題', href: '/#root-cause' },
  { label: '支援の流れ', href: '/#service-flow' },
  { label: 'よくある質問', href: '/#faq' },
  { label: 'LINEで無料相談する', href: SITE_CONFIG.lineUrl, cta: true, external: true },
]
