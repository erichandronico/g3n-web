// src/components/Contact.jsx
const Contact = () => {
    return (
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hablemos 🚀
          </h2>
          <p className="text-gray-700 mb-10">
            ¿Tienes una idea? ¿Un desafío técnico? Escríbenos y conversemos cómo podemos ayudarte desde G3N.
          </p>
  
          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-800">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-800">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact