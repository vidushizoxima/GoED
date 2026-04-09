import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/image.png" alt="GoEd AI" style={{ height: '32px', width: 'auto' }} />
            </Link>
            <p>
              The AI-first admissions engine built for Indian higher education.
              A product of Zoxima Solutions — enterprise AI and Microsoft Azure
              consulting with 7.5-year average client tenure.
            </p>
          </div>

          <div className="footer__col">
            <h4>Product</h4>
            <Link to="/demo">Live Demo</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>
            <Link to="/live-demos">Watch Demos</Link>
            <Link to="/insights">Events & Webinars</Link>
            <Link to="/insights">Blog</Link>
            <Link to="/about">About Zoxima</Link>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:sales@goedai.com">sales@goedai.com</a>
            <a href="tel:+919810634630">+91 9810634630</a>
            <Link to="/contact">Schedule Demo</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Zoxima Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
