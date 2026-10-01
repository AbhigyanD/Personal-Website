import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
