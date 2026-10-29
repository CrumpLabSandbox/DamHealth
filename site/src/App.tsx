import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Explore = lazy(() => import('./pages/Explore'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const DamPage = lazy(() => import('./pages/DamPage'))
const StatePage = lazy(() => import('./pages/StatePage'))
const StatesIndex = lazy(() => import('./pages/StatesIndex'))
const Issues = lazy(() => import('./pages/Issues'))
const NationalPlan = lazy(() => import('./pages/NationalPlan'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Methodology = lazy(() => import('./pages/Methodology'))
const Community = lazy(() => import('./pages/Community'))
const Engineering = lazy(() => import('./pages/Engineering'))
const Act = lazy(() => import('./pages/Act'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollAndFocus() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
    const main = document.getElementById('main')
    main?.focus({ preventScroll: true })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollAndFocus />
      <Suspense fallback={<div className="wrap section" aria-busy="true"><p className="muted">Loading…</p></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dam/:id" element={<DamPage />} />
          <Route path="/states" element={<StatesIndex />} />
          <Route path="/state/:st" element={<StatePage />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/plan" element={<NationalPlan />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/community" element={<Community />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/act" element={<Act />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
