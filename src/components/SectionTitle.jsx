export default function SectionTitle({ eyebrow, title, title2, subtitle, large = false }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h1
        className={`section-title__h1 ${
          large ? 'section-title__h1--large' : ''
        }`}
      >
        {title}
        {title2 && (
          <>
            <br />
            {title2}
          </>
        )}
      </h1>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}
