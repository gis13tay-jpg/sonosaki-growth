import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/personal/HeroSection'
import { AudienceSection } from '@/sections/personal/AudienceSection'
import { CostSection } from '@/sections/personal/CostSection'
import { SixSessionsSection } from '@/sections/personal/SixSessionsSection'
import { ProgramBeforeAfterSection } from '@/sections/personal/ProgramBeforeAfterSection'
import { PricingSection } from '@/sections/personal/PricingSection'
import { FitSection } from '@/sections/personal/FitSection'
import { FAQSection, PERSONAL_FAQ } from '@/sections/personal/FAQSection'
import { FinalCTASection } from '@/sections/personal/FinalCTASection'

const PAGE_TITLE = '40代からのキャリア再設計プログラム｜SONOSAKI SECOND CAREER'
const PAGE_DESCRIPTION =
  '言葉にならない仕事のモヤモヤを整理し、自分の判断基準、これまでの経験、今後の方向性と最初の行動を決める全6回の個別プログラムです。'
const PAGE_URL = `${SITE_CONFIG.url}/personal`

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
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

export default function PersonalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: PERSONAL_FAQ.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <HeroSection />
      <AudienceSection />
      <CostSection />
      <SixSessionsSection />
      <ProgramBeforeAfterSection />
      <PricingSection />
      <FitSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
