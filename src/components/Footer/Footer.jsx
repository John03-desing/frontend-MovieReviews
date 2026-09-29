import FooterColumn from '../FooterColumn/FooterColumn'
import { footerColumns } from '../../data/footer'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="c-footer">
      <div className="o-container c-footer__inner">
        <div className="c-footer__brand">
          <p className="c-footer__logo">MovieReviews</p>

          <ul className="c-footer__social">
            <li>
              <a className="c-footer__social-link" href="https://github.com/" aria-label="GitHub">
                <svg className="c-footer__icon" viewBox="0 0 24 24" aria-hidden="true">
                  {/* path del icono */}
                </svg>
              </a>
            </li>
            {/* ...otras 3 redes */}
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