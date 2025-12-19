import { useEffect, useState } from 'react'
import './App.css'
import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { socials } from './data/content'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className='relative min-h-screen bg-bg-dark text-slate-50'>
        <div className="background-grid" />
        <Loader />
      </div>
    )
  }

  return (
    <div className='relative min-h-screen bg-bg-dark text-slate-50 slide-in-fwd-center'>
      <div className="background-grid" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact socials={socials} />
      <Footer />
    </div>
  )
}

export default App
