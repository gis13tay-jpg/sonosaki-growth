import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/corporate/HeroSection'
import { ChallengesSection } from '@/sections/corporate/ChallengesSection'
import { RiskFlowSection } from '@/sections/corporate/RiskFlowSection'
import { SupportSection } from '@/sections/corporate/SupportSection'
import { ChangeSection } from '@/sections/corporate/ChangeSection'
import { FinalCTASection } from '@/sections/corporate/FinalCTASection'

const PAGE_TITLE = '40代・50代社員のキャリア自律・活性化支援｜SONOSAKI SECOND CAREER'
const PAGE_DESCRIPTION =
  '40代・50代社員のキャリア停滞、役職定年後の役割、管理職以外のキャリアパスなど、ミドルシニア社員のキャリア自律と活性化を支援します。'
const PAGE_URL = `${SITE_CONFIG.url}/corporate`

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

export default function CorporatePage() {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <RiskFlowSection />
      <SupportSection />
      <ChangeSection />
      <FinalCTASection />
    </>
  )
}
