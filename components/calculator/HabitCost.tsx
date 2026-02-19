"use client"
import { useMemo, useState, useEffect } from 'react'
import AnimatedNumber from '../ui/AnimatedNumber'

type Props = {
  salary: number | ''
  setSalary: (v: number | '') => void
  hoursPerMonth: number | ''
  setHoursPerMonth: (v: number | '') => void
  habit: string
  setHabit: (v: string) => void
  hoursPerDay: number | ''
  setHoursPerDay: (v: number | '') => void
  monthlyCost: number | ''
  setMonthlyCost: (v: number | '') => void
}

export default function HabitCost({ salary, setSalary, hoursPerMonth, setHoursPerMonth, habit, setHabit, hoursPerDay, setHoursPerDay, monthlyCost, setMonthlyCost }: Props) {
  const yearlyHours = useMemo(() => {
    if (!hoursPerDay) return 0
    return Number(hoursPerDay) * 365
  }, [hoursPerDay])

  const hourlyRate = useMemo(() => {
    if (!salary || !hoursPerMonth) return 0
    return Number(salary) / Number(hoursPerMonth)
  }, [salary, hoursPerMonth])

  const moneyFromTime = useMemo(() => yearlyHours * hourlyRate, [yearlyHours, hourlyRate])
  const totalYearly = useMemo(() => moneyFromTime + (monthlyCost ? Number(monthlyCost) * 12 : 0), [moneyFromTime, monthlyCost])

  const [radialPct, setRadialPct] = useState(0)

  useEffect(() => {
    const maxYear = 8760
    const pct = Math.min(100, (yearlyHours / maxYear) * 100)
    setTimeout(() => setRadialPct(pct), 80)
  }, [yearlyHours])

  function share() {
    const text = `${habit}: ${yearlyHours.toFixed(1)}h/year ≈ $${Math.round(moneyFromTime)} (total $${Math.round(totalYearly)}/yr)`
    navigator.clipboard.writeText(text)
    const btn = document.getElementById('share-btn')
    if (btn) {
      btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }], { duration: 240 })
    }
    setTimeout(() => alert('Insight copied to clipboard'), 120)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Monthly salary</label>
          <input value={salary as any} onChange={(e) => setSalary(e.target.value === '' ? '' : Number(e.target.value))} placeholder="4000" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Monthly salary" />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Hours you work per month</label>
          <input value={hoursPerMonth as any} onChange={(e) => setHoursPerMonth(e.target.value === '' ? '' : Number(e.target.value))} placeholder="160" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Hours per month" />
        </div>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <label className="text-sm text-gray-600 dark:text-gray-300">Habit name</label>
        <input value={habit} onChange={(e) => setHabit(e.target.value)} placeholder="Watching TV" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Habit name" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Hours spent per day</label>
          <input value={hoursPerDay as any} onChange={(e) => setHoursPerDay(e.target.value === '' ? '' : Number(e.target.value))} placeholder="1" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Hours spent per day" />
          <p className="text-xs text-gray-400 mt-1">Multiply by 365 for yearly hours.</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Optional monthly cost</label>
          <input value={monthlyCost as any} onChange={(e) => setMonthlyCost(e.target.value === '' ? '' : Number(e.target.value))} placeholder="0" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Monthly cost" />
          <p className="text-xs text-gray-400 mt-1">Direct spending related to the habit.</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-800/40 shadow card-soft">
        <div>
          <div className="text-sm text-gray-500">This habit costs you</div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div>
              <div className="text-sm text-gray-500">Hours per year</div>
              <div className="text-3xl font-bold mt-1 text-gray-900 dark:text-white"><AnimatedNumber value={yearlyHours} decimals={1} />h</div>
              <div className="text-sm text-gray-500 mt-3">Money equivalent</div>
              <div className="text-xl font-semibold mt-1 text-worthit-green">${Math.round(moneyFromTime)}</div>
              <div className="mt-3">
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${Math.min(100, Math.min(100, (yearlyHours / (24*365)) * 100))}%` }} />
                </div>
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-gray-500">Total yearly cost</div>
              <div className="text-2xl font-bold mt-1">${Math.round(totalYearly)}</div>
              <div className="mt-3 flex items-center justify-end space-x-3">
                  <button
                    id="share-btn"
                    onClick={share}
                    aria-label="Share insight"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-worthit-green text-white rounded-md shadow-md hover:brightness-105 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-worthit-green/40"
                  >
                    Share insight
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
