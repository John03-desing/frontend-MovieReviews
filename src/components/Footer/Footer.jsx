import FooterColumn from '../FooterColumn/FooterColumn'
import { footerColumns } from '../../data/footer'
import { socialLinks } from '../../data/social'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="c-footer">
      <div className="o-container c-footer__inner">
        <div className="c-footer__brand">
          <p className="c-footer__logo">MovieReviews</p>
          <ul className="c-footer__social">
            {socialLinks.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  className="c-footer__social-link"
                  type="button"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="c-footer__icon" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          <p className="c-footer__tagline">Reseñas auténticas y estrenos al día.</p>
        </div>

        {footerColumns.map((column) => (
          <FooterColumn key={column.id} title={column.title} links={column.links} />
        ))}
      </div>

      <div className="o-container c-footer__bottom">
        <small>© {year} MovieReviews. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer