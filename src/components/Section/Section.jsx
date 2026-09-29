function Section({title, children}){
    return(
        <section className="section">
            <h2 className="section__title">{title}</h2>
            <div className="o-grid">{children}</div>
        </section>
    )
}

export default Section