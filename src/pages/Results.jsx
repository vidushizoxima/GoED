import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { num: '100%', label: 'Contact rate (was 40%)', color: 'var(--teal)' },
  { num: '3×', label: 'Conversion improvement', color: 'var(--amber-dark)' },
  { num: '41%', label: 'Cost per student reduced', color: 'var(--red)' },
  { num: '6 wks', label: 'From kickoff to live', color: 'var(--navy)' },
];

export default function Results() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-navy" style={{ marginBottom: 16 }}>Case Study</span>
            <h1 className="section-title">IMT — Institute of Management Technology</h1>
            <p className="section-subtitle">How GoEd AI transformed admissions from reactive manual follow-up to an AI-first engine with 100% contact rate.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 64 }}>
            {stats.map(s => (
              <div key={s.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, color: s.color, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontSize: 14, color: 'var(--gray-500)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 16 }}>The challenge</h2>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>IMT had 10 counsellors on Meritto CRM, Zoho for accounts, a separate Student ERP, and Nia — a basic chatbot that could only capture name and number. Systems were disintegrated with no bidirectional data flow. Leads from 10 PM went unanswered. The registrar worked in complete isolation.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 16 }}>What GoEd AI did</h2>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 12 }}>Phase 1 (3 weeks): Replaced Nia entirely. Connected social media AI (Facebook + Instagram DMs), WhatsApp agent, website chat. Integrated with Meritto for AI lead scoring and counsellor nudges. Knowledge base indexed in 2 minutes.</p>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>Phase 2 (4 weeks): Added Zoho bidirectional sync, document collection and OCR verification, fee automation, registrar ERP profile creation, university portal automation, and advanced analytics dashboards.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 16 }}>The result</h2>
            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)', lineHeight: 1.5, borderLeft: '3px solid var(--amber)', paddingLeft: 20, margin: '24px 0' }}>
              &ldquo;We went from chasing leads to having AI-qualified, scored leads on every counsellor&rsquo;s screen every morning.&rdquo;
            </blockquote>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 12 }}>Contact rate jumped from 40% to 100%. Conversions improved 3×. Cost per enrolled student dropped 41%. The social media chat response was described as a &ldquo;wow moment&rdquo; by the Director — specifically Facebook and Instagram DM response speed.</p>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7 }}>GoEd AI didn&rsquo;t replace the counsellors. It made them 3× more effective — and gave the Director complete visibility for the first time in the institution&rsquo;s history.</p>
          </div>
        </div>
      </section>
      <section style={{ padding: '64px 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#fff', marginBottom: 16 }}>Want results like these?</h2>
          <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link>
        </div>
      </section>
    </div>
  );
}
