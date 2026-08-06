import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/home/HeroSection'
import { SurveyDataSection } from '@/sections/home/SurveyDataSection'
import { OrgDiagnosisSection } from '@/sections/home/OrgDiagnosisSection'
import { ProblemsSection } from '@/sections/home/ProblemsSection'
import { BeforeAfterSection } from '@/sections/home/BeforeAfterSection'
import { UnderstandingElementsSection } from '@/sections/home/UnderstandingElementsSection'
import { FoundingStorySection } from '@/sections/home/FoundingStorySection'
import { LimitationsSection } from '@/sections/home/LimitationsSection'
import { RelatedColumnsSection } from '@/sections/home/RelatedColumnsSection'
import { FAQSection } from '@/sections/home/FAQSection'
import { FinalCTASection } from '@/sections/home/FinalCTASection'

export const metadata: Metadata = {
  title: '採用・定着・組織づくりの無料診断',
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SurveyDataSection />
      <OrgDiagnosisSection />
      <ProblemsSection />
      <BeforeAfterSection />
      <UnderstandingElementsSection />
      <FoundingStorySection />
      <LimitationsSection />
      <RelatedColumnsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
