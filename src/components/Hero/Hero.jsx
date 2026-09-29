import FeatureCard from "../FeatureCard/FeatureCard"
import { upcoming } from "../../data/upcoming"

function Hero() {
    return(
        <section className="c-hero" id="inicio">
            <div className="o-container c-hero__content">
                <h1 className="c-hero__title">Bienvenido a MovieReviews</h1>
                <p className="c-hero__description">
                    Descubre reseñas auténticas y mantente al día con los proximos estrenos.
                </p>
                <button className="c-hero__btn">Ver próximos estrenos</button>
            </div>
            
            <div className="o-container c-hero__upcoming">
                {upcoming.map((movie) =>(
                    <FeatureCard key={movie.id} {...movie} />
                ))}
            </div>
        </section>
    )
}

export default Hero