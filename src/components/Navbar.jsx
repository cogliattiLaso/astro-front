import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'inicio' },
  { to: '/escritos', label: 'escritos' },
  { to: '/videos', label: 'videos' },
  { to: '/sesiones', label: 'sesiones' },
  { to: '/contacto', label: 'contacto' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        Valentina |{' '}
        <a
          className="instagram-username"
          href="https://www.instagram.com/dosdetiloymevoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dosdetiloymevoy
        </a>
      </div>
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
