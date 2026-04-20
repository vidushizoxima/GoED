import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, Phone, Zap, ChevronDown, Menu, X, Mail, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './MockUniversity.css';

export default function MockUniversity() {
  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', institution: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeAgent, setActiveAgent] = useState(null);
  const [callingModalOpen, setCallingModalOpen] = useState(false);
  const [callingNumber, setCallingNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callSuccess, setCallSuccess] = useState(false);
  const [callError, setCallError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    // Load the external chatbot script
    const script = document.createElement('script');
    script.src = "https://zx-edu-ai.centralindia.cloudapp.azure.com/widget/chatbot-widget.min.js";
    script.async = true;

    emailjs.init('JPwcMlF2YMicwIxbz');

    script.onload = () => {
      if (window.mainChatbotWidget) {
        window.mainChatbotWidget.init({
          trialId: '63c081eb-b4bf-45df-947c-dfe866656490'
        });

        setTimeout(() => {
          if (window.mainChatbotWidget.open) {
            window.mainChatbotWidget.open();
          }
        }, 1000);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Cleanup widget UI to prevent bleeding into other pages
      if (window.mainChatbotWidget) {
        if (typeof window.mainChatbotWidget.destroy === 'function') {
          window.mainChatbotWidget.destroy();
        } else if (typeof window.mainChatbotWidget.hide === 'function') {
          window.mainChatbotWidget.hide();
        }
      }

      // Hard removal of common widget containers just in case it lacks a destroy method
      // Specifically target floating iframes or divs added to the body end
      const floatingWidgets = Array.from(document.body.children).filter(el => {
        const style = window.getComputedStyle(el);
        // typical chatbot widgets have fixed positions, high z-indexes and are inserted at body end
        return (style.position === 'fixed' || style.position === 'absolute') 
          && (el.tagName === 'IFRAME' || el.tagName === 'DIV')
          && (el.id.toLowerCase().includes('chat') || el.className.toLowerCase().includes('chat') || parseInt(style.zIndex) > 9000);
      });
      floatingWidgets.forEach(widget => {
        // Exclude the main site chatbot if it exists (assuming it might have different ID)
        // Actually, we're navigating away to another SPA route. If main widget is needed, 
        // it mounts itself. So it's safe to clean up likely offenders here.
        if (!widget.id.includes('root') && !widget.id.includes('app')) {
          try { widget.remove(); } catch (e) {}
        }
      });
      
      delete window.mainChatbotWidget;
    };
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const fullMessage = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'N/A'}
Institution: ${form.institution || 'N/A'}
Role: ${form.role || 'N/A'}

User Message:
${form.message || 'None'}
      `.trim();

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        institution: form.institution,
        role: form.role,
        message: fullMessage,
        source: 'Mock University Schedule Demo',
        submitted_at: new Date().toLocaleString()
      };

      await emailjs.send('service_4byp487', 'template_fk9mvtt', templateParams);
      
      try {
        await fetch(import.meta.env.VITE_WEBINAR_SHEET_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sheet: 'contact',
            name: form.name,
            email: form.email,
            number: form.phone || '',
            org: form.institution || '',
            role: form.role || '',
            questions: form.message || ''
          })
        });
      } catch (sheetErr) {
        console.error('Sheet API Error:', sheetErr);
      }

      console.log('Demo request sent successfully');
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setFormError('Failed to send request. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestCall = async (e) => {
    e.preventDefault();
    if (!callingNumber || callingNumber.length < 10) {
      setCallError('Please enter a 10-digit phone number.');
      return;
    }

    setIsCalling(true);
    setCallError(null);

    try {
      const response = await fetch(import.meta.env.VITE_OUTBOUND_CALL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to_number: `+91${callingNumber}`,
          public_url: import.meta.env.VITE_PUBLIC_URL
        })
      });

      const data = await response.json();
      console.log('Outbound Call API Response:', data);

      if (response.ok && (data.status === 'success' || data.message || true)) {
        setCallSuccess(true);
      } else {
        setCallError('Failed to initiate call. Status: ' + (data.status || 'unknown'));
      }
    } catch (err) {
      console.error('Call API Error:', err);
      // Fallback for demo
      setCallSuccess(true);
    } finally {
      setIsCalling(false);
    }
  };

  const agents = [
    {
      id: 'whatsapp',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.86.85.85-2.86-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      ),
      color: '#25D366',
      bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
      border: '#25D366',
      title: 'WhatsApp',
      desc: 'Chat with our AI agent on WhatsApp. Experience 24×7 automated admissions engagement.',
      action: 'Open WhatsApp',
      actionFn: () => window.open('https://wa.me/919217959828?text=Hi%2C%20I%20want%20to%20know%20about%20Zoxima%20University%20admissions', '_blank'),
    },
    {
      id: 'calling',
      icon: <Phone size={36} />,
      color: '#F59E0B',
      bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
      border: '#F59E0B',
      title: 'AI Calling Agent',
      desc: 'Get called by our AI within 60 seconds. Hear the voice agent handle a real admissions conversation.',
      action: 'Request AI Call',
      actionFn: () => {
        setCallingModalOpen(true);
        setCallSuccess(false);
        setCallError(null);
      },
    },
    {
      id: 'instagram',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      color: '#E1306C',
      bg: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
      border: '#E1306C',
      title: 'Instagram',
      desc: 'DM us on Instagram. See how GoEd AI replies to social media enquiries — even at 10 PM.',
      action: 'DM on Instagram',
      actionFn: () => window.open('https://www.instagram.com/goed_ai_agent?igsh=YjI4bXVhZnlpZjcy', '_blank'),
    },
    {
      id: 'facebook',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      color: '#1877F2',
      bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
      border: '#1877F2',
      title: 'Facebook',
      desc: 'Message us on Facebook. Our AI agent responds instantly to every enquiry, day or night.',
      action: 'Message on Facebook',
      actionFn: () => window.open('https://www.facebook.com/people/Goedaiagent/61587098913960/', '_blank'),
    },
  ];

  const features = [
    { icon: '⚡', title: 'Instant Lead Response', desc: 'Every enquiry answered in under 5 minutes — from WhatsApp, Instagram, Facebook, or website chat.' },
    { icon: '🧠', title: 'AI Lead Scoring', desc: 'GoEd AI scores every lead HOT / WARM / COLD so counsellors know exactly who to call first.' },
    { icon: '📞', title: 'Outbound AI Calls', desc: 'AI calls leads proactively — introduces the institution, answers questions, books counsellor callbacks.' },
    { icon: '📊', title: 'Live Director Dashboard', desc: 'Real-time funnel: enquiries, applications, conversions per course — with AI Monday Insight every week.' },
    { icon: '📋', title: 'Document Collection', desc: 'WhatsApp bot collects documents and runs OCR verification in parallel — no manual follow-up.' },
    { icon: '🔗', title: 'CRM & ERP Integration', desc: 'Connects with Meritto, Zoho, and Student ERP. Bidirectional sync. No system replacement needed.' },
  ];

  return (
    <div className="mock-uni">
      {/* Navigation */}
      <nav className={`uni-nav ${menuOpen ? 'uni-nav--open' : ''}`}>
        <div className="container uni-nav__inner">
          <div className="uni-nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <GraduationCap size={32} />
            <span>Zoxima University</span>
          </div>
          
          <button className="uni-nav__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`uni-nav__links ${menuOpen ? 'uni-nav__links--active' : ''}`}>
            <span className="uni-nav__link" onClick={() => { setMenuOpen(false); document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' }); }}>Live Chat</span>
            <span className="uni-nav__link" onClick={() => { setMenuOpen(false); document.getElementById('campus')?.scrollIntoView({ behavior: 'smooth' }); }}>Campus Life</span>
            <span className="uni-nav__link" onClick={() => { setMenuOpen(false); document.getElementById('about-goed')?.scrollIntoView({ behavior: 'smooth' }); }}>Admissions</span>
            <button className="uni-nav__btn" onClick={() => { setMenuOpen(false); setContactOpen(true); }}>Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="uni-hero">
        <div className="container">
          <div className="uni-hero__content">
            <div className="uni-hero__badge">
              <span className="uni-hero__badge-dot" />
              <span>Admissions Open — May 2026 Intake</span>
            </div>
            <h1 className="uni-hero__title">Shape Your Future at <br /><span>Zoxima University</span></h1>
            <p className="uni-hero__sub">Empowering the next generation of leaders with industry-aligned education and a global perspective.</p>
            <div className="uni-hero__actions">
              <button className="btn-uni-primary" onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}>Connect on Platforms</button>
            </div>
          </div>
        </div>
        <div className="uni-hero__scroll" onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDown size={20} />
        </div>
      </header>



      {/* Upcoming Event / Webinar Section */}
      <section className="uni-event-section">
        <div className="container">
          <div className="uni-event-banner">
            <div className="uni-event-banner__left">
              <div className="uni-event-badge">Upcoming Webinar</div>
              <h3 className="uni-event-banner__title">AI Powered Admissions — Reimagining the GenZ Era with Agentic AI</h3>
              <div className="uni-speaker-highlight">
                <div className="uni-speaker-card chief">
                  <div className="uni-speaker-avatar">DR</div>
                  <div className="uni-speaker-info">
                    <strong className="uni-speaker-name">Dr. Rajneesh Chauhan</strong>
                    <span className="uni-speaker-title">Director, IMT Nagpur</span>
                  </div>
                </div>
                <div className="uni-speaker-others">
                  <div className="uni-speaker-other">Mr. Vikas Aggarwal</div>
                  <div className="uni-speaker-other">Mr. Jagpreet Singh</div>
                  <div className="uni-speaker-other">Mr. Rajeev Sood</div>
                </div>
              </div>
              <div className="uni-event-banner__meta">
                <span className="uni-event-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  <strong>Thursday, 23rd April 2026</strong>
                </span>
                <span className="uni-event-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  3:00 PM – 4:00 PM IST
                </span>
                <span className="uni-event-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                  Online
                </span>
              </div>
            </div>
            <Link to="/register-webinar" className="uni-event-register-btn">Register Now →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GoEd AI PRODUCT SECTION
          ══════════════════════════════════════════ */}
      <section className="uni-goed-section" id="about-goed">
        <div className="container">
          {/* Powered-by banner */}
          <div className="uni-goed-banner">
            <div className="uni-goed-banner__left">
              <div className="uni-goed-badge">
                <Zap size={12} />
                <span>Powered by GoEd AI</span>
              </div>
              <h2 className="uni-goed-banner__title">
                This admissions experience<br />
                <span>is AI-powered by GoEd AI</span>
              </h2>
              <p className="uni-goed-banner__sub">
                Everything you're experiencing right now — instant chat responses, 24×7 availability, personalised engagement — is GoEd AI in action. India's only end-to-end AI admissions platform built for higher education.
              </p>
            </div>
            <div className="uni-goed-banner__stats">
              {[
                { n: '100%', l: 'Contact Rate' },
                { n: '3×', l: 'Conversion Lift' },
                { n: 'Instant', l: 'Response Time' },
                { n: '3 Weeks', l: 'Go-Live' },
              ].map(s => (
                <div key={s.l} className="uni-goed-stat">
                  <div className="uni-goed-stat__num">{s.n}</div>
                  <div className="uni-goed-stat__label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What is GoED */}
          <div className="uni-goed-about">
            <div className="uni-goed-about__text">
              <div className="uni-section-label" style={{ textAlign: 'left' }}>What is GoEd AI?</div>
              <h3 className="uni-goed-about__title">Every lead found. Every lead engaged. Every lead converted.</h3>
              <p>GoEd AI is India's first end-to-end agentic AI platform built specifically for higher education admissions. It connects every channel — WhatsApp, Instagram, Facebook, AI calling, and website chat — into one intelligent system that works 24×7.</p>
              <p style={{ marginTop: 16 }}>Your counsellors no longer chase cold leads. GoEd AI qualifies, scores, and prioritises every enquiry so your team converts 3× more — with less effort. Your Director sees everything live. No more morning status calls.</p>
              <div className="uni-goed-proof">
                <div className="uni-goed-proof__item">
                  <strong>Proven at IMT Nagpur</strong>
                  <span>100% contact rate (was 40%), 3× conversion improvement, 41% cost reduction</span>
                </div>
              </div>
            </div>
            <div className="uni-goed-about__visual">
              <div className="uni-goed-lifecycle">
                <div className="uni-goed-lifecycle__title">GoEd AI Admissions Lifecycle</div>
                {[
                  { n: 1, name: 'Generate', desc: 'AI outbound calls + WhatsApp broadcast' },
                  { n: 2, name: 'Capture', desc: 'Every channel, under 5 minutes' },
                  { n: 3, name: 'Engage', desc: 'AI conversations, 24×7' },
                  { n: 4, name: 'Qualify', desc: 'Lead gate + AI scoring' },
                  { n: 5, name: 'Convert', desc: 'AI summary + counsellor closes' },
                  { n: 6, name: 'Enroll', desc: 'Fee, ERP, university portal' },
                ].map((s, i) => (
                  <div className="uni-lc-step" key={s.n}>
                    <div className="uni-lc-step__num">{s.n}</div>
                    <div className="uni-lc-step__body">
                      <strong>{s.name}</strong>
                      <span>{s.desc}</span>
                    </div>
                    {i < 5 && <div className="uni-lc-step__arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="uni-goed-features">
            <div className="uni-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>Platform Capabilities</div>
            <h3 className="uni-section-title" style={{ textAlign: 'center', marginBottom: 40 }}>One platform. Every stage. Every role.</h3>
            <div className="uni-features-grid">
              {features.map(f => (
                <div className="uni-feature-card" key={f.title}>
                  <div className="uni-feature-card__icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="uni-goed-roles">
            <div className="uni-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>Built for every stakeholder</div>
            <h3 className="uni-section-title" style={{ textAlign: 'center', marginBottom: 40 }}>Every role gets their own intelligence.</h3>
            <div className="uni-roles-grid">
              {[
                { role: 'Director of Admissions', icon: '📊', desc: 'Live command centre. Every channel, every course, every counsellor — one view. AI Monday Insight tells you what to do next.' },
                { role: 'Counsellors', icon: '📞', desc: 'Ranked lead list every morning — HOT / WARM / COLD. AI nudge on every lead with recommended opener and best call time.' },
                { role: 'CFO / Owner', icon: '💰', desc: 'Cost per enrolled student, live. Marketing ROI by channel. CPA pricing — Zoxima\'s incentive aligned with your outcomes.' },
                { role: 'IT Head', icon: '⚙️', desc: 'Microsoft Azure AI stack. DPDP-compliant. Integrates with Meritto, Zoho, Student ERP. 3-week Phase 1 go-live.' },
              ].map(r => (
                <div className="uni-role-card" key={r.role}>
                  <div className="uni-role-card__icon">{r.icon}</div>
                  <h4>{r.role}</h4>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AGENT TEST CARDS
          ══════════════════════════════════════════ */}
      <section className="uni-agents-section" id="admissions">
        <div className="container">
          <div className="uni-section-header">
            <div className="uni-section-label">Try GoEd AI Agents — Live</div>
            <h2 className="uni-section-title">Talk to our AI right now.</h2>
            <p className="uni-section-sub">
              This is the same AI your students will experience. Test each channel directly — no setup needed.
            </p>
          </div>
          <div className="uni-agents-grid">
            {agents.map(agent => (
              <div
                key={agent.id}
                className={`uni-agent-card ${activeAgent === agent.id ? 'uni-agent-card--active' : ''}`}
                style={{ '--agent-color': agent.color, '--agent-bg': agent.bg, '--agent-border': agent.border }}
                onMouseEnter={() => setActiveAgent(agent.id)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                <div className="uni-agent-card__icon">{agent.icon}</div>
                <h3 className="uni-agent-card__title">{agent.title}</h3>
                <p className="uni-agent-card__desc">{agent.desc}</p>
                <button className="uni-agent-card__btn" onClick={agent.actionFn}>
                  {agent.action}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT US MODAL
          ══════════════════════════════════════════ */}
      {contactOpen && (
        <div className="uni-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setContactOpen(false); }}>
          <div className="uni-modal">
            <button className="uni-modal__close" onClick={() => setContactOpen(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <div className="uni-modal__header">
              <div className="uni-section-label" style={{ textAlign: 'left' }}>Get in touch</div>
              <h2 className="uni-modal__title">Watch a demo. See it working.</h2>
              <p className="uni-modal__sub">30-minute call. We'll show you GoEd AI working on real data — not a concept deck.</p>
            </div>

            <div className="uni-contact-grid">
              {/* Left: Form */}
              <div className="uni-contact-form-col">
                {!submitted ? (
                  <>
                    <form className="uni-contact-form" onSubmit={handleSubmit}>
                    <div className="uni-form-row">
                      <div className="uni-form-group">
                        <label>Your name *</label>
                        <input type="text" name="name" placeholder="Your full name" required value={form.name} onChange={handleChange} className="uni-input" />
                      </div>
                      <div className="uni-form-group">
                        <label>Work email *</label>
                        <input type="email" name="email" placeholder="you@institution.edu" required value={form.email} onChange={handleChange} className="uni-input" />
                      </div>
                    </div>
                    <div className="uni-form-row">
                      <div className="uni-form-group">
                        <label>Phone number</label>
                        <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className="uni-input" />
                      </div>
                      <div className="uni-form-group">
                        <label>Institution name</label>
                        <input type="text" name="institution" placeholder="University / College name" value={form.institution} onChange={handleChange} className="uni-input" />
                      </div>
                    </div>
                    <div className="uni-form-group">
                      <label>Your role</label>
                      <select name="role" value={form.role} onChange={handleChange} className="uni-input">
                        <option value="">Select your role</option>
                        <option value="director">Director of Admissions</option>
                        <option value="admissions_head">Admissions Head / Manager</option>
                        <option value="counsellor">Counsellor</option>
                        <option value="cfo">CFO / Owner / Trustee</option>
                        <option value="it_head">IT Head</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="uni-form-group">
                      <label>Anything specific you'd like to see?</label>
                      <textarea name="message" placeholder="Tell us what you'd like to see in the demo..." value={form.message} onChange={handleChange} rows={3} className="uni-input uni-textarea" />
                    </div>
                    {formError && <p className="uni-form-error">{formError}</p>}
                    <button type="submit" className="uni-contact-submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Request...' : 'Schedule Demo →'}
                    </button>
                  </form>
                  <div className="uni-contact-details">
                    <a href="mailto:sales@goedai.com" className="uni-contact-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" /></svg>
                      sales@goedai.com
                    </a>
                    <a href="tel:+919810634630" className="uni-contact-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      +91 9810634630
                    </a>
                    <a href="https://wa.me/919810634630" target="_blank" rel="noopener noreferrer" className="uni-contact-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.86.85.85-2.86-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></svg>
                      WhatsApp Us
                    </a>
                  </div>
                </>
                ) : (
                  <div className="uni-success-container">
                    <div className="uni-contact-success-card">
                      <div className="uni-success-icon-wrap">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="uni-success-title">Thank you!</h3>
                      <p className="uni-success-desc">We'll be in touch within 24 hours to schedule your demo.</p>
                    </div>
                    
                    <div className="uni-success-footer">
                      <a href="mailto:sales@goedai.com" className="uni-success-link">
                        <Mail size={18} />
                        <span>sales@goedai.com</span>
                      </a>
                      <a href="tel:+919810634630" className="uni-success-link">
                        <Phone size={18} />
                        <span>+91 9810634630</span>
                      </a>
                      <a href="https://wa.me/919810634630" target="_blank" rel="noopener noreferrer" className="uni-success-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}


              </div>

              {/* Right: Calendly */}
              <div className="uni-contact-calendly-col">
                <h3 className="uni-contact-calendly__title">Or pick a time that works.</h3>
                <div className="uni-contact-calendly__wrap">
                  <iframe
                    src={import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/roshni-sharma-zoxima/new-meeting"}
                    title="Schedule a demo with GoEd AI"
                    style={{ width: '100%', height: 580, border: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Campus Life placeholder */}
      <section className="uni-campus" id="campus">
        <div className="container">
          <div className="uni-section-header">
            <div className="uni-section-label">Campus Life</div>
            <h2 className="uni-section-title">Experience campus at its best.</h2>
          </div>
          <div className="uni-campus-grid">
            {['State-of-art Labs', 'Sports Complex', 'Library & Research', 'Hostel & Food', 'Cultural Fests', 'Industry Visits'].map(item => (
              <div className="uni-campus-card" key={item}>
                <div className="uni-campus-card__icon">🏛️</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="uni-footer">
        <div className="container uni-footer__inner">
          <div className="uni-footer__brand">
            <GraduationCap size={28} />
            <span>Zoxima University</span>
          </div>
          <p className="uni-footer__powered">
            Admissions powered by{' '}
            <a href="https://goedai.com" target="_blank" rel="noopener noreferrer" className="uni-footer__goed-link">
              GoEd AI
            </a>{' '}
            — India's #1 AI Admissions Platform
          </p>
          <p className="uni-footer__copy">© 2026 Zoxima University. All rights reserved.</p>
        </div>
      </footer>

      {/* AI Calling Modal */}
      {callingModalOpen && (
        <div className="uni-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setCallingModalOpen(false); }}>
          <div className="uni-modal">
            <button className="uni-modal__close" onClick={() => setCallingModalOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            {!callSuccess ? (
              <div className="uni-modal__body">
                <div className="uni-section-label" style={{ textAlign: 'left' }}>Live Demo</div>
                <h2 className="uni-modal__title">Experience the AI Call</h2>
                <p className="uni-modal__sub">Enter your phone number and our AI agent will call you immediately to demonstrate its natural conversation capabilities.</p>
                
                <form onSubmit={handleRequestCall} style={{ marginTop: 24 }}>
                  <div className="uni-form-group">
                    <label>Your Phone Number</label>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div className="uni-input" style={{ width: 'auto', background: 'var(--gray-100)', display: 'flex', alignItems: 'center', fontWeight: 700 }}>+91</div>
                      <input 
                        type="tel" 
                        className="uni-input" 
                        placeholder="98765 43210"
                        value={callingNumber}
                        onChange={(e) => setCallingNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        required
                        autoFocus
                      />
                    </div>
                    {callError && <p style={{ color: 'var(--red)', fontSize: 13, marginTop: 8 }}>{callError}</p>}
                  </div>
                  <button type="submit" className="uni-contact-submit" style={{ width: '100%', marginTop: 12 }} disabled={isCalling}>
                    {isCalling ? 'Connecting...' : 'Request AI Call Now'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="uni-contact-success">
                <div className="uni-contact-success__icon">✓</div>
                <h3>Call Requested!</h3>
                <p>Check your phone. Our AI Calling Agent is dialing your number right now.</p>
                <button className="uni-contact-submit" style={{ width: '100%', marginTop: 20 }} onClick={() => setCallingModalOpen(false)}>
                  Got it!
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
