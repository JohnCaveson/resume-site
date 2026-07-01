import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Strengths from './components/Strengths'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import VimPlayground from './components/VimPlayground'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <VimPlayground />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
