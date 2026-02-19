import { ShieldCheckIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const steps = [
    { title: 'Start with your salary', desc: 'Tell WorthIt what you earn and how much you work so we can convert time to money.', icon: ShieldCheckIcon },
    { title: 'Add purchases or habits', desc: 'Quickly model an item or a daily habit to see its time cost.', icon: ClockIcon },
    { title: 'Make calm choices', desc: 'See clear hours and dollar equivalents to decide what’s worth it.', icon: ChartBarIcon }
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold">How it works</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A simple three-step approach to translate purchases and routines into the one resource you can’t make more of: time.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((s, idx) => (
          <div key={s.title} className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow card-soft hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 text-worthit-green feature-icon">
                <s.icon className="w-6 h-6" aria-hidden />
              </div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{s.desc}</div>
                <div className="text-xs text-gray-400 mt-3">Step {idx + 1}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
