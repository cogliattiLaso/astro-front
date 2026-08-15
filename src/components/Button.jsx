export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  )
}
