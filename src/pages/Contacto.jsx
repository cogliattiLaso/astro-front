import { useState } from 'react'
import { IconMail, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_ol8htjh',
        'template_s9hnfte',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'valecndf018@gmail.com',
        },
        '_tdSTmYeYuE4UbN_0'
      )
      .then(
        () => {
          alert('Mensaje enviado')
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          alert('Error al enviar el mensaje')
          console.error(error)
        }
      )
  }

  return (
    <section className="page">
      <SectionTitle
        title="Escribime, leo todo"
        subtitle="te respondo en 24 a 48hs"
      />
      <Card className="contact__form-card">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="nombre"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className="contact__input contact__input--textarea"
            name="message"
            placeholder="mensaje"
            value={form.message}
            onChange={handleChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Card>
      <div className="contact__icons">
        <a href="mailto:valecndf018@gmail.com" aria-label="email">
          <IconMail size={22} stroke={1.5} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="instagram"
        >
          <IconBrandInstagram size={22} stroke={1.5} />
        </a>
        <a
          href="https://wa.me/59892354590?text=Hola!"
          target="_blank"
          rel="noreferrer"
          aria-label="whatsapp"
        >
          <IconBrandWhatsapp size={22} stroke={1.5} />
        </a>
      </div>
    </section>
  )
}
