import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const updates = [
  { title: 'Outbound Calling Agent — Now Live', date: 'April 2026', desc: 'GoEd AI now includes an outbound AI calling agent that proactively calls leads without any counsellor involvement. Calls leads within minutes, conducts natural voice conversations, updates CRM automatically.' },
  { title: 'WhatsApp Outbound Broadcast', date: 'April 2026', desc: 'AI-initiated WhatsApp messages to purchased or aggregator lead lists. Broadcast campaigns with personalised first messages. 1,000 leads activated in under 60 seconds.' },
  { title: 'Seat-Aware Course Routing', date: 'March 2026', desc: 'GoEd AI now tracks seat fill per program in real time. When a program hits 90%+ capacity, outbound outreach pauses and waitlist sequence activates. No other platform does this.' },
  { title: 'OCR Document Verification', date: 'February 2026', desc: 'AI-powered document verification extracts key fields — name, date, marks, institution — and flags mismatches before counsellor review. 60–70% reduction in verification time.' },
];

// Static updates...

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
