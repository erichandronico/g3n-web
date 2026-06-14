import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/easyflow/WhatIs'
import FlowGuides from './components/easyflow/FlowGuides'
import TaglineStrip from './components/easyflow/TaglineStrip'
import Modules from './components/easyflow/Modules'
import Flexibility from './components/easyflow/Flexibility'
import Platform from './components/easyflow/Platform'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
  const demoMessage = encodeURIComponent(
    'Hola G3N 👋, quiero una demo de Easy Flow para mi empresa.',
  )
  const demoUrl = `https://wa.me/${whatsappNumber}?text=${demoMessage}`

  return (
    <div className="bg-ink font-sans text-text antialiased">
      <Navbar demoUrl={demoUrl} />
      <Hero demoUrl={demoUrl} />
      <WhatIs />
      <FlowGuides />
      <TaglineStrip />
      <Modules />
      <Flexibility />
      <Platform />
      <About />
      <CTA demoUrl={demoUrl} />
      <Footer demoUrl={demoUrl} />
    </div>
  )
}

export default App
