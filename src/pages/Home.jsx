import TopBar from '../components/TopBar/TopBar'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'
import Card from '../components/Card/Card'
import { cards } from '../data/cards'

function Home() {
    return(
        <>
            <TopBar />
            <Header />
            <main>
                <Section title="Ultimos estrenos">
                    {cards.map((card) => (
                        <Card key={card.id} {...card}/>
                    ))}
                </Section>
            </main>
        </>
    )
}

export default Home