import TopBar from '../components/TopBar/TopBar'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import Card from '../components/Card/Card'
import { cards } from '../data/cards'
import GalleryItem from '../components/GalleryItem/GalleryItem'
import PersonCard from '../components/PersonCard/PersonCard'
import { gallery } from '../data/gallery'
import { people } from '../data/people'
import Footer from '../components/Footer/Footer'

function Home() {
    return(
        <>
            <div className="c-site-header">
                <TopBar />
                <Header />
            </div>
            <Hero />
            <main>
                <Section id="reviews" title="Reseñas" layout="o-grid--3">
                    {cards.map((card) => (
                        <Card key={card.id} {...card}/>
                    ))}
                </Section>

                <Section id="estrenos" title="Estrenos" layout='o-grid--4'>
                    {gallery.map ((item) => (
                        <GalleryItem key={item.id} {...item} />
                    ))}
                </Section>

                <Section id="actores" title="Actores destacados" layout="o-grid--center">
                    {people.map((person) =>(
                        <PersonCard key={person.id} {...person} />
                    ))}
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Home