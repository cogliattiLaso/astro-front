import { useEffect } from 'react'
import { IconPlayerPlay } from '@tabler/icons-react'
import SectionTitle from '../components/SectionTitle'

const videos = [
  {
    title: 'Eclipses',
    type: 'instagram',
    href: 'https://www.instagram.com/reel/DOmTlXmAHB9/',
  },
  {
    title: 'Luna llena en libra',
    type: 'instagram',
    href: 'https://www.instagram.com/reel/DWpd68aAATH/',
  },
  {
    title: 'Venus en libra',
    type: 'instagram',
    href: 'https://www.instagram.com/reel/DbtPe7XudXS/',
  },
]

export default function Videos() {
  useEffect(() => {
    const process = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }
    if (window.instgrm) {
      process()
      return
    }
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = 'https://www.instagram.com/embed.js'
    script.onload = process
    document.body.appendChild(script)
  }, [])

  return (
    <section className="page">
      <SectionTitle title="Charlas, en cámara" />
      <div className="videos__grid">
        {videos.map((video) => {
          if (video.type === 'instagram') {
            return (
              <div
                key={video.title}
                className="video-card video-card--instagram"
              >
                <h2 className="video-card__title" style={{ marginBottom: 8 }}>
                  {video.title}
                </h2>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={video.href}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    margin: 0,
                    maxWidth: 540,
                    padding: 0,
                    width: 'calc(100% - 2px)',
                  }}
                >
                  <a href={video.href} target="_blank" rel="noreferrer">
                    Ver en Instagram
                  </a>
                </blockquote>
              </div>
            )
          }
          return (
            <a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="video-card card"
            >
              <div className="video-card__thumb">
                <IconPlayerPlay
                  size={28}
                  stroke={1.5}
                  className="video-card__thumb-icon"
                />
              </div>
              <h2 className="video-card__title">{video.title}</h2>
            </a>
          )
        })}
      </div>
    </section>
  )
}
