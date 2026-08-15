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
    </section>
  )
}
