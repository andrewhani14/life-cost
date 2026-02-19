"use client"
import { useMemo, useEffect, useState } from 'react'
import AnimatedNumber from '../ui/AnimatedNumber'

type Props = {
  salary: number | ''
  setSalary: (v: number | '') => void
  hoursPerMonth: number | ''
  setHoursPerMonth: (v: number | '') => void
  price: number | ''
  setPrice: (v: number | '') => void
}

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function ItemCost({ salary, setSalary, hoursPerMonth, setHoursPerMonth, price, setPrice }: Props) {
  const hourly = useMemo(() => {
    if (!salary || !hoursPerMonth) return 0
    return Number(salary) / Number(hoursPerMonth)
  }, [salary, hoursPerMonth])

  const hours = useMemo(() => {
    if (!hourly || !price) return 0
    return Number(price) / hourly
  }, [price, hourly])

  const days = useMemo(() => hours / 8, [hours])
  const pct = useMemo(() => (price && salary ? (Number(price) / Number(salary)) * 100 : 0), [price, salary])

  const [hoursPct, setHoursPct] = useState(0)
  const [salaryPct, setSalaryPct] = useState(0)

  useEffect(() => {
    if (!price || !hoursPerMonth || !salary) {
      setHoursPct(0)
      setSalaryPct(0)
      return
    }
    const hp = Math.min(100, (hours / (Number(hoursPerMonth) || 1)) * 100)
    const sp = Math.min(100, Number(((Number(price) / Number(salary)) * 100).toFixed(1)))
    // animate to values
    setTimeout(() => setHoursPct(hp), 60)
    setTimeout(() => setSalaryPct(sp), 120)
  }, [hours, price, hoursPerMonth, salary])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Monthly salary</label>
          <input value={salary as any} onChange={(e) => setSalary(e.target.value === '' ? '' : Number(e.target.value))} placeholder="4000" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Monthly salary" />
          <p className="text-xs text-gray-400 mt-1">Used to compute hourly rate.</p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="text-sm text-gray-600 dark:text-gray-300">Hours you work per month</label>
          <input value={hoursPerMonth as any} onChange={(e) => setHoursPerMonth(e.target.value === '' ? '' : Number(e.target.value))} placeholder="160" type="number" className="mt-2 w-full bg-transparent outline-none input-field" aria-label="Hours you work per month" />
          <p className="text-xs text-gray-400 mt-1">Default is 160 (40h * 4 weeks).</p>
        </div>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <label className="text-sm text-gray-600 dark:text-gray-300">Item price</label>
        <input value={price as any} onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))} placeholder="200" type="number" className="mt-2 w-full bg-transparent outline-none text-lg font-medium input-field" aria-label="Item price" />
        <p className="text-xs text-gray-400 mt-1">Enter the price to see how many hours it costs.</p>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-800/40 shadow card-soft">
        {price === '' || salary === '' || hoursPerMonth === '' ? (
          <div className="text-gray-500">Enter values to see results.</div>
        ) : (
          <div>
            <div className="text-sm text-gray-500">This costs you</div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <div className="text-sm text-gray-500">Hours of work</div>
                <div className="text-3xl font-bold mt-1 text-gray-900 dark:text-white"><AnimatedNumber value={hours} decimals={2} className="mr-1" /> <span className="text-sm text-gray-500">h</span></div>
                <div className="mt-2">
                  <div className="bar-bg" aria-hidden>
                    <div className="bar-fill" style={{ width: `${hoursPct}%` }} />
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Relative to monthly hours</div>
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-sm text-gray-500">Days of work</div>
                <div className="text-xl font-bold mt-2"><AnimatedNumber value={days} decimals={2} /></div>
                <div className="text-sm text-gray-500 mt-2"><span className="text-lg font-bold mt-2"><AnimatedNumber value={pct} decimals={1} /></span> % of your month</div>
                <div className="mt-3">
                  <div className="bar-bg">
                    <div className="bar-fill" style={{ width: `${salaryPct}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
