import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const raw = String(end).replace(/[^0-9.]/g, '')
    const target = parseFloat(raw)
    const isInt = Number.isInteger(target)
    const steps = 30
    const increment = target / steps
    let current = 0
    let i = 0
    const timer = setInterval(() => {
      i++
      current = Math.min(current + increment, target)
      setCount(isInt ? Math.round(current) : parseFloat(current.toFixed(1)))
      if (i >= steps) clearInterval(timer)
    }, (duration * 1000) / steps)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {count}{suffix}
    </motion.span>
  )
}
