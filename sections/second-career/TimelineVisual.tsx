'use client'

import { useState } from 'react'
import {
  AGE_OPTIONS,
  DEFAULT_AGE,
  RETIREMENT_AGE,
  approxRemainingDays,
  remainingYears,
  workedYears,
  type LifeTimelineAge,
} from '@/data/lifeTimeline'

export function TimelineVisual() {
  const [age, setAge] = useState<LifeTimelineAge>(DEFAULT_AGE)

  const past = workedYears(age)
  const future = remainingYears(age)
  const days = approxRemainingDays(age)

  return (
    <div className="mt-14">
      <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="現在の年齢を選択">
        {AGE_OPTIONS.map((option) => {
          const selected = option === age
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setAge(option)}
              className={`min-h-11 min-w-11 rounded-full px-5 py-2.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123524] focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-[#123524] text-white'
                  : 'bg-white text-[#123524] ring-1 ring-inset ring-[#123524]/30 hover:bg-[#eaf3ee]'
              }`}
            >
              {option}歳
            </button>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col gap-0 md:flex-row md:items-stretch">
        <div
          className="flex min-h-14 items-center justify-start rounded-t-xl bg-[#123524] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 motion-reduce:transition-none md:rounded-l-xl md:rounded-tr-none md:justify-center"
          style={{ flexGrow: Math.max(past, 1) }}
        >
          これまでの{past}年
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center gap-1 bg-[#e8622a] px-4 py-3 text-white md:w-40">
          <span className="h-3 w-3 rounded-full bg-white" aria-hidden="true" />
          <span className="text-sm font-bold">現在地（{age}歳）</span>
        </div>

        <div
          className="flex min-h-14 items-center justify-end rounded-b-xl bg-[#8fc3a8] px-4 py-3 text-right text-sm font-semibold text-[#123524] transition-all duration-300 motion-reduce:transition-none md:rounded-r-xl md:rounded-bl-none md:justify-center md:text-center"
          style={{ flexGrow: Math.max(future, 1) }}
        >
          これからの{future}年
        </div>

        <div
          className="flex min-h-14 shrink-0 items-center justify-center border-l-2 border-dashed border-[#123524]/30 bg-[#f7f2ea] px-4 py-3 text-center text-sm font-medium text-[#3f4a44] md:w-32 md:border-l-2 md:border-t-0"
          aria-hidden="true"
        >
          その先も
          <br />
          人生は続く
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#eaf3ee] p-6 text-center sm:p-8">
        <p className="text-xl font-bold leading-relaxed text-[#123524] sm:text-2xl">
          {RETIREMENT_AGE}歳まであと{future}年。その先も人生は続く。
        </p>
        <p className="mt-2 text-base text-[#3f4a44]">約{days.toLocaleString()}日</p>
      </div>
    </div>
  )
}
