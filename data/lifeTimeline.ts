export const AGE_OPTIONS = [40, 45, 50, 55, 60] as const
export type LifeTimelineAge = (typeof AGE_OPTIONS)[number]

export const DEFAULT_AGE: LifeTimelineAge = 45
// 「20代からこれまで働いてきた期間」の目安として、20歳をキャリア開始の基準点に置く（図の区間比率の計算にのみ使用し、断定的な実数としては表示しない）
export const CAREER_START_AGE = 20
export const RETIREMENT_AGE = 65

export function remainingYears(age: number): number {
  return Math.max(0, RETIREMENT_AGE - age)
}

export function approxRemainingDays(age: number): number {
  return remainingYears(age) * 365
}

export function workedYears(age: number): number {
  return Math.max(0, age - CAREER_START_AGE)
}
