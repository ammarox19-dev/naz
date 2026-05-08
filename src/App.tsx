import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CustomCursor } from '@/components/CustomCursor'
import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { ProjectDetails } from '@/pages/ProjectDetails'
import { ProjectPreview } from '@/pages/ProjectPreview'
import { Projects } from '@/pages/Projects'
import { applyTheme, getInitialTheme } from '@/lib/theme'

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    applyTheme(getInitialTheme())

    if (location.pathname === '/') {
      document.title = 'NAZ — اصنع إرثك البصري'
    }

    if (location.hash) {
      window.setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-preview" element={<ProjectPreview />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
