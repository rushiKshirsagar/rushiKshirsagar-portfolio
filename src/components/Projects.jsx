import { projects } from '../data/content'
import Section from './Section'
import './Projects.css'

export default function Projects() {
  return (
    <Section id="projects" className="projects" delay={150}>
      <h2 className="section-title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, i) => (
          <article
            key={i}
            className={`project-card project-card--${(i % 4) + 1}`}
          >
            <h3 className="project-card__name">{project.name}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t} className="project-card__tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-card__links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
