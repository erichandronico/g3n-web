import { useState } from 'react'
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
import ContactModal from './components/ContactModal'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <div className="bg-paper-2 font-sans text-text antialiased">
      <Navbar onContact={openContact} />
      <Hero onContact={openContact} />
      <WhatIs />
      <FlowGuides />
      <TaglineStrip />
      <Modules />
      <Flexibility />
      <Platform />
      <About />
      <CTA onContact={openContact} />
      <Footer onContact={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  )
}

export default App
