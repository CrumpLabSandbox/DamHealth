import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { applyTheme, getTheme, useLens } from '../lib/lens'
import SearchBox from './SearchBox'

const NAV = [
  ['/dashboard', 'Dashboard'],
  ['/explore', 'Explore'],
  ['/states', 'States'],
  ['/issues', 'Issues'],
  ['/plan', 'The Plan'],
  ['/case-studies', 'Case Studies'],
  ['/community', 'Community'],
  ['/engineering', 'Engineering'],
] as const

function Logo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M4 26h24v2H4z" fill="currentColor" opacity=".35" />
      <path d="M8 26 L14 8 h5 l5 18z" fill="currentColor" />
      <path d="M3 20c3-2 5 2 8 0s5 2 8 0 5 2 8 0" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const { lens, setLens } = useLens()
  const [theme, setTheme] = useState(getTheme())
  useEffect(() => applyTheme(theme), [theme])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="brand" aria-label="DamHealth home"><Logo />DamHealth</Link>
          <nav className="nav" aria-label="Primary">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
          </nav>
          <div className="header-tools">
            <div style={{ minWidth: 220, flex: 1 }}><SearchBox compact /></div>
            <div className="lens-switch" role="group" aria-label="Choose how information is presented">
              <button type="button" aria-pressed={lens === 'community'} onClick={() => setLens('community')}>Community</button>
              <button type="button" aria-pressed={lens === 'engineering'} onClick={() => setLens('engineering')}>Engineering</button>
            </div>
            <button
              type="button"
              className="icon-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </header>
      <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="wrap grid grid-3">
          <div>
            <strong>DamHealth</strong>
            <p>An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources.</p>
          </div>
          <div>
            <ul className="footer-links"><li><Link to="/methodology">Methodology &amp; limitations</Link></li><li><Link to="/dashboard">National dashboard</Link></li><li><Link to="/act">Take action</Link></li><li><a href="https://nid.sec.usace.army.mil/" rel="noopener">Official National Inventory of Dams</a></li></ul>
          </div>
          <div>
            <p>The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
