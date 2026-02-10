import { site } from '../data/content'
import Section from './Section'
import './Hero.css'

export default function Hero() {
  return (
    <Section id="hero" className="hero">
      <div className="hero__inner">
        {site.photo && (
          <div className="hero__photo-wrap">
            <img src={`${import.meta.env.BASE_URL}${site.photo.replace(/^\//, '')}`} alt="" className="hero__photo" />
          </div>
        )}
        <div className="hero__text">
          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__role">Fullstack developer</p>
          <p className="hero__tagline">{site.tagline}</p>
          {site.summary && (
            <p className="hero__summary">{site.summary}</p>
          )}
        </div>
      </div>
    </Section>
  )
}
