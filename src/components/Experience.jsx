import { experience } from '../data/content'
import Section from './Section'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" className="experience" delay={300}>
      <h2 className="section-title">Experience</h2>
      <div className="experience__list">
        {experience.map((job, i) => (
          <article key={i} className="experience__job">
            <header className="experience__header">
              <h3 className="experience__role">{job.role}</h3>
              <p className="experience__meta">
                {job.company} · {job.period}
              </p>
            </header>
            <ul className="experience__points">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
