import { education } from '../data/content'
import Section from './Section'
import './Education.css'

export default function Education() {
  return (
    <Section id="education" className="education" delay={450}>
      <h2 className="section-title">Education</h2>
      <div className="education__list">
        {education.map((item, i) => (
          <article key={i} className="education__item">
            <h3 className="education__degree">{item.degree}</h3>
            <p className="education__meta">
              {item.institution} · {item.year}
            </p>
            {item.courses && item.courses.length > 0 && (
              <div className="education__courses">
                <p className="education__courses-title">Courses</p>
                <div className="education__courses-pills">
                  {item.courses.map((course) => (
                    <span key={course} className="education__pill">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.note && (
              <p className="education__note">{item.note}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
