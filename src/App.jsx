import { useActiveSection } from './hooks/useActiveSection'
import Blobs from './components/Blobs'
import Drawer from './components/Drawer'
import SkillsDrawer from './components/SkillsDrawer'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import './App.css'

export default function App() {
  const activeSectionId = useActiveSection()

  return (
    <>
      <Blobs />
      <Drawer activeId={activeSectionId} />
      <SkillsDrawer isVisible={activeSectionId !== 'hero'} />
      <main className="main">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Hobbies />
      </main>
    </>
  )
}
