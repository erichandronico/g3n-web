// src/components/Footer.jsx
const Footer = () => {
    const year = new Date().getFullYear()
  
    return (
      <footer className="bg-gray-100 py-6 mt-10 text-center text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2">
            © {year} G3N Desarrollo e Innovación. Todos los derechos reservados.
          </p>
          <p>
            Sitio desarrollado con ❤️ por el equipo de G3N.
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer