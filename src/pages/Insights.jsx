import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const events = [
  {
    title: 'AI Powered Admissions — Reimagining the GenZ Era with Agentic AI',
    date: 'Thursday, 23rd April 2026',
    time: '3:00 PM – 4:00 PM IST',
    speakers: 'Dr. Rajneesh Chauhan (Director, IMT Nagpur), Mr. Vikas Aggarwal (Industry Veteran & Former CEO, IMT Distance Education), Mr. Jagpreet Singh (Director Technology, Zoxima Solutions), Mr. Rajeev Sood (Executive Director, Zoxima Solutions)',
    topics: [
      'Changing student expectations in the GenZ era and beyond',
      'The role of Agentic AI in transforming admissions and education',
      'Real-world deployment insights',
      'A roadmap for building a smarter, self-sufficient admissions office',
    ],
    status: 'upcoming',
  },
];

const updates = [
  { title: 'Outbound Calling Agent — Now Live', date: 'April 2026', desc: 'GoEd AI now includes an outbound AI calling agent that proactively calls leads without any counsellor involvement. Calls leads within minutes, conducts natural voice conversations, updates CRM automatically.' },
  { title: 'WhatsApp Outbound Broadcast', date: 'April 2026', desc: 'AI-initiated WhatsApp messages to purchased or aggregator lead lists. Broadcast campaigns with personalised first messages. 1,000 leads activated in under 60 seconds.' },
  { title: 'Seat-Aware Course Routing', date: 'March 2026', desc: 'GoEd AI now tracks seat fill per program in real time. When a program hits 90%+ capacity, outbound outreach pauses and waitlist sequence activates. No other platform does this.' },
  { title: 'OCR Document Verification', date: 'February 2026', desc: 'AI-powered document verification extracts key fields — name, date, marks, institution — and flags mismatches before counsellor review. 60–70% reduction in verification time.' },
];

// Static events and updates...

export default function Insights() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">Insights</div>
            <h1 className="section-title">Events, updates, and ideas.</h1>
            <p className="section-subtitle">Stay current on what GoEd AI is building and what the smartest admissions teams are doing differently.</p>
          </div>

          {/* Events */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 24 }}>Upcoming events</h2>
          {events.map(e => (
            <div key={e.title} style={{ background: 'var(--navy)', borderRadius: 16, padding: 40, color: '#fff', marginBottom: 48 }}>
              <div className="badge badge-amber" style={{ marginBottom: 16 }}>Upcoming Webinar</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 16, lineHeight: 1.3 }}>{e.title}</h3>
              <div className="speaker-highlight" style={{ display: 'flex', gap: '32px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div className="speaker-card chief" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="speaker-avatar" style={{ width: '40px', height: '40px', background: 'var(--amber)', color: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '14px' }}>DR</div>
                  <div className="speaker-info">
                    <strong style={{ display: 'block', fontSize: '15px', color: '#fff' }}>Dr. Rajneesh Chauhan</strong>
                    <span style={{ fontSize: '11px', color: 'var(--amber)', fontWeight: '700', textTransform: 'uppercase' }}>Director, IMT Nagpur</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>Mr. Vikas Aggarwal <small style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Industry Veteran</small></div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>Mr. Jagpreet Singh <small style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Zoxima Solutions</small></div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>Mr. Rajeev Sood <small style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Zoxima Solutions</small></div>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Thought leaders discuss</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {e.topics.map(t => (
                    <li key={t} style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', paddingLeft: 20, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>&bull;</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', gap: 24, fontSize: 14, color: 'rgba(255,255,255,.5)', marginBottom: 20, flexWrap: 'wrap' }}>
                <strong style={{ color: '#fff' }}>{e.date}</strong>
                <span>{e.time}</span>
                <span>Online</span>
              </div>
              <Link to="/register-webinar" className="btn btn-primary">Register Now</Link>
            </div>
          ))}

          {/* Innovation updates */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 24 }}>Innovation updates</h2>
          <div className="insights-updates-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 64 }}>
            {updates.map(u => (
              <div key={u.title} className="card">
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)', marginBottom: 8 }}>{u.date}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{u.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            ))}
          </div>

          {/* Blog */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 24 }}>Deep reads</h2>
          <div className="insights-blogs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {blogData.map(b => (
              <Link to={`/insights/${b.slug}`} key={b.title} className="card" style={{ cursor: 'pointer', display: 'block', textDecoration: 'none' }}>
                <div style={{ background: 'var(--off-white)', borderRadius: 8, height: 140, marginBottom: 16, overflow: 'hidden' }}>
                  <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{b.tag}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 8, lineHeight: 1.4 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.5 }}>{b.desc}</p>
                <div style={{ marginTop: 16, color: 'var(--teal)', fontWeight: 700, fontSize: 14 }}>Read Article &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
