import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import Card from '../components/Card/Card'
import { cards } from '../data/cards'
import GalleryItem from '../components/GalleryItem/GalleryItem'
import PersonCard from '../components/PersonCard/PersonCard'
import { gallery } from '../data/gallery'
import { FiList, FiPlus } from 'react-icons/fi'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFeaturedPeople } from '../services/people.service'

function Home() {
  const navigate = useNavigate()

  const [people, setPeople] = useState([])
  const [peopleLoading, setPeopleLoading] = useState(true)
  const [peopleError, setPeopleError] = useState('')

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const data = await getFeaturedPeople()
        setPeople(data)
      } catch (error) {
        setPeopleError(error.message)
      } finally {
        setPeopleLoading(false)
      }
    }
    loadPeople()
  }, [])

  return (
    <>
      <Hero />
      <main>
        <Section
          id="reviews"
          title="Reseñas"
          layout="o-grid--3"
          actions={
            <>
              <Button icon={FiPlus} onClick={() => navigate('/reviews/nueva')}>Crear reseña</Button>
              <Button variant="secondary" icon={FiList} onClick={() => navigate('/mis-reviews')}>Mis reseñas</Button>
            </>
          }
        >
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </Section>

        <Section id="favoritos" title="Favoritos" layout="o-grid--4">
          {gallery.map((item) => (
            <GalleryItem key={item.id} {...item} />
          ))}
        </Section>

        <Section id="actores" title="Actores destacados" layout="o-grid--center">
          {peopleLoading && (
            <p>
               Cargando actores destacados...
            </p>
          )}

          {peopleError && (
            <p>{peopleError}</p>
          )}

          {!peopleLoading &&
            !peopleError &&
            people.map((person) => (
              <PersonCard
                key={person.id}
                {...person}
              />
            ))
          }
        </Section>
      </main>
    </>
  )
}

export default Home