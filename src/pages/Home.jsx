import { useNavigate } from 'react-router-dom'
import {
  IconPencil,
  IconPlayerPlay,
  IconMoonStars,
} from '@tabler/icons-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="page home__hero">
      <p className="home__eyebrow">astrología · tarot · numerología</p>
      <SectionTitle
        title="Te ayudo a recordarte, siendo quien sos."
        title2="Más sensible, más humana. 🏹 🔮✨"
        subtitle="Tu magia es ser."
        large
      />
      <Button onClick={() => window.open(`https://wa.me/59892354590?text=${encodeURIComponent('¡Hola! Quiero agendar una sesión.')}`, '_blank')}>Agendar sesión</Button>

      <div className="home__banner">
        <img
          src="/images/banner.jpeg"
          alt="Banner astrológico"
          className="home__banner-image"
        />
      </div>

      <div className="home__grid">
        <Card
          className="home__grid-card"
          onClick={() => navigate('/escritos')}
        >
          <IconPencil size={28} stroke={1.5} className="card__icon" />
          <span className="card__title">Escritos</span>
        </Card>
        <Card
          className="home__grid-card"
          onClick={() => navigate('/videos')}
        >
          <IconPlayerPlay size={28} stroke={1.5} className="card__icon" />
          <span className="card__title">Videos</span>
        </Card>
        <Card
          className="home__grid-card"
          onClick={() => navigate('/sesiones')}
        >
          <IconMoonStars size={28} stroke={1.5} className="card__icon" />
          <span className="card__title">Sesiones</span>
        </Card>
      </div>

      <div className="home__photos">
        <img src="/images/val1.jpg" alt="Valentina" className="home__photo" />
        <img src="/images/val2.jpg" alt="Valentina sesión" className="home__photo" />
      </div>

      <Card className="home__about">
        <h2 className="home__about-title">Sobre mí</h2>
        <p className="home__about-text">
          {`Soy Valentina.

Desde siempre me interesó comprender lo que hay detrás de lo evidente: lo que sentimos, lo que repetimos, lo que nos transforma y aquello que no siempre sabemos cómo nombrar.

La astrología, el tarot, la numerología y la espiritualidad llegaron a mi vida como herramientas para explorar y conocernos desde otras perspectivas.

No busco darte respuestas cerradas ni decirte qué va a pasar. Me interesa abrir preguntas, mirar los procesos de otra manera y encontrar significado en aquello que estamos atravesando.

Creo en estas herramientas como mapas y espejos, pero también en nuestra capacidad de elegir, cuestionarnos y transformarnos.

Este espacio nace de mis propias búsquedas, crisis, vínculos y aprendizajes.

Más que respuestas, busco abrir conversaciones.

Sobre la vida, los vínculos, el alma y todo eso que nos habita aunque no siempre sepamos nombrarlo.

Si sentís que hay algo más de lo que se ve, bienvenida.`}
        </p>
      </Card>
    </section>
  )
}
