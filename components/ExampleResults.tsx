import { useMemo } from 'react'
import AnimatedNumber from './ui/AnimatedNumber'

export default function ExampleResults({ compact, landing }: { compact?: boolean; landing?: boolean }) {
  const examples = useMemo(() => {
    if (landing) {
      return [
        { id: 'coffee', text: 'Binge-watching 3 hours/day = 1,095 hours/year = $8,760 of your life.' },
        { id: 'sub', salary: 4000, hours: 160, item: 12, label: 'Monthly subscription' }
      ]
    }

    return [
      { id: 'scroll', text: 'Scrolling 2 hours/day = 520 hours/year = $4,160 of your life.' },
      { id: 'headphones', salary: 4000, hours: 160, item: 200, label: 'New headphones' }
    ]
  }, [landing])

  return (
    <div className={compact ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
      {examples.map((e: any) => {
        if (e.text) {
          return (
            <div key={e.id} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow card">
              <div className="font-semibold text-sm">{e.text}</div>
            </div>
          )
        }

        const hourly = e.salary / e.hours
        const hours = +(e.item / hourly)
        const days = +(hours / 8)
        const pct = +((e.item / e.salary) * 100)

        return (
          <div key={e.id} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow card-soft hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{e.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Price ${e.item}</div>
                <div className="mt-2 text-xs text-gray-400">A quick intuition for cost vs. time.</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-sm text-gray-500 dark:text-gray-300"><AnimatedNumber value={hours} decimals={1} /> <span className="text-xs text-gray-400">h</span></div>
                <div className="text-xs text-gray-400">{days.toFixed(1)} days • {pct.toFixed(1)}%</div>
                <div className="mt-2">
                  <div className="bar-bg">
                    <div className="bar-fill" style={{ width: `${Math.min(100, pct)}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
