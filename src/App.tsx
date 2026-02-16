import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

// import Company from './pages/Company'; // Replaced by new pages
import { About, Vision, History, Certifications, GlobalNetwork } from './pages/company/index';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import News from './pages/News';
import Contact from './pages/Contact';
import Location from './pages/Location';

// Investors Pages
import Investors from './pages/investors/Investors';
import Disclosure from './pages/investors/Disclosure';
import Financial from './pages/investors/Financial';
import IR from './pages/investors/IR';

// Technology Pages
import { Technology } from './pages/technology';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Temporary placeholder for new pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container-custom text-center">
    <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
    <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
      Content preparing...
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          
          {/* Company Routes */}
          <Route path="company" element={<About />} />
          <Route path="company/about" element={<About />} />
          <Route path="company/vision" element={<Vision />} />
          <Route path="company/history" element={<History />} />
          <Route path="company/certifications" element={<Certifications />} />
          <Route path="company/global" element={<GlobalNetwork />} />

          {/* Product Routes */}
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/category" element={<Products />} />
          <Route path="products/search" element={<PlaceholderPage title="Product Search" />} />
          <Route path="products/featured" element={<PlaceholderPage title="Featured Products" />} />

          {/* Technology Routes */}
          <Route path="technology" element={<Technology />} />
          <Route path="technology/core" element={<Technology />} />
          <Route path="technology/rnd" element={<Technology />} />
          <Route path="technology/applications" element={<Technology />} />

          {/* Investors Routes */}
          <Route path="investors" element={<Investors />} />
          <Route path="investors/info" element={<Investors />} />
          <Route path="investors/disclosure" element={<Disclosure />} />
          <Route path="investors/financial" element={<Financial />} />
          <Route path="investors/ir-materials" element={<IR />} />

          {/* News Routes */}
          <Route path="news" element={<News />} />
          <Route path="news/press" element={<News />} />
          <Route path="news/notice" element={<News />} />
          <Route path="news/achievements" element={<PlaceholderPage title="Achievements" />} />

          {/* Contact Routes */}
          <Route path="contact" element={<Contact />} />
          <Route path="contact/inquiry" element={<Contact />} />
          <Route path="contact/location" element={<Location />} />
          <Route path="contact/global" element={<GlobalNetwork />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-bold text-slate-400">404: Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
