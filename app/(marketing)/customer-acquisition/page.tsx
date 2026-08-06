import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { HeroSection } from '@/sections/customer-acquisition/HeroSection'
import { QuickDiagnosisSection } from '@/sections/customer-acquisition/QuickDiagnosisSection'
import { TimeShiftSection } from '@/sections/customer-acquisition/TimeShiftSection'
import { RootCauseSection } from '@/sections/customer-acquisition/RootCauseSection'
import { TargetSelectorSection } from '@/sections/customer-acquisition/TargetSelectorSection'
import { EducationSection } from '@/sections/customer-acquisition/EducationSection'
import { MidCTASection } from '@/sections/customer-acquisition/MidCTASection'
import { ServiceFlowSection } from '@/sections/customer-acquisition/ServiceFlowSection'
import { FAQSection } from '@/sections/customer-acquisition/FAQSection'
import { FinalCTASection } from '@/sections/customer-acquisition/FinalCTASection'

export const metadata: Metadata = {
  title: '集客支援 | AI時代の集客導線設計',
  description: SITE_CONFIG.description,
}

export default function CustomerAcquisitionPage() {
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
