import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const roles = {
  director: {
    title: 'Director of Admissions',
    tagline: 'See everything. Miss nothing.',
    image: '/directorofadmissions.png',
    desc: 'Your live command centre. Every channel, every course, every counsellor — one view. No more chasing your team for daily updates. GoEd AI\'s dashboard shows what\'s happening right now, and the AI Monday Insight tells you what to do next.',
    features: [
      'Live funnel — enquiries to applications to admissions, per course',
      'Source ROI by channel — which channels convert, not just generate',
      'Counsellor performance with early warning flags',
      '48-hour uncontacted hot lead alerts — automatic',
      'Ask GoEd AI any question: “Which course is underperforming this week?”',
      'AI Monday Insight — budget reallocation recommendation every Monday',
      'WhatsApp access to dashboard via AI agent',
    ],
  },
  counsellor: {
    title: 'Counsellor',
    tagline: 'Work only the leads that are ready to close.',
    image: '/counsellor.png',
    desc: 'No more cold calling. No more guessing who to call first. Every morning, GoEd AI gives you a ranked, scored list of leads — with AI summaries, recommended openers, and the best time to call each one. Documents are being collected in parallel. You just close.',
    features: [
      'Ranked lead list every morning — HOT / WARM / COLD — no manual sorting',
      'AI nudge on every lead: fee concerns raised, courses browsed, recommended opener',
      '35–45% improvement in contact rate with AI opener guidance',
      'Document collection happening via WhatsApp bot — in parallel with your calls',
      '48-hour alert if a hot lead hasn\'t been contacted',
      '2–3× more closures per counsellor per week',
      'Full conversation context when lead is escalated to you',
    ],
  },
  cfo: {
    title: 'CFO / Owner',
    tagline: 'Know your cost per enrolled student — live.',
    image: '/Cfo.png',
    desc: 'GoEd AI\'s CPA model means you pay based on results, not promises. See exactly what each enrolled student costs, which channels deliver ROI, and whether the platform is paying for itself — from Day 30.',
    features: [
      'Cost per enrolled student — live, per course, per cycle',
      'Marketing ROI visible per channel — stop guessing, start optimising',
      'CPA pricing model — Zoxima\'s incentive aligned with your enrollment outcomes',
      'Fee payment automation — Zoho sync, digital receipts, instalment tracking',
      'Fee defaulter report auto-generated weekly',
      '658+ additional leads per month from referral channels at zero incremental spend',
      'Platform ROI visible from Day 30',
    ],
  },
  it: {
    title: 'IT Head',
    tagline: 'Connects to what you have. No overhaul needed.',
    image: '/it-role.png',
    desc: 'GoEd AI is built on Microsoft Azure AI — enterprise-grade security, DPDP-compliant, with full audit trail. It integrates with your existing Meritto, Zoho, and Student ERP without replacing anything. Phase 1 goes live in 3 weeks.',
    features: [
      'Microsoft Azure AI stack — enterprise-grade reliability and scalability',
      'DPDP-compliant — full conversation logs, document repository, data export',
      'Meritto integration — AI scoring and nudges pushed directly to CRM lead cards',
      'Zoho bidirectional sync — fee data flows both ways automatically',
      'Student ERP integration — auto-profile creation on fee payment',
      'WhatsApp Business API, Facebook, Instagram — all connected',
      '3-week Phase 1 go-live — counsellors on AI-enriched CRM from week one',
    ],
  },
};

const roleKeys = ['director', 'counsellor', 'cfo', 'it'];
const tabLabels = { director: 'Director', counsellor: 'Counsellor', cfo: 'CFO / Owner', it: 'IT Head' };

export default function ForYourRole() {
  const [active, setActive] = useState('director');
  const role = roles[active];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">Built for your role</div>
            <h1 className="section-title">Every role gets what they need.</h1>
            <p className="section-subtitle">GoEd AI doesn't just serve admissions — it gives every stakeholder their own view, their own intelligence, their own results.</p>
          </div>

          <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 48, background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 12, padding: 4, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            {roleKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  flex: 1, padding: '12px 16px', textAlign: 'center', cursor: 'pointer',
                  fontSize: 14, fontWeight: 600,
                  color: active === key ? '#fff' : 'var(--gray-500)',
                  borderRadius: 8, border: 'none',
                  background: active === key ? 'var(--navy)' : 'transparent',
                  fontFamily: 'var(--font-body)', transition: 'all .2s',
                }}
              >
                {tabLabels[key]}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)', marginBottom: 8 }}>{role.title}</h2>
              <p style={{ fontSize: 18, color: 'var(--teal)', fontWeight: 500, marginBottom: 16 }}>&ldquo;{role.tagline}&rdquo;</p>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>{role.desc}</p>
              <ul className="feature-list">
                {role.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: role.image ? 8 : 32, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <img
                key={role.image}
                src={role.image}
                alt={role.title}
                style={{ width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-box').style.display = 'block';
                }}
                onLoad={(e) => {
                  e.target.style.display = 'block';
                  e.target.parentElement.querySelector('.placeholder-box').style.display = 'none';
                }}
              />
              <div className="placeholder-box" style={{ textAlign: 'center', color: 'var(--gray-400)', padding: 32 }}>
                <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.3 }}>
                  {active === 'director' && '📊'}
                  {active === 'counsellor' && '📞'}
                  {active === 'cfo' && '💰'}
                  {active === 'it' && '⚙️'}
                </div>
                <p style={{ fontSize: 14 }}>Dashboard screenshot placeholder<br />for {role.title}</p>
                <p style={{ fontSize: 12, marginTop: 12, fontWeight: 500, color: 'var(--navy)' }}>
                  Upload <code style={{ background: '#f1f5f9', padding: '2px 4px', borderRadius: 4 }}>{role.image.replace('/', '')}</code> to the public folder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .placeholder-box { display: none; }
      `}</style>

      <section style={{ padding: '64px 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#fff', marginBottom: 16 }}>See GoEd AI working for your role.</h2>
          <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link>
        </div>
      </section>
    </div>
  );
}
