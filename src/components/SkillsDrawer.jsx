import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import './SkillsDrawer.css'

export default function SkillsDrawer({ isVisible }) {
  const hasAnimated = useRef(false)
  const [runAnimation, setRunAnimation] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      setRunAnimation(true)
    }
  }, [isVisible])

  return (
    <aside
      className={`skills-drawer ${isVisible ? 'skills-drawer--visible' : ''} ${runAnimation ? 'skills-drawer--animated' : ''}`}
      aria-label="Skills"
    >
      <div className="skills-drawer__inner">
        <h2 className="skills-drawer__title">Skills × Proficiency</h2>
        <ul className="skills-drawer__list">
          {skills.map((skill, i) => (
            <li key={skill.name} className={`skills-drawer__item skills-drawer__item--${(i % 4) + 1}`}>
              <span className="skills-drawer__label">{skill.name}</span>
              <div className="skills-drawer__bar" role="presentation" aria-hidden>
                <span className="skills-drawer__fill" style={{ width: `${skill.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

