import Link from 'next/link'
import { LightBulbIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import HowItWorks from '../components/HowItWorks'
import ExampleResults from '../components/ExampleResults'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="pt-8 hero">
        <div className="hero-inner">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight hero-headline fade-up"><span className="gradient-text">See what your life really costs.</span></h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl fade-up" style={{ animationDelay: '60ms' }}>Convert purchases and habits into real work hours and money insights — then decide what’s WorthIt.</p>

            <div className="mt-6 flex flex-wrap gap-3 items-center fade-up" style={{ animationDelay: '120ms' }}>
              <Link href="/calculator" className="inline-flex items-center px-6 py-3 bg-worthit-green text-white rounded-lg shadow-md hover:brightness-105 transition">Try WorthIt</Link>
              <a href="#examples" className="inline-flex items-center px-4 py-3 border rounded-md text-sm text-gray-700 dark:text-gray-200">See examples</a>
            </div>

            <div className="mt-6 feature-list fade-up" style={{ animationDelay: '180ms' }}>
              <div className="feature-item">
                <div className="feature-icon p-3 bg-gradient-to-br from-white to-green-50">
                  <LightBulbIcon className="w-5 h-5 text-worthit-green" aria-hidden />
                </div>
                <div>
                  <div className="font-medium">Instant insights</div>
                  <div className="text-sm text-gray-500">Understand purchases and habits in hours and money.</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon p-3 bg-gradient-to-br from-white to-green-50">
                  <LockClosedIcon className="w-5 h-5 text-worthit-green" aria-hidden />
                </div>
                <div>
                  <div className="font-medium">Private & local</div>
                  <div className="text-sm text-gray-500">All calculations happen in your browser — nothing is stored.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hero-blob" aria-hidden>
              <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                  <path d="M120,-160C160,-120,190,-80,200,-30C210,20,200,80,170,120C140,160,80,180,30,190C-20,200,-40,190,-80,170C-120,150,-160,120,-170,80C-180,40,-160,-10,-140,-60C-120,-110,-80,-160,-30,-180C20,-200,60,-190,120,-160Z" fill="#10B981" />
                </g>
              </svg>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl shadow-xl">
              <ExampleResults landing compact />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section id="examples">
        <h2 className="text-2xl font-semibold">Example results</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Quick scenarios to show the intuition.</p>
        <div className="mt-6">
          <ExampleResults />
        </div>
      </section>

      <Benefits />

      <CTA />
    </div>
  )
}
