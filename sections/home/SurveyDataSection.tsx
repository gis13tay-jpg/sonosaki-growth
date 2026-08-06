'use client'

import { useEffect, useRef, useState } from 'react'
import { DARK_SECTION_BG, DARK_BADGE } from './theme'

const VALUE_A = 50
const VALUE_B = 9
const MAX_SCALE = 100 // 棒の高さの基準（0-100%スケール）
const ANIMATION_MS = 1000

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function SurveyDataSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function runAnimation() {
      if (hasAnimated.current) return
      hasAnimated.current = true

      if (prefersReducedMotion) {
        setValueA(VALUE_A)
        setValueB(VALUE_B)
        return
      }

      const start = performance.now()
      function tick(now: number) {
        const elapsed = now - start
        const t = Math.min(elapsed / ANIMATION_MS, 1)
        const eased = easeOutCubic(t)
        setValueA(Math.round(VALUE_A * eased))
        setValueB(Math.round(VALUE_B * eased))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runAnimation()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${DARK_SECTION_BG} py-20 sm:py-28`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${DARK_BADGE}`}>
            調査データ
          </span>
          <h2 className="mx-auto mt-5 max-w-xl text-2xl font-bold leading-relaxed tracking-tight text-white sm:text-3xl">
            <span className="survey-marker">働く目的を持てるか</span>どうかで、
            <br />
            仕事への向き合い方にはこれだけの差があります。
          </h2>
        </div>

        {/* 縦棒グラフ */}
        <div className="mx-auto mt-14 grid max-w-sm grid-cols-2 items-end gap-6 sm:gap-10">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-extrabold text-white sm:text-5xl">{valueA}%</p>
            <div className="mt-3 flex h-40 w-full items-end justify-center sm:h-56">
              <div
                className="w-full max-w-[72px] rounded-t-xl bg-white"
                style={{ height: `${(valueA / MAX_SCALE) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/70 sm:text-sm">
              仕事に強い目的を
              <br />
              感じている人
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-extrabold text-white/60 sm:text-5xl">{valueB}%</p>
            <div className="mt-3 flex h-40 w-full items-end justify-center sm:h-56">
              <div
                className="w-full max-w-[72px] rounded-t-xl bg-white/50"
                style={{ height: `${(valueB / MAX_SCALE) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/70 sm:text-sm">
              目的意識が
              <br />
              低い人
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-white/70 sm:text-base">約</p>
          <p className="mt-1 text-[56px] font-extrabold leading-none text-[#e0813f] sm:text-7xl lg:text-8xl">
            5.6<span className="text-3xl font-bold sm:text-4xl lg:text-5xl">倍</span>
          </p>
          <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">の差</p>
        </div>

        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-white/85 sm:text-base">
          仕事に強い目的を感じている人の50％がエンゲージしているのに対し、
          目的意識が低い人では9％でした。
        </p>

        <p className="mx-auto mt-6 text-center text-xs text-white/50">
          出典：Gallup, Purposeful Work Boosts Engagement, 2025
        </p>

        <p className="mt-14 text-center text-xl font-bold text-white sm:text-2xl">
          では、あなたの会社はどうでしょうか。
        </p>
      </div>
    </section>
  )
}
