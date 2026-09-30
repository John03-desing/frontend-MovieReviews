import { Link } from 'react-router-dom'

function FooterColumn({ title, links }) {
  return (
    <nav className="c-footer-column" aria-label={title}>
      <h3 className="c-footer-column__title">{title}</h3>
      <ul className="c-footer-column__list">
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link className="c-footer-column__link" to={link.to}>{link.label}</Link>
            ) : (
              <a className="c-footer-column__link" href={link.href}>{link.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterColumn