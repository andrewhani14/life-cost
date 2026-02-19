import { BoltIcon, EyeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function Benefits() {
  const items = [
    { title: 'Understand the real cost', desc: 'Translate purchases and habits into hours and dollars so trade-offs are visible.', icon: EyeIcon },
    { title: 'Decide with clarity', desc: 'Make choices aligned with your priorities, not impulse.', icon: CheckBadgeIcon },
    { title: 'Save time & money', desc: 'Small changes add up — see their yearly impact at a glance.', icon: BoltIcon }
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold">Benefits</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">WorthIt helps you reframe spending and routines into one consistent metric: your time.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow card-soft hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="feature-icon p-2 bg-gradient-to-br from-white to-green-50">
                <it.icon className="w-6 h-6 text-worthit-green" aria-hidden />
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{it.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
