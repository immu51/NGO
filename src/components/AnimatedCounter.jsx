import { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup'

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2, label }) {
  const [start, setStart] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        {start && (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
          />
        )}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
    </div>
  )
}
