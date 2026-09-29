function Section({ id, title, layout = '', children }) {
  return (
    <section className="c-section" id={id}>
      <h2 className="c-section__title">{title}</h2>
      <div className={`o-container o-grid ${layout}`}>{children}</div>
    </section>
  )
}

export default Section