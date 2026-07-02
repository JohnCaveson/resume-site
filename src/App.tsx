import './styles.css'
import { useFlags } from 'launchdarkly-react-client-sdk'
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

function FeatureFlagDemo() {
  const { myFirstFlag } = useFlags()

  if (!myFirstFlag) return null

  return (
    <div style={{
      padding: '12px 20px',
      backgroundColor: '#405BFF',
      color: 'white',
      textAlign: 'center',
      fontWeight: 500,
    }}>
      LaunchDarkly is working — this banner is controlled by a feature flag
    </div>
  )
}

export default function App() {
  return (
    <>
    <FeatureFlagDemo />
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
