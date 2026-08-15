'use client'

import { useState } from 'react'
import {
  DIAGNOSIS_QUESTIONS,
  scoreDiagnosis,
  type DiagnosisTypeKey,
} from '@/data/secondCareerDiagnosis'
import { DiagnosisResult } from '@/sections/second-career/DiagnosisResult'
import { BUTTON_PRIMARY } from '@/sections/second-career/theme'

const TOTAL = DIAGNOSIS_QUESTIONS.length

export function DiagnosisSection() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(DiagnosisTypeKey | null)[]>(Array(TOTAL).fill(null))
  const [completed, setCompleted] = useState(false)

  const question = DIAGNOSIS_QUESTIONS[current]
  const progress = ((current + 1) / TOTAL) * 100

  function selectAnswer(key: DiagnosisTypeKey) {
    const next = [...answers]
    next[current] = key
    setAnswers(next)

    if (current < TOTAL - 1) {
      setCurrent(current + 1)
    } else {
      setCompleted(true)
    }
  }

  function goBack() {
    if (current > 0) setCurrent(current - 1)
  }

  function restart() {
    setAnswers(Array(TOTAL).fill(null))
    setCurrent(0)
    setCompleted(false)
  }

  const matchedTypes: DiagnosisTypeKey[] | null = completed
    ? scoreDiagnosis(answers.filter((a): a is DiagnosisTypeKey => a !== null))
    : null

  return (
    <>
      <section id="diagnosis" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
            5つの質問で、今の迷いを整理する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[#3f4a44]">
            医療的・心理学的な診断ではなく、キャリア上の迷いを整理する簡易チェックです。回答は保存・送信されません。
          </p>

          {!completed ? (
            <div className="mt-10">
              <div className="flex items-center justify-between text-sm font-semibold text-[#123524]">
                <span>
                  {current + 1} / {TOTAL}
                </span>
              </div>
              <div
                className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#eaf3ee]"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={TOTAL}
                aria-valuenow={current + 1}
                aria-valuetext={`${current + 1} / ${TOTAL}問`}
              >
                <div
                  className="h-full rounded-full bg-[#e8622a] transition-all duration-300 motion-reduce:transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h3 className="mt-8 text-xl font-bold leading-relaxed text-[#123524] sm:text-2xl">
                {question.question}
              </h3>

              <div className="mt-6 space-y-3">
                {question.options.map((option) => {
                  const selected = answers[current] === option.key
                  return (
                    <button
                      key={option.key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectAnswer(option.key)}
                      className={`flex min-h-12 w-full items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base leading-relaxed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123524] focus-visible:ring-offset-2 ${
                        selected
                          ? 'border-[#123524] bg-[#eaf3ee] text-[#123524]'
                          : 'border-[#123524]/15 bg-white text-[#1f2a24] hover:border-[#123524]/40 hover:bg-[#f7f2ea]'
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          selected ? 'bg-[#123524] text-white' : 'bg-[#f4f4f5] text-[#3f4a44]'
                        }`}
                        aria-hidden="true"
                      >
                        {option.key}
                      </span>
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={current === 0}
                  className="min-h-11 rounded-full px-5 py-2.5 text-base font-semibold text-[#123524] transition-colors hover:bg-[#eaf3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123524] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-0"
                >
                  ← 前の質問へ
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-2xl bg-[#eaf3ee] p-6 text-center sm:p-8">
              <p className="text-lg font-bold text-[#123524]">診断が完了しました</p>
              <p className="mt-2 text-base leading-relaxed text-[#3f4a44]">
                このすぐ下に、あなたの傾向に近いタイプを表示しています。
              </p>
              <button type="button" onClick={restart} className={`${BUTTON_PRIMARY} mt-6`}>
                もう一度診断する
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="diagnosis-result" className="bg-[#f7f2ea] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
            4つの迷いのパターン
          </h2>
          <div className="mt-10">
            <DiagnosisResult types={matchedTypes} />
          </div>
        </div>
      </section>
    </>
  )
}
