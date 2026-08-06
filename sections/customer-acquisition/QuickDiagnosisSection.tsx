'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/constants/site'
import {
  ACQUISITION_QUESTIONS,
  HIRING_QUESTIONS,
  scoreAcquisition,
  scoreHiring,
  type DiagnosisOption,
  type DiagnosisRoute,
} from '@/data/diagnosis'

const ROUTE_OPTIONS: { route: DiagnosisRoute; label: string }[] = [
  { route: 'acquisition', label: '集客' },
  { route: 'hiring', label: '採用・定着' },
]

const TOTAL_STEPS = 5

function IconLine() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 10.5v4.5m0 0l-1.5-1.5m1.5 1.5l1.5-1.5m-6-9h1.5m-1.5 3h1.5m-1.5 3h6.75M6.75 3v18a1.5 1.5 0 001.5 1.5h11.25a1.5 1.5 0 001.5-1.5V8.25L15 3H6.75z" />
    </svg>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <span className="tracking-tight text-primary" aria-label={`重要度 ${count} / 5`}>
      {'★'.repeat(count)}
      <span className="text-border">{'★'.repeat(5 - count)}</span>
    </span>
  )
}

export function QuickDiagnosisSection() {
  const [route, setRoute] = useState<DiagnosisRoute | null>(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<DiagnosisOption[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = route === 'hiring' ? HIRING_QUESTIONS : ACQUISITION_QUESTIONS

  const stepNumber = route === null ? 1 : showResult ? TOTAL_STEPS : questionIndex + 2
  const progressPercent = (stepNumber / TOTAL_STEPS) * 100
  const stepKey = route === null ? 'route' : showResult ? 'result' : `${route}-${questionIndex}`

  function selectRoute(nextRoute: DiagnosisRoute) {
    setRoute(nextRoute)
    setQuestionIndex(0)
    setAnswers([])
    setShowResult(false)
  }

  function selectAnswer(option: DiagnosisOption) {
    const nextAnswers = [...answers, option]
    setAnswers(nextAnswers)

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setShowResult(true)
    }
  }

  function goBack() {
    if (showResult) {
      setShowResult(false)
      return
    }
    if (questionIndex > 0) {
      setAnswers(answers.slice(0, -1))
      setQuestionIndex(questionIndex - 1)
      return
    }
    setRoute(null)
    setAnswers([])
  }

  function restart() {
    setRoute(null)
    setQuestionIndex(0)
    setAnswers([])
    setShowResult(false)
  }

  const result =
    showResult && route === 'hiring'
      ? scoreHiring(answers)
      : showResult && route === 'acquisition'
        ? scoreAcquisition(answers)
        : null

  return (
    <section className="bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            かんたん集客・採用診断
          </h2>
          <p className="mt-2 text-xs text-muted-fg sm:text-sm">
            5つの質問に答えると、優先して改善すべきポイントが分かります
          </p>
        </div>

        {/* 進捗バー */}
        <div className="mt-5 flex items-center gap-3">
          {route !== null && (
            <button
              type="button"
              onClick={goBack}
              className="shrink-0 text-xs font-medium text-muted-fg transition-colors hover:text-foreground"
            >
              ← 戻る
            </button>
          )}
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-medium text-muted-fg">
            {Math.min(stepNumber, TOTAL_STEPS)} / {TOTAL_STEPS}
          </span>
        </div>

        <div key={stepKey} className="mt-6 [animation:diagnosis-step-in_0.3s_ease-out]">
          {route === null && (
            <div>
              <p className="text-center text-base font-semibold text-foreground sm:text-lg">
                今、一番改善したいのはどちらですか？
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ROUTE_OPTIONS.map((option) => (
                  <button
                    key={option.route}
                    type="button"
                    onClick={() => selectRoute(option.route)}
                    className="rounded-xl border border-border bg-white px-4 py-5 text-center text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md active:scale-[0.98]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {route !== null && !showResult && (
            <div>
              <p className="text-center text-base font-semibold text-foreground sm:text-lg">
                {questions[questionIndex].question}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {questions[questionIndex].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => selectAnswer(option)}
                    className="rounded-xl border border-border bg-white px-4 py-3.5 text-left text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary-light/40 active:scale-[0.98] sm:text-base"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="rounded-2xl border border-primary bg-white p-6 shadow-sm sm:p-7">
              <p className="text-center text-xs font-semibold text-primary sm:text-sm">診断結果</p>
              <p className="mt-2 text-center text-lg font-bold text-foreground sm:text-xl">
                あなたは「{result.resultType.label}」です
              </p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-fg sm:text-base">
                {result.resultType.description}
              </p>

              <div className="mt-6 rounded-xl bg-surface p-4 sm:p-5">
                <p className="text-xs font-semibold text-foreground sm:text-sm">【改善優先順位】</p>
                <ul className="mt-3 space-y-2.5" role="list">
                  {result.priorities.map((item, idx) => (
                    <li key={item.label} className="flex items-center justify-between gap-3 text-sm sm:text-base">
                      <span className="flex items-center gap-2 text-foreground">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {idx + 1}
                        </span>
                        {item.label}
                      </span>
                      <Stars count={item.stars} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={SITE_CONFIG.leadMagnetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface active:scale-[0.98]"
                >
                  <IconDocument />
                  改善ロードマップを無料で受け取る
                </a>
                <a
                  href={SITE_CONFIG.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-95 active:scale-[0.98]"
                >
                  <IconLine />
                  個別相談する
                </a>
              </div>

              <button
                type="button"
                onClick={restart}
                className="mt-5 block w-full text-center text-xs font-medium text-muted-fg underline underline-offset-2 transition-colors hover:text-foreground"
              >
                もう一度診断する
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
