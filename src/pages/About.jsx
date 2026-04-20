import React from 'react';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Jagpreet Singh', role: 'Founder / CEO', desc: 'Director Technology, Zoxima Solutions (GoEdAI). Available for senior Director-level conversations where credibility anchor is needed.' },
  { name: 'Rajeev Sood', role: 'Executive Director', desc: 'Enterprise sales and pricing decisions. Drives commercial strategy and institution partnerships.' },
  { name: 'Varun Khatter', role: 'Education Sales', desc: 'Owns outreach and new institution relationships. First point of contact for admissions teams.' },
];

const stats = [
  { num: '7.5 yrs', label: 'Average client engagement tenure', color: 'var(--navy)' },
  { num: 'Azure AI', label: 'Microsoft stack native', color: 'var(--teal)' },
  { num: 'DPDP', label: 'Fully compliant', color: 'var(--amber-dark)' },
  { num: 'India + US', label: 'Operations across two countries', color: 'var(--navy)' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-label">About</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--navy)', marginBottom: 24, lineHeight: 1.2 }}>Zoxima Solutions</h1>
          <p style={{ fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 16 }}>
            Zoxima Solutions is an enterprise AI and Microsoft Azure stack consulting company with operations in India and the United States. We build AI systems that solve real operational problems for enterprises — not concept demos, not proofs of concept, but production platforms that run live, every day.
          </p>
          <p style={{ fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 40 }}>
            GoEd AI is our flagship product — an AI-first admissions engagement platform built exclusively for higher education institutions in India. It was born from the realisation that Indian colleges spend lakhs on leads but convert only 8–12% of them, not because of bad counsellors, but because of disconnected systems, manual follow-up, and zero visibility.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, margin: '48px 0 64px' }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: 'var(--off-white)', borderRadius: 12, padding: 28, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: s.color, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why GoEd AI */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 16 }}>Why we built GoEd AI</h2>
          <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 16 }}>
            Every institution we worked with had the same problem: leads came in from 5+ sources, counsellors were stretched across Excel trackers and disconnected CRMs, social media enquiries at 10 PM went unanswered, and the Director had no live visibility into what was actually happening in the funnel.
          </p>
          <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 40 }}>
            GoEd AI was designed to fix this end to end — not by replacing the CRM or the counsellors, but by adding the AI intelligence layer that connects everything, engages leads across every channel 24×7, and gives every role the specific information they need to do their job better.
          </p>

          {/* Team */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 24 }}>Leadership</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
            {team.map(t => (
              <div key={t.name} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: 28 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
                  {t.name.split(' ').map(w => w[0]).join('')}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{t.name}</h3>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)', marginBottom: 12 }}>{t.role}</div>
                <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Microsoft */}
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: 32, textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)', marginBottom: 12 }}>Built on Microsoft Azure AI</h3>
            <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
              Enterprise-grade reliability, security, and scalability. DPDP-compliant with full audit trail, conversation logs, and document repository. Not a startup experiment — a production platform built on enterprise infrastructure.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
