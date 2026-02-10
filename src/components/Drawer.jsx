import { nav, links } from '../data/content'
import { DrawerIcon } from './DrawerIcons'
import './Drawer.css'

function scrollToSection(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Drawer({ activeId }) {
  return (
    <aside className="drawer" aria-label="Page navigation">
      {links.length > 0 && (
        <div className="drawer__links">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="drawer__outlink"
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              title={label}
              aria-label={label}
            >
              <DrawerIcon label={label} />
            </a>
          ))}
        </div>
      )}
      <nav className="drawer__nav">
        <ul className="drawer__list">
          {nav.map(({ id, label }) => (
            <li key={id} className="drawer__item">
              <a
                href={`#${id}`}
                className={`drawer__link ${activeId === id ? 'drawer__link--active' : ''}`}
                onClick={(e) => scrollToSection(e, id)}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
