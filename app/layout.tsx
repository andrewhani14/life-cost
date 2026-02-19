import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'WorthIt',
  description: 'See what your life really costs.'
}
export const icons = {
  icon: '/favicon.svg',
  shortcut: '/favicon.svg'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          <Header />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
