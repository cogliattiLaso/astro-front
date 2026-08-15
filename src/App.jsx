import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Escritos from './pages/Escritos'
import Videos from './pages/Videos'
import Sesiones from './pages/Sesiones'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escritos" element={<Escritos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/sesiones" element={<Sesiones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
