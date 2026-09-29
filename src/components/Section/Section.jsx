function Section({ title, layout = '', children }) {
  return (
    <section className="c-section">
      <h2 className="c-section__title">{title}</h2>
      <div className={`o-container o-grid ${layout}`}>{children}</div>
    </section>
  )
}

export default Section