import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/insights', label: 'Insights' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="GoEd AI" style={{ height: '32px', width: 'auto' }} />
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/demo" className="btn btn-navy btn-sm">
            Live Demo
          </Link>
        </div>

        <button
          className={`navbar__mobile-btn ${mobileOpen ? 'navbar__mobile-btn--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
