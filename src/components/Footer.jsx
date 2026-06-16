import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="navbar-brand" style={{ marginBottom: 12 }}>
            <img src="/assets/images/prestiter-logo-blue.svg" alt="Prestiter" style={{ height: 28 }} />
          </Link>
          <p style={{ maxWidth: 300 }}>Prestiter SPA est une plateforme de micro-prêt entre particuliers, simple, rapide et 100% en ligne.</p>
          <p className="small" style={{ marginTop: 12 }}>ORIAS : en cours d'enregistrement</p>
        </div>

        <div>
          <h3>Emprunter</h3>
          <ul>
            <li><Link to="/comment-ca-marche">Comment ça marche</Link></li>
            <li><Link to="/emprunter">Simulateur de prêt</Link></li>
            <li><Link to="/profils-acceptes">Profils acceptés</Link></li>
            <li><Link to="/faq">FAQ emprunteur</Link></li>
          </ul>
        </div>

        <div>
          <h3>Prêter</h3>
          <ul>
            <li><Link to="/preter">Devenir prêteur</Link></li>
            <li><Link to="/preter#fonctionnement">Fonctionnement</Link></li>
            <li><Link to="/faq">FAQ prêteur</Link></li>
          </ul>
        </div>

        <div>
          <h3>Légal</h3>
          <ul>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/cgu">CGU</Link></li>
            <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">
        <p className="small" style={{ margin: 0 }}>© {new Date().getFullYear()} Prestiter SPA. Tous droits réservés.</p>
        <div className="footer-security">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>SSL sécurisé</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Données chiffrées</span>
        </div>
      </div>
    </footer>
  )
}
