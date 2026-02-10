import { links } from '../data/content'
import Section from './Section'
import './Links.css'

export default function Links() {
  return (
    <Section id="links" className="links">
      <h2 className="section-title">Links</h2>
      <div className="links__list">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="links__link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
