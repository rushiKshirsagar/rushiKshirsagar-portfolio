import { projects } from '../data/content'
import Section from './Section'
import './Projects.css'

function formatDownloads(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TrendingIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

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
            {project.name.includes('QuickScoop') && project.name.includes('iOS') && (
              <span className="project-card__card-badge project-card__app-rating" title="App Store rating">
                <StarIcon className="project-card__star-icon" />
                <span className="project-card__rating-count">4.8</span>
              </span>
            )}
            {project.apiHits != null && project.apiHits !== '' && (
              <span className="project-card__card-badge project-card__api-hits" title="API hits">
                <TrendingIcon className="project-card__trending-icon" />
                <span className="project-card__api-hits-count"> {project.apiHits} hits</span>
              </span>
            )}
            {project.npmDownloads != null && project.npmDownloads !== '' && (typeof project.npmDownloads !== 'number' || project.npmDownloads > 0) && (
              <span className="project-card__card-badge project-card__npm-downloads" title="Downloads">
                <DownloadIcon className="project-card__download-icon" />
                <span className="project-card__npm-downloads-count">
                  {typeof project.npmDownloads === 'number'
                    ? formatDownloads(project.npmDownloads)
                    : project.npmDownloads}
                </span>
              </span>
            )}
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
