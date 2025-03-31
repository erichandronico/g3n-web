// src/components/Navbar.jsx
import { useState } from 'react'
import logo from '../assets/logo-g3n.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="G3N Logo" />
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#hero" className="hover:text-blue-600 transition">Inicio</a>
          <a href="#about" className="hover:text-blue-600 transition">Nosotros</a>
          <a href="#services" className="hover:text-blue-600 transition">Servicios</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contacto</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#hero" className="block hover:text-blue-600">Inicio</a>
          <a href="#about" className="block hover:text-blue-600">Nosotros</a>
          <a href="#services" className="block hover:text-blue-600">Servicios</a>
          <a href="#contact" className="block hover:text-blue-600">Contacto</a>
        </div>
      )}
    </header>
  )
}

export default Navbar