"use client"
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const path = usePathname() || '/'
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
               <img src="/logo-light.png" alt="WorthIt" width={200} height={200} className="logo-light mt-3" />
               <img src="/logo-dark.png" alt="WorthIt" width={200} height={200} className="logo-dark mt-3" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm ${path === '/' ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300'}`}>Home</Link>
              <Link href="/calculator" className={`px-3 py-2 rounded-md text-sm ${path.startsWith('/calculator') ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300'}`}>Calculator</Link>
            </nav>
            <ThemeToggle />

            <button
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2">
            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <nav className="flex flex-col gap-2">
                <Link href="/" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md text-sm ${path === '/' ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300'}`}>Home</Link>
                <Link href="/calculator" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md text-sm ${path.startsWith('/calculator') ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300'}`}>Calculator</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
