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
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/goed-ai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-icon footer__social-icon--li">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/919810634630" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-icon footer__social-icon--wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+919810634630" aria-label="Call us" className="footer__social-icon footer__social-icon--phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.01 21 3 13.99 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Product</h4>
            {/* <Link to="/demo">Live Demo</Link> */}
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>

            <Link to="/features">Features</Link>
            <Link to="/insights">Blog</Link>
            <Link to="/about">About Zoxima</Link>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:sales@goedai.com">sales@goedai.com</a>
            <a href="tel:+919810634630">+91 9810634630</a>
            <Link to="/contact">Schedule Demo</Link>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Zoxima Solutions. All rights reserved.</span>
          <Link to="/privacy-policy" style={{ color: 'inherit', opacity: 0.7, fontSize: '0.85rem', textDecoration: 'none', marginLeft: '16px' }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
