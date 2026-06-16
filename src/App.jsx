import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Emprunter from './pages/Emprunter'
import Preter from './pages/Preter'
import CommentCaMarche from './pages/CommentCaMarche'
import ProfilsAcceptes from './pages/ProfilsAcceptes'
import FAQPage from './pages/FAQPage'
import Blog from './pages/Blog'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import Confirmation from './pages/Confirmation'
import MentionsLegales from './pages/MentionsLegales'
import CGU from './pages/CGU'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import NotFound from './pages/NotFound'
import Personnel from './pages/prets/Personnel'
import Urgence from './pages/prets/Urgence'
import Etudiant from './pages/prets/Etudiant'
import Professionnel from './pages/prets/Professionnel'
import Travaux from './pages/prets/Travaux'
import Consolidation from './pages/prets/Consolidation'
import PTZ from './pages/prets/PTZ'
import P2P from './pages/prets/P2P'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emprunter" element={<Emprunter />} />
          <Route path="/preter" element={<Preter />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="/profils-acceptes" element={<ProfilsAcceptes />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/prets/personnel" element={<Personnel />} />
          <Route path="/prets/urgence" element={<Urgence />} />
          <Route path="/prets/etudiant" element={<Etudiant />} />
          <Route path="/prets/professionnel" element={<Professionnel />} />
          <Route path="/prets/travaux" element={<Travaux />} />
          <Route path="/prets/consolidation" element={<Consolidation />} />
          <Route path="/prets/ptz" element={<PTZ />} />
          <Route path="/prets/p2p" element={<P2P />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
