import { SITE_CONFIG } from '@/constants/site'
import { BUTTON_ON_DARK } from '@/sections/second-career/theme'

export function FinalCTASection() {
  return (
    <section className="bg-[#123524] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          自社の40代・50代社員について、
          <br />
          現在の課題をお聞かせください。
        </h2>
        <div className="mt-8">
          <a href={SITE_CONFIG.lineUrl} target="_blank" rel="noopener noreferrer" className={BUTTON_ON_DARK}>
            企業向け支援について問い合わせる
          </a>
        </div>
      </div>
    </section>
  )
}
