import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  // index.html sets data-theme before first paint; start from whatever it chose
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Only persist an explicit choice, so visitors who never toggle keep following their OS
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch { /* storage blocked */ }
  }

  return (
    <MotionConfig reducedMotion="user">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </MotionConfig>
  )
}
