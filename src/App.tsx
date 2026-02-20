import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

import Hero from './components/Hero';
import Features from './components/Features';
import GlobalStats from './components/GlobalStats';
import CtaSection from './components/CtaSection';
import DeveloperSection from './components/DeveloperSection';
import NewsSection from './components/NewsSection';

// Product Pages
import WebProtection from './pages/WebProtection';
import CloudSecurity from './pages/CloudSecurity';
import EmailSecurity from './pages/EmailSecurity';
import IdentityAccess from './pages/IdentityAccess';
import GdprCompliance from './pages/GdprCompliance';

const Home = () => (
  <>
    <Hero />
    <Features />
    <GlobalStats />
    <CtaSection />
    <DeveloperSection />
    <NewsSection />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plataforma/web" element={<WebProtection />} />
          <Route path="/plataforma/cloud" element={<CloudSecurity />} />
          <Route path="/plataforma/email" element={<EmailSecurity />} />
          <Route path="/plataforma/identidad" element={<IdentityAccess />} />
          <Route path="/plataforma/gdpr" element={<GdprCompliance />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
