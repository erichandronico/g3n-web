import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IconStrip from './components/IconStrip'
import MeetEasyFlow from './components/MeetEasyFlow'
import FeatureCards from './components/FeatureCards'
import BlueBand from './components/BlueBand'
import Modules from './components/easyflow/Modules'
import PlatformFeatures from './components/PlatformFeatures'
import StatsBand from './components/StatsBand'
import AboutDetail from './components/AboutDetail'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <div className="bg-white font-sans text-text antialiased">
      <Navbar onContact={openContact} />
      <Hero onContact={openContact} />
      <IconStrip />
      <MeetEasyFlow onContact={openContact} />
      <FeatureCards />
      <BlueBand />
      <Modules />
      <PlatformFeatures />
      <StatsBand onContact={openContact} />
      <AboutDetail />
      <CTABand onContact={openContact} />
      <Footer onContact={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  )
}

export default App
