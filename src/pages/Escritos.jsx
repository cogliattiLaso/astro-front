import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

const writings = [
  {
    date: '28 Jul 2026',
    title: 'Prohibido pasar',
    excerpt: `Decidiste no hacer caso a los carteles y pese al ‘’prohibido pasar’’
              entraste igual, proclamaste tuyo este incendio que soy,
              avivaste la llama, te abrigaste en su fervor y lo creíste controlado
              y en efecto se te fue de las manos
              y no hay extintor que sepas usar para apaciguar las llamas
              Me imploraste y decidí mostrarte mis fuegos y ahi estas cobarde
              Suplicando lluvia al cielo
              pero este incendio mi amor, ya no cesa, no quiere ser ceniza.
              Y te envuelve la dualidad:
              como dejar arder lo que te quema vivo? Como apagar lo que te abriga?
              Y te transformas en neblina que no se disipa ni se condensa,
              no te quedas, tampoco te vas
              Quien no hizo caso a mis carteles fuiste vos pero enseguesida en tu osadia fui yo quien no leyo el tuyo ‘’prohibido dejarlo pasar’’
            `,
  },
  {
    date: '18 Dic 2025',
    title: 'Mujer que escribe',
    excerpt: `Cuidado con vincularte con una mujer que escribe…
              Una mujer que escribe no se distrae de sí misma. Y cuando se pierde, sabe qué ruta tomar para volver a casa.
              Pone palabras donde antes había silencio. No para encontrar respuestas, sino para abrir espacio a las dudas, a las distintas perspectivas y a las infinitas posibilidades.
              Una mujer que escribe se anima a mirar su sombra y hacerse cargo de ella. Un día cualquiera puede venir a decirte: “Ya entendí lo que me pasa”, y contarte algo de ese infinito mundo interno que habita.
              Aprendió a despedirse de lo que fue, a ritualizar sus muertes y a bautizar sus nacimientos.
              No escribe para algo. Escribe por algo: por el recuerdo de su sagrado ser.
              Porque cada vez que se sienta frente a un cuaderno, recuerda quién es. Y, inevitablemente, también te lo va a recordar a ti.
              Una mujer que escribe sabe ver. Sabe que cada vivencia en presencia puede convertirse en materia prima para su inspiración.
              Y es la escritura la que la mantiene abierta de par en par, mirando el mundo con ojos sensibles.`,
  },
  {
    date: '25 Ago 2025',
    title: 'Que es lo que hace que sepas cuando irte o quedarte? Amarte',
    excerpt: `Quizás estás dudando si quedarte o irte de un vínculo que no termina de ser recíproco. Algo te duele, te hace dudar, incluso puede hacerte preguntarte quién sos dentro de esa relación.
              Y quizás la pregunta no sea solamente qué hacer con el otro.
              Quizás sea:
              ¿Qué decisión honra más a mi corazón?              ¿Qué haría el amor en este momento?              ¿Qué me está queriendo mostrar mi amor propio?
              Porque a veces necesitamos dejar de preguntarnos qué siente el otro y empezar a preguntarnos qué nos pasa a nosotrxs cuando estamos ahí.
              ¿Hay espacio para seguir creciendo y expandiéndome en este vínculo?              ¿O ya es momento de cerrar un ciclo y caminar hacia algo más libre?
              Las relaciones sin amor propio y sin límites se llenan de ruido: proyecciones, enojos, expectativas, dudas, deudas emocionales.
              Por eso necesitamos construir raíces dentro nuestro. Una individualidad amorosa que nos permita encontrarnos con otrx sin dejar de encontrarnos con nosotrxs.
              Y, en el fondo, la respuesta suele volver siempre al mismo lugar:
              ¿Qué haría si realmente me amara?              ¿Cómo puedo honrar el amor que soy?              ¿Dónde está el amor en esta situación?
              A veces las respuestas ya están ahí.
              Lo difícil no es encontrarlas.               Lo difícil es escucharlas.
              Porque el corazón, cuando dejamos de taparlo con miedo, suele hablar bastante claro.
              Preguntarte, prestarte atención, escucharte… también es una forma de darte amor.
              Después viene lo más incómodo: actuar en consecuencia.
              Hacerle lugar a tu verdad.               Confiar en lo que sentís.              Y animarte a elegir una vida que esté más alineada con vos.
              De dejar ir lo que ya no tiene lugar para que pueda entrar lo que sí.
              No todo lo que termina es una pérdida.
              A veces es simplemente espacio.
              Espacio para volver a vos. ✨🔮🏹
              Lo que ya no tiene lugar en tu vida, se va.              Y quizás eso también sea amor.`,
  },
]

export default function Escritos() {
  const [openIndex, setOpenIndex] = useState(writings.length - 1)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="page">
      <SectionTitle title="Acá escribo" />
      <div className="writings__list">
        {writings.map((writing, index) => (
          <Card
            key={writing.title}
            className={`writing-card ${openIndex === index ? 'writing-card--open' : ''}`}
            onClick={() => handleClick(index)}
          >
            <p className="writing-card__date">{writing.date}</p>
            <h2 className="writing-card__title">{writing.title}</h2>
            <p className="writing-card__excerpt">{writing.excerpt}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
