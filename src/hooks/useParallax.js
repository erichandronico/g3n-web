// src/hooks/useParallax.js
import { useEffect, useState } from 'react'

const useParallax = (speed = 0.3) => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offsetY
}

export default useParallax