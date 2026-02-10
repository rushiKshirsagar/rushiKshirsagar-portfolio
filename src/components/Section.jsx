import { useRef, useEffect, useState } from 'react'

export default function Section({ id, children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const timeoutRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(() => {
            setVisible(true)
          }, delay)
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
          }
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )
    observer.observe(el)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      observer.disconnect()
    }
  }, [delay])

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${visible ? 'section--visible' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
