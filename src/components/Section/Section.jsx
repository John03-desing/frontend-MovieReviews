function Section({ id, title, layout = '', actions, children }) {
  return (
    <section className="c-section" id={id}>
      <div className="o-container">
        <header className="c-section__header">
          <h2 className="c-section__title">{title}</h2>
          {actions && <div className="c-section__actions">{actions}</div>}
        </header>
        <div className={`o-grid ${layout}`}>{children}</div>
      </div>
    </section>
  )
}

export default Section