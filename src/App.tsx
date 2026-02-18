import Layout from './layouts/Layout';

import Hero from './components/Hero';
import Features from './components/Features';
import GlobalStats from './components/GlobalStats';
import CtaSection from './components/CtaSection';
import DeveloperSection from './components/DeveloperSection';
import NewsSection from './components/NewsSection';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <GlobalStats />
      <CtaSection />
      <DeveloperSection />
      <NewsSection />
    </Layout>
  )
}

export default App
