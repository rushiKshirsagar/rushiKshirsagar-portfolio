import { hobbies } from '../data/content'
import Section from './Section'
import './Hobbies.css'

export default function Hobbies() {
  return (
    <Section id="hobbies" className="hobbies" delay={750}>
      <h2 className="section-title">Hobbies</h2>
      <div className="hobbies__grid">
        {hobbies.map((hobby, i) => (
          <article key={hobby.title} className={`hobby-card hobby-card--${(i % 4) + 1}`}>
            <h3 className="hobby-card__title">{hobby.title}</h3>
            <p className="hobby-card__detail">{hobby.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

