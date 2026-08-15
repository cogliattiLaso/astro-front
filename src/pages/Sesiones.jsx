import { useState } from 'react'
import { IconSun, IconHeart, IconHash } from '@tabler/icons-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Card from '../components/Card'

const sessions = [
  {
    icon: IconSun,
    name: 'Carta natal',
    duration: '60 min',
    summary:
      'Un espacio de autoconocimiento para comprender tu mundo interno, tus emociones, tus vínculos y los patrones que se repiten en tu vida.',
    description: `✨SESIÓN DE CARTA NATAL | ENFOQUE PSICOLÓGICO EVOLUTIVO

Un espacio de autoconocimiento para comprender tu mundo interno, tus emociones, tus vínculos y los patrones que se repiten en tu vida.

A través de tu carta natal exploramos tus desafíos, potencialidades y procesos de transformación, poniendo palabras a eso que muchas veces sentimos pero no sabemos nombrar.

No se trata de predecir tu futuro ni de darte respuestas cerradas.

Se trata de mirarte con más conciencia, comprender tu proceso y volver a vos.

Una lectura para abrir preguntas, encontrar claridad y descubrir nuevas formas de habitarte.`,
  },
  {
    icon: IconHeart,
    name: 'Tarot',
    duration: '45 min',
    summary:
      'Una lectura personalizada que combina Tarot + Astrología para mirar con más profundidad el momento que estás atravesando.',
    description: `🔮 TIRADA DE TAROT | ENFOQUE ASTROLÓGICO

Una lectura personalizada que combina Tarot + Astrología para mirar con más profundidad el momento que estás atravesando.

Partimos de tus preguntas y las relacionamos con los tránsitos astrológicos actuales que están influyendo en tu carta, para comprender qué energías están activándose y qué puede estar pidiendo tu proceso.

Podemos explorar vínculos, decisiones, procesos personales, cambios, bloqueos o aquello que hoy necesites comprender.

✨ Y al final de la lectura, sumamos una canalización: un mensaje intuitivo para cerrar la sesión y llevarte una mirada más profunda sobre lo que tu proceso está queriendo mostrarte.

No se trata solo de saber qué va a pasar.

Se trata de comprender qué está pasando en vos y qué podés hacer con eso.`,
  },
  {
    icon: IconHash,
    name: 'Numerología',
    duration: '45 min',
    summary:
      'Una lectura escrita en PDF para conocer las principales vibraciones que atraviesan tu vida y comprender mejor tus potencialidades, desafíos y procesos.',
    description: `🔢 CARTA NUMEROLÓGICA

Una lectura escrita en PDF para conocer las principales vibraciones que atraviesan tu vida y comprender mejor tus potencialidades, desafíos y procesos.

La carta se realiza a partir de tu nombre completo y fecha de nacimiento e incluye:

✨ Camino de vida
✨ Personalidad
✨ Alma
✨ Reto ancestral
✨ Esencia
✨ Don
✨ Vibración anual

Recibís tu carta numerológica completa en formato PDF, para leerla a tu tiempo y volver a ella cada vez que lo necesites.

Una herramienta de autoconocimiento para descubrir qué hay detrás de tus números y cómo pueden acompañarte en tu proceso.

Tu nombre y tu fecha de nacimiento también cuentan una historia. ✨`,
  },
]

export default function Sesiones() {
  const [activeSession, setActiveSession] = useState(null)

  const close = () => setActiveSession(null)

  return (
    <section className="page">
      <SectionTitle
        title="Un espacio para vos"
        subtitle="astrología · tarot · numerología"
      />
      <div className="sessions__grid">
        {sessions.map((session) => {
          const Icon = session.icon
          return (
            <Card
              key={session.name}
              className="session-card"
              onClick={() => setActiveSession(session)}
            >
              <Icon size={28} stroke={1.5} className="card__icon" />
              <h2 className="card__title">{session.name}</h2>
              <span className="session-card__duration">{session.duration}</span>
              <p className="session-card__summary">Más información +</p>
            </Card>
          )
        })}
      </div>
      <Button
        onClick={() =>
          window.open(
            `https://wa.me/59892354590?text=${encodeURIComponent(
              '¡Hola! Quiero agendar una sesión.'
            )}`,
            '_blank'
          )
        }
      >
        Reservar sesión
      </Button>

      {activeSession && (
        <div className="session-modal" onClick={close}>
          <div
            className="session-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="session-modal__close"
              onClick={close}
              aria-label="Cerrar"
            >
              ×
            </button>
            {(() => {
              const [modalTitle, ...bodyLines] =
                activeSession.description.split('\n')
              const modalBody = bodyLines.join('\n').trim()
              return (
                <>
                  <h2 className="session-modal__title">{modalTitle}</h2>
                  <p className="session-modal__body">{modalBody}</p>
                </>
              )
            })()}
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/59892354590?text=${encodeURIComponent(
                    `¡Hola! Quiero agendar una sesión de ${activeSession.name}.`
                  )}`,
                  '_blank'
                )
              }
            >
              reservar esta sesión
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
