import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const pretTypes = [
  { to: '/prets/personnel', label: 'Personnel' },
  { to: '/prets/urgence', label: 'Urgence' },
  { to: '/prets/etudiant', label: 'Étudiant' },
  { to: '/prets/professionnel', label: 'Professionnel' },
  { to: '/prets/travaux', label: 'Travaux' },
  { to: '/prets/consolidation', label: 'Consolidation' },
  { to: '/prets/ptz', label: 'PTZ 0%' },
  { to: '/prets/p2p', label: 'P2P' },
]

const links = [
  { to: '/emprunter', label: 'Emprunter' },
  { to: '/preter', label: 'Prêter' },
  { to: '/profils-acceptes', label: 'Prêts', dropdown: pretTypes },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const ddRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdownOpen(false) }, [pathname])

  useEffect(() => {
    const handleClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (to) => pathname === to || (to === '/profils-acceptes' && pathname.startsWith('/prets/'))

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/prestiter-logo-blue.svg" alt="Prestiter" style={{ height: 32 }} />
            <span style={{ fontWeight: 800, fontSize: 18, marginLeft: 10, letterSpacing: '-.03em', color: 'var(--text)' }}>PRESTITER</span>
          </Link>

          <ul className="nav d-lg-flex align-items-center">
            {links.map(l => l.dropdown ? (
              <li key={l.to} className="nav-dropdown" ref={ddRef}>
                <button
                  className={`nav-link${isActive(l.to) ? ' active' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: 3, transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="nav-dropdown-menu" onMouseLeave={() => setDropdownOpen(false)}>
                    {pretTypes.map(p => (
                      <Link key={p.to} to={p.to} className="nav-dropdown-link" style={{ color: pathname === p.to ? 'var(--blue)' : 'var(--text-2)' }}>
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={l.to}>
                <Link to={l.to} className={`nav-link${pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/emprunter" className="btn btn-primary btn-sm">Faire ma demande</Link>
            </li>
          </ul>

          <button className="navbar-toggler" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/assets/images/prestiter-logo-blue.svg" alt="Prestiter" style={{ height: 28 }} />
              <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>PRESTITER</span>
            </Link>
            <button className="navbar-toggler" onClick={() => setOpen(false)} aria-label="Fermer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul className="nav">
            {links.filter(l => !l.dropdown).map(l => (
              <li key={l.to}>
                <Link to={l.to} className={`nav-link${pathname === l.to ? ' active' : ''}`} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/profils-acceptes" className={`nav-link${pathname === '/profils-acceptes' || pathname.startsWith('/prets/') ? ' active' : ''}`} onClick={() => setOpen(false)}>
                Tous les prêts
              </Link>
              <div className="mobile-submenu">
                {pretTypes.map(p => (
                  <Link key={p.to} to={p.to} className={`nav-link-small${pathname === p.to ? ' active' : ''}`} onClick={() => setOpen(false)}>{p.label}</Link>
                ))}
              </div>
            </li>
            <li style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)', width: '100%' }}>
              <Link to="/emprunter" className="btn btn-primary w-100" style={{ justifyContent: 'center' }} onClick={() => setOpen(false)}>Faire ma demande</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
