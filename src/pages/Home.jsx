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
            <TopBar />
            <Header />
            <Hero />
            <main>
                <Section title="Reseñas">
                    {cards.map((card) => (
                        <Card key={card.id} {...card}/>
                    ))}
                </Section>

                <Section title="Estrenos" layout='o-grid--4'>
                    {gallery.map ((item) => (
                        <GalleryItem key={item.id} {...item} />
                    ))}
                </Section>

                <Section title="Actores destacados" layout="o-grid--center">
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