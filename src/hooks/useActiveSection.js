import { useState, useEffect, useRef } from 'react'
import { nav } from '../data/content'

export function useActiveSection() {
  const [activeId, setActiveId] = useState(nav[0]?.id ?? '')
  const ratiosRef = useRef({})

  useEffect(() => {
    const sectionIds = nav.map(({ id }) => id)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (sectionIds.includes(id)) {
            ratiosRef.current[id] = entry.intersectionRatio
          }
        })
        const entries_ = Object.entries(ratiosRef.current)
        if (entries_.length === 0) return
        const [bestId] = entries_.reduce(
          (best, [id, ratio]) => (ratio > best[1] ? [id, ratio] : best),
          [sectionIds[0], 0]
        )
        setActiveId(bestId)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return activeId
}
