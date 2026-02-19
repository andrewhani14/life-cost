"use client"
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  decimals?: number
  duration?: number
  prefix?: string
  className?: string
}

export default function AnimatedNumber({ value, decimals = 0, duration = 700, prefix = '', className = '' }: Props) {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)
  const start = useRef<number | null>(null)
  const from = useRef(0)

  useEffect(() => {
    from.current = display
    const animate = (timestamp: number) => {
      if (start.current === null) start.current = timestamp
      const elapsed = timestamp - (start.current || 0)
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = from.current + (value - from.current) * eased
      setDisplay(Number(next.toFixed(decimals)))
      if (t < 1) raf.current = requestAnimationFrame(animate)
      else {
        start.current = null
        raf.current = null
      }
    }

    raf.current = requestAnimationFrame(animate)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      start.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, duration])

  return (
    <span className={`num-anim ${className}`}>{prefix}{display.toLocaleString()}</span>
  )
}
