"use client"
import { useEffect, useState } from 'react'
import ItemCost from './calculator/ItemCost'
import HabitCost from './calculator/HabitCost'

export default function CalculatorShell() {
  const [tab, setTab] = useState<'item' | 'habit'>('item')

  // Shared fields
  const [salary, setSalary] = useState<number | ''>(() => {
    try {
      const v = localStorage.getItem('lc_salary')
      return v ? Number(v) : 4000
    } catch {
      return 4000
    }
  })
  const [hoursPerMonth, setHoursPerMonth] = useState<number | ''>(() => {
    try {
      const v = localStorage.getItem('lc_hoursPerMonth')
      return v ? Number(v) : 160
    } catch {
      return 160
    }
  })

  // Item fields
  const [itemPrice, setItemPrice] = useState<number | ''>(() => {
    try {
      const v = localStorage.getItem('lc_itemPrice')
      return v ? Number(v) : 200
    } catch {
      return 200
    }
  })

  // Habit fields
  const [habit, setHabit] = useState<string>(() => {
    try {
      return localStorage.getItem('lc_habit') || 'Scrolling'
    } catch {
      return 'Scrolling'
    }
  })
  const [hoursPerDay, setHoursPerDay] = useState<number | ''>(() => {
    try {
      const v = localStorage.getItem('lc_hoursPerDay')
      return v ? Number(v) : 1
    } catch {
      return 1
    }
  })
  const [monthlyCost, setMonthlyCost] = useState<number | ''>(() => {
    try {
      const v = localStorage.getItem('lc_monthlyCost')
      return v ? Number(v) : 0
    } catch {
      return 0
    }
  })

  // Sync to localStorage
  useEffect(() => { localStorage.setItem('lc_salary', String(salary ?? '')) }, [salary])
  useEffect(() => { localStorage.setItem('lc_hoursPerMonth', String(hoursPerMonth ?? '')) }, [hoursPerMonth])
  useEffect(() => { localStorage.setItem('lc_itemPrice', String(itemPrice ?? '')) }, [itemPrice])
  useEffect(() => { localStorage.setItem('lc_habit', habit) }, [habit])
  useEffect(() => { localStorage.setItem('lc_hoursPerDay', String(hoursPerDay ?? '')) }, [hoursPerDay])
  useEffect(() => { localStorage.setItem('lc_monthlyCost', String(monthlyCost ?? '')) }, [monthlyCost])

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 card">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">Calculator</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 tabs relative bg-transparent px-1 py-1 rounded-md">
              <button onClick={() => setTab('item')} className={`px-3 py-2 rounded-md text-sm btn ${tab === 'item' ? 'text-worthit-green font-semibold' : 'text-gray-600 dark:text-gray-300'}`}>Item Cost</button>
              <button onClick={() => setTab('habit')} className={`px-3 py-2 rounded-md text-sm btn ${tab === 'habit' ? 'text-worthit-green font-semibold' : 'text-gray-600 dark:text-gray-300'}`}>Habit Cost</button>
              <div className="underline" style={{ transform: tab === 'item' ? 'translateX(0%)' : 'translateX(100%)' }} />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="transition-all duration-320 ease-in-out">
            {tab === 'item' ? (
              <div className="fade-up">
                <ItemCost
                  salary={salary}
                  setSalary={setSalary}
                  hoursPerMonth={hoursPerMonth}
                  setHoursPerMonth={setHoursPerMonth}
                  price={itemPrice}
                  setPrice={setItemPrice}
                />
              </div>
            ) : (
              <div className="fade-up">
                <HabitCost
                  salary={salary}
                  setSalary={setSalary}
                  hoursPerMonth={hoursPerMonth}
                  setHoursPerMonth={setHoursPerMonth}
                  habit={habit}
                  setHabit={setHabit}
                  hoursPerDay={hoursPerDay}
                  setHoursPerDay={setHoursPerDay}
                  monthlyCost={monthlyCost}
                  setMonthlyCost={setMonthlyCost}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
