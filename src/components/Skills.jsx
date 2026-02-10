import { skills } from '../data/content'
import Section from './Section'
import './Skills.css'

export default function Skills() {
  return (
    <Section id="skills" className="skills" delay={600}>
      <h2 className="section-title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill.name} className="skills__item">
            {skill.name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
