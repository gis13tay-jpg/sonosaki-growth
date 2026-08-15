import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/second-career/HeroSection'
import { DiagnosisSection } from '@/sections/second-career/DiagnosisSection'
import { CycleSection } from '@/sections/second-career/CycleSection'
import { FutureSection } from '@/sections/second-career/FutureSection'
import { BeforeAfterSection } from '@/sections/second-career/BeforeAfterSection'
import { ProgramIntroSection } from '@/sections/second-career/ProgramIntroSection'
import { CorporateRiskSection } from '@/sections/second-career/CorporateRiskSection'
import { ColumnsSection } from '@/sections/second-career/ColumnsSection'
import { FinalCTASection } from '@/sections/second-career/FinalCTASection'

const PAGE_TITLE = '40代以降のキャリア再設計｜SONOSAKI SECOND CAREER'
const PAGE_DESCRIPTION =
  'SONOSAKI SECOND CAREERは、40代以降のキャリア再設計を支援します。自分の判断基準とこれまでの経験を整理し、これからの生き方・働き方を自分で決められる状態を目指します。'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.url,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          }),
        }}
      />
      <HeroSection />
      <DiagnosisSection />
      <CycleSection />
      <FutureSection />
      <BeforeAfterSection />
      <ProgramIntroSection />
      <CorporateRiskSection />
      <ColumnsSection />
      <FinalCTASection />
    </>
  )
}
