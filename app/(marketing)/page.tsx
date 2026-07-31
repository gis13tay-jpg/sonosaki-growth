import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/home/HeroSection'
import { QuickDiagnosisSection } from '@/sections/home/QuickDiagnosisSection'
import { TimeShiftSection } from '@/sections/home/TimeShiftSection'
import { RootCauseSection } from '@/sections/home/RootCauseSection'
import { TargetSelectorSection } from '@/sections/home/TargetSelectorSection'
import { EducationSection } from '@/sections/home/EducationSection'
import { MidCTASection } from '@/sections/home/MidCTASection'
import { ServiceFlowSection } from '@/sections/home/ServiceFlowSection'
import { FAQSection } from '@/sections/home/FAQSection'
import { FinalCTASection } from '@/sections/home/FinalCTASection'

export const metadata: Metadata = {
  title: 'AI時代の集客導線設計',
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickDiagnosisSection />
      <TimeShiftSection />
      <RootCauseSection />
      <TargetSelectorSection />
      <EducationSection />
      <MidCTASection />
      <ServiceFlowSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
