import { IconPlayerPlay } from '@tabler/icons-react'
import SectionTitle from '../components/SectionTitle'

const videos = [
  {
    title: 'luna en escorpio',
    href: '#',
  },
  {
    title: 'tarot del mes',
    href: '#',
  },
  {
    title: 'preguntas y respuestas',
    href: '#',
  },
]

export default function Videos() {
  return (
    <section className="page">
      <SectionTitle title="Charlas, en cámara" />
      <div className="videos__grid">
        {videos.map((video) => (
          <a key={video.title} href={video.href} className="video-card card">
            <div className="video-card__thumb">
              <IconPlayerPlay
                size={28}
                stroke={1.5}
                className="video-card__thumb-icon"
              />
            </div>
            <h2 className="video-card__title">{video.title}</h2>
          </a>
        ))}
      </div>
    </section>
  )
}
