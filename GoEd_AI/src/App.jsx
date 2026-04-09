import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Results from './pages/Results';
import LiveDemos from './pages/LiveDemos';
import ForYourRole from './pages/ForYourRole';
import Insights from './pages/Insights';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import BlogPost from './pages/BlogPost';
import LiveDemo from './pages/LiveDemo';
import MockUniversity from './pages/MockUniversity';
import RegisterWebinar from './pages/RegisterWebinar';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/results" element={<Results />} />
          <Route path="/live-demos" element={<LiveDemos />} />
          <Route path="/for-your-role" element={<ForYourRole />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/demo" element={<LiveDemo />} />
          <Route path="/demo/university" element={<MockUniversity />} />
          <Route path="/register-webinar" element={<RegisterWebinar />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
