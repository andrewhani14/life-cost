import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-800/60 dark:to-gray-900 p-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Start seeing your WorthIt today.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Use the calculator to turn purchases and habits into hours and dollars. Everything runs locally in your browser.</p>
        </div>
        <div className="flex gap-3 items-center w-full sm:w-auto">
          <Link href="/calculator" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-worthit-green text-white rounded-lg shadow-md hover:brightness-105 transition">
            Try WorthIt
            <ArrowRightIcon className="w-4 h-4 opacity-80" />
          </Link>
        </div>
      </div>
    </section>
  )
}
