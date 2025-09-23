import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'MediWork',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            publisher: { '@type': 'Organization', name: 'LoHiDi Group' },
          })}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </>
  );
}


export default App