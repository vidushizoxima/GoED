import React from 'react';
import { Link } from 'react-router-dom';

const stages = [
  { n: 1, name: 'Generate', color: '#F59E0B', desc: 'AI outbound calls + WhatsApp broadcast to purchased lists', detail: 'GoEd AI\'s calling agent proactively dials leads within minutes of enquiry. WhatsApp broadcast campaigns activate 1,000 leads from CollegeDekho, Shiksha, or any CSV. Two-channel outbound engine: message first, call to follow up.' },
  { n: 2, name: 'Capture', color: '#3b82f6', desc: 'Every enquiry across all channels in under 5 minutes', detail: 'Facebook DMs, Instagram lead forms, WhatsApp messages, website chat, aggregator uploads — every enquiry is captured, profiled (source, language, interest, student/parent), and pushed to CRM immediately.' },
  { n: 3, name: 'Engage', color: '#0D9488', desc: 'AI conversations on WhatsApp, chat, voice — 24×7', detail: 'GoEd AI continues the conversation — answers questions, sends brochures, qualifies eligibility, handles objections. Works at 11 PM just as well as 11 AM. Student vs parent detected from language tone.' },
  { n: 4, name: 'Qualify', color: '#8b5cf6', desc: 'Lead gate + AI scoring surfaces only warm leads', detail: 'Every lead scored continuously based on response pattern, sentiment, engagement depth, course interest match, and eligibility signals. Only qualified leads surface to counsellor dashboard.' },
  { n: 5, name: 'Convert', color: '#ef4444', desc: 'Counsellor gets AI summary, opener, best time to call', detail: 'AI nudge panel on every CRM lead card: fee concerns, courses browsed, recommended opening line. Documents collected by AI in parallel. 35–45% improvement in contact rate.' },
  { n: 6, name: 'Enrol', color: '#22c55e', desc: 'Fee automation, ERP profile, university portal — done', detail: 'Fee payment triggers auto-sync between CRM, Zoho and ERP. Digital receipts via WhatsApp + email. Registrar auto-creates ERP profile. University portal submissions automated.' },
  { n: 7, name: 'Retain', color: '#0F2044', desc: 'Post-enrolment comms, fee reminders, orientation', detail: 'GoEd AI manages all post-enrollment communications — fee reminders, orientation schedules, document deadlines. Instalment tracking with individual reminder schedules.' },
];

export default function HowItWorks() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0', background: 'var(--navy)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--amber)' }}>How GoEd AI works</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, marginBottom: 16 }}>Seven stages. One platform. Every role covered.</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.7)', maxWidth: 640, margin: '0 auto' }}>GoEd AI doesn't just respond to enquiries. It generates leads, engages them, qualifies them, and hands your counsellors a scored, briefed list every morning.</p>
        </div>
      </section>
      {stages.map((s, i) => (
        <section key={s.n} id={`stage-${s.n}`} style={{ padding: '80px 0', background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)', scrollMarginTop: '100px' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40, alignItems: 'start' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', border: `3px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 28, color: s.color, flexShrink: 0 }}>{s.n}</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)', marginBottom: 8 }}>{s.name}</h2>
              <p style={{ fontSize: 18, color: 'var(--teal)', fontWeight: 500, marginBottom: 16 }}>{s.desc}</p>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, maxWidth: 720 }}>{s.detail}</p>
            </div>
          </div>
        </section>
      ))}
      <section style={{ padding: '64px 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#fff', marginBottom: 16 }}>Ready to see it working?</h2>
          <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link>
        </div>
      </section>
    </div>
  );
}
