import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../components/useInView';
import ChatbotWidget from '../components/ChatbotWidget';
import './Home.css';

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, vis] = useInView();
  return (<div ref={ref} className={`fade-in ${vis ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>);
}

function MarketingPanel() {
  const ch = [{ n: '342', l: 'AI Outbound Calls', c: 'var(--teal)' }, { n: '1,024', l: 'WhatsApp Broadcast', c: 'var(--green)' }, { n: '187', l: 'Social Media DMs', c: '#8b5cf6' }, { n: '94', l: 'Website Chat', c: 'var(--navy)' }];
  return (<div className="dash-panel"><div className="dash-panel__header"><span className="dash-panel__title"><span className="dot" style={{ background: 'var(--amber)' }} />Lead Generation — Today</span><span className="dash-badge" style={{ background: 'rgba(245,158,11,.1)', color: 'var(--amber-dark)' }}>4 channels active</span></div><div className="dash-channels">{ch.map(c => (<div key={c.l} className="dash-ch"><div className="dash-ch__num">{c.n}</div><div className="dash-ch__label">{c.l}</div><div className="dash-ch__bar" style={{ background: c.c }} /></div>))}</div><div className="dash-insight"><div className="dash-insight__label">AI Monday Insight</div><div className="dash-insight__text">WhatsApp broadcast converting 3.2× higher than Facebook ads this week. Recommend shifting ₹80K from FB to WhatsApp outbound for B.Tech leads in Delhi NCR.</div></div></div>);
}

function SalesPanel() {
  return (<div className="dash-panel"><div className="dash-panel__header"><span className="dash-panel__title"><span className="dot" style={{ background: 'var(--teal)' }} />Counsellor Dashboard — Riya’s Morning</span><span className="dash-badge" style={{ background: 'rgba(16,185,129,.1)', color: 'var(--green)' }}>Live</span></div><div className="dash-leads"><div className="dash-lead dash-lead--highlight"><div className="dash-lead__av" style={{ background: 'var(--teal)' }}>PA</div><div className="dash-lead__info"><div className="dash-lead__name">Priya Agarwal</div><div className="dash-lead__detail">MBA · Fee concern raised · Best time: 11 AM</div></div><span className="dash-lead__score score--hot">HOT</span><span className="dash-lead__ch ch--wa">WhatsApp</span></div><div className="dash-lead"><div className="dash-lead__av" style={{ background: 'var(--amber-dark)' }}>RS</div><div className="dash-lead__info"><div className="dash-lead__name">Rahul Sharma</div><div className="dash-lead__detail">B.Tech CSE · AI called yesterday · Docs pending</div></div><span className="dash-lead__score score--warm">WARM</span><span className="dash-lead__ch ch--call">AI Call</span></div><div className="dash-lead"><div className="dash-lead__av" style={{ background: '#6366f1' }}>AK</div><div className="dash-lead__info"><div className="dash-lead__name">Ananya Kapoor</div><div className="dash-lead__detail">BBA · Parent enquired via Instagram at 9:47 PM</div></div><span className="dash-lead__score score--warm">WARM</span><span className="dash-lead__ch ch--ig">Instagram</span></div></div><div className="dash-nudge"><div className="dash-nudge__label">AI Nudge — Priya Agarwal</div><div className="dash-nudge__text">Priya asked about scholarships twice. Open with: “Hi Priya, I have good news about the merit scholarship for MBA.”</div></div></div>);
}

function OpsPanel() {
  return (<div className="dash-panel"><div className="dash-panel__header"><span className="dash-panel__title"><span className="dot" style={{ background: 'var(--navy)' }} />Admission Operations — Live</span><span className="dash-badge" style={{ background: 'rgba(15,32,68,.08)', color: 'var(--navy)' }}>All systems synced</span></div><div className="dash-ops-grid"><div className="dash-ops-card"><h5>Document verification</h5><div className="ops-row"><span><span className="dot dot--sm" style={{ background: 'var(--green)' }} />Verified</span><strong>147</strong></div><div className="ops-row"><span><span className="dot dot--sm" style={{ background: 'var(--amber)' }} />Pending</span><strong>23</strong></div><div className="ops-row"><span><span className="dot dot--sm" style={{ background: 'var(--red)' }} />Flagged</span><strong>4</strong></div></div><div className="dash-ops-card"><h5>Fee collection</h5><div className="ops-row"><span>Tokens received</span><strong>₹18.4L</strong></div><div className="ops-row"><span>Reminders today</span><strong>34</strong></div><div className="ops-row"><span>Zoho synced</span><strong style={{ color: 'var(--green)' }}>✓ Live</strong></div></div><div className="dash-ops-card"><h5>ERP / Registrar</h5><div className="ops-row"><span>Profiles created</span><strong>89</strong></div><div className="ops-row"><span>Uni submissions</span><strong>67</strong></div><div className="ops-row"><span>Deadlines</span><strong style={{ color: 'var(--amber-dark)' }}>3</strong></div></div><div className="dash-ops-card"><h5>Seat fill — live</h5><div className="ops-row"><span>MBA</span><strong>87%</strong></div><div className="ops-row"><span>B.Tech</span><strong>64%</strong></div><div className="ops-row"><span>BBA</span><strong style={{ color: 'var(--green)' }}>92%</strong></div></div></div><div className="dash-sync"><div className="dash-sync__icon">↔</div><div><strong>All systems connected:</strong> Meritto CRM ↔ Zoho Accounts ↔ Student ERP — bidirectional sync.</div></div></div>);
}

const getYouTubeThumbnail = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`;
  }
  return null;
};

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
    image: '/IThead.png',
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

export default function Home() {
  const [dashTab, setDashTab] = useState('marketing');
  const [activeRole, setActiveRole] = useState('director');
  const [heroBgIdx, setHeroBgIdx] = useState(0);

  const heroBgs = [
    { url: '/std.jpg', overlay: 'rgba(15, 32, 68, 0.55)' },
    { url: '/college.png', overlay: 'rgba(15, 32, 68, 0.55)' }
  ];

  React.useEffect(() => {
    const bgInterval = setInterval(() => {
      setHeroBgIdx(prev => (prev + 1) % heroBgs.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, [heroBgs.length]);


  const techStrip = ['WhatsApp Business API', 'Instagram & Facebook', 'AI Calls & Telephony', 'Integrates with Your Applications', 'Comprehensive Tracking & Admin'];
  const lifecycle = [{ n: 1, name: 'Generate', desc: 'AI outbound calls + WhatsApp broadcast' }, { n: 2, name: 'Capture', desc: 'Every channel, under 5 minutes' }, { n: 3, name: 'Engage', desc: 'AI conversations, 24×7' }, { n: 4, name: 'Qualify', desc: 'Lead gate + AI scoring' }, { n: 5, name: 'Convert', desc: 'AI summary + counsellor closes' }, { n: 6, name: 'Enroll', desc: 'Fee, ERP, university portal' }, { n: 7, name: 'Retain', desc: 'Post-enrolment comms' }];
  const allVideos = [
    { t: 'Full Product Demo — 3 min', d: 'The complete GoEd AI ecosystem walkthrough — from lead generation to enrolment.', dur: '3:00', bg: 'var(--navy)', link: import.meta.env.VITE_VIDEO_GOED_DEMO, highlight: true },
    { t: 'AI Calling Agent Demo', d: 'GoEd AI calls a lead within 47 seconds — conversation, CRM update, callback booked.', dur: '2:15', bg: 'linear-gradient(135deg,var(--teal-bg),rgba(13,148,136,.15))', link: import.meta.env.VITE_VIDEO_AI_CALLING },
    { t: 'WhatsApp Outbound in Action', d: '1,000 CollegeDekho leads uploaded, broadcast sent, all scored by noon.', dur: '1:48', bg: 'linear-gradient(135deg,#ecfdf5,rgba(5,150,105,.15))', link: import.meta.env.VITE_VIDEO_WHATSAPP },
    { t: 'Social Media — The WOW Moment', d: 'Instagram DM at 10:47 PM. AI responds in under 3 minutes. Student vs parent detected.', dur: '2:30', bg: 'linear-gradient(135deg,#fdf4ff,rgba(168,85,247,.15))', link: import.meta.env.VITE_VIDEO_SOCIAL }
  ];
  const pillars = [{ icon: 'M', cls: 'pillar-icon--marketing', title: 'Better marketing results', features: ['Outbound calling agent — generate leads proactively', 'WhatsApp broadcast — 1,000 leads activated before lunch', 'Source ROI tracking by channel', 'AI Monday Insight — weekly budget recommendation', 'Seat-aware course intelligence'] }, { icon: 'C', cls: 'pillar-icon--conversion', title: 'More conversions, every channel', features: ['Facebook + Instagram DMs in under 5 minutes — even 10 PM', 'WhatsApp AI agent — 24×7, full conversational', 'Website chat answering 11 PM queries', 'AI lead scoring — right leads, right order', '7-day nurture — no lead goes cold'] }, { icon: 'O', cls: 'pillar-icon--operations', title: 'Sales & admission operations', features: ['Counsellor AI nudges — opener, best time to call', 'Document collection + OCR verification', 'Fee automation — Zoho sync, instalments', 'Registrar automation — ERP, university portal', 'Meritto, Zoho, ERP — all connected'] }];

  return (<>
    <ChatbotWidget />
    <section className="hero-banner-wrapper">
      <div className="hero-bg-carousel">
        {heroBgs.map((bg, idx) => (
          <div key={bg.url} className={`hero-bg-slide ${idx === heroBgIdx ? 'active' : ''}`} style={{ backgroundImage: `url(${bg.url})` }} />
        ))}
        <div className="hero-bg-overlay" style={{ backgroundColor: heroBgs[heroBgIdx].overlay }} />
      </div>
      <div className="container"><div className="hero__content">
        <div className="badge hero__badge"><span className="pulse-dot" />Built for Indian Higher Education</div>
        <h1 className="hero__title">Every lead <em>found.</em><br />Every lead <em>engaged.</em><br />Every lead <em>converted.</em></h1>
        <p className="hero__sub">So your <strong>counsellors convert 3× more</strong> — and your Director sees every number, live.</p>
        <div className="hero__actions"><Link to="/demo" className="btn btn-primary">Live Demo</Link><a href="#videos" className="btn btn-secondary">Watch It Work</a></div>
        <div className="hero__proof">{[{ n: '100%', l: 'Contact rate' }, { n: '3×', l: 'Conversion lift' }, { n: 'Instant', l: 'Response time' }, { n: '3 wks', l: 'Go-live' }].map(p => (<div key={p.l} className="hero__proof-item"><div className="hero__proof-num">{p.n}</div><div className="hero__proof-label">{p.l}</div></div>))}</div>
      </div></div>
    </section>
    <section className="hero-dashboard-wrapper">
      <div className="container">
        <FadeIn className="hero__dashboard"><div className="dash-tabs">{['marketing', 'sales', 'operations'].map(tab => (<button key={tab} className={`dash-tab dash-tab--${tab} ${dashTab === tab ? 'dash-tab--active' : ''}`} onClick={() => setDashTab(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>))}</div>{dashTab === 'marketing' && <MarketingPanel />}{dashTab === 'sales' && <SalesPanel />}{dashTab === 'operations' && <OpsPanel />}</FadeIn>
      </div>
    </section>

    <section className="tech-strip"><div className="container"><div className="tech-strip__inner">{techStrip.map((item, i) => (<React.Fragment key={item}>{i > 0 && <span className="tech-strip__dot" />}<span className="tech-strip__item">{item}</span></React.Fragment>))}</div></div></section>

    <section className="impact-section"><div className="container"><div className="impact__inner">
      <FadeIn><div className="impact__label">The Result</div><h2 className="impact__title">Stop chasing leads.<br />Start scaling enrollment.</h2><p>GoEd AI recovers the "lost hours" where leads typically go cold. By providing instant engagement across every channel, you turn your budget into actual enrollments.</p><p>It’s not just about speed. It’s about 360° efficiency at every stage of the student journey.</p></FadeIn>
      <FadeIn delay={0.2}><div className="impact__stats">{[{ n: '3×', l: 'Qualified leads (same budget)' }, { n: '3×', l: 'Conversions in sales' }, { n: 'Instant', l: 'Engagement across channels' }, { n: '↑ 3×', l: 'Quality & Revenue per lead' }].map(s => (<div key={s.n} className="impact__stat"><div className="impact__stat-num">{s.n}</div><div className="impact__stat-label">{s.l}</div></div>))}</div></FadeIn>
    </div></div></section>

    <section className="section" id="lifecycle"><div className="container"><div className="section-header"><div className="section-label">How GoEd AI works</div><h2 className="section-title">One platform. Every stage. Every role.</h2><p className="section-subtitle">From generating the lead to enrolling the student — across every channel, 24×7.</p></div><FadeIn><div className="lifecycle">{lifecycle.map(s => (<Link to={`/how-it-works#stage-${s.n}`} key={s.n} className="lifecycle__stage" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}><div className={`lifecycle__num lifecycle__num--${s.n}`}>{s.n}</div><div className="lifecycle__name">{s.name}</div><div className="lifecycle__desc">{s.desc}</div></Link>))}</div></FadeIn></div></section>

    <section className="section" id="roles" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Built for your role</div>
          <h2 className="section-title">Every role gets what they need.</h2>
          <p className="section-subtitle">GoEd AI doesn't just serve admissions — it gives every stakeholder their own view, their own intelligence, their own results.</p>
        </div>

        <div className="roles-tab-bar">
          {roleKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveRole(key)}
              className="roles-tab-btn"
              style={{
                color: activeRole === key ? '#fff' : 'var(--gray-500)',
                background: activeRole === key ? 'var(--navy)' : 'transparent',
              }}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        <div className="roles-content-grid">
          <FadeIn>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)', marginBottom: 8 }}>{roles[activeRole].title}</h3>
              <p style={{ fontSize: 18, color: 'var(--teal)', fontWeight: 500, marginBottom: 16 }}>&ldquo;{roles[activeRole].tagline}&rdquo;</p>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>{roles[activeRole].desc}</p>
              <ul className="feature-list">
                {roles[activeRole].features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: 8, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <img
                key={roles[activeRole].image}
                src={roles[activeRole].image}
                alt={roles[activeRole].title}
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
                  {activeRole === 'director' && '📊'}
                  {activeRole === 'counsellor' && '📞'}
                  {activeRole === 'cfo' && '💰'}
                  {activeRole === 'it' && '⚙️'}
                </div>
                <p style={{ fontSize: 14 }}>Dashboard screenshot placeholder<br />for {roles[activeRole].title}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section videos-section" id="videos">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 40 }}>
          <div className="section-label">See it in action</div>
          <h2 className="section-title">Watch GoEd AI work.</h2>
          <p className="section-subtitle">Real demonstrations — not concept slides.</p>
        </div>
      </div>

      <div className="video-scroller-container">
        <div className="video-scroller">
          {allVideos.map((v, i) => (
            <div key={v.t} className={`video-card ${v.highlight ? 'video-card--highlight' : ''}`} onClick={() => window.open(v.link, '_blank')}>
              <div className="video-card__thumb" style={{ backgroundColor: v.bg, backgroundImage: `url(${getYouTubeThumbnail(v.link)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="video-card__play">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                </div>
              </div>
              <div className="video-card__body">
                <h4>{v.t}</h4>
                <p>{v.d}</p>
                <span className="video-card__dur">{v.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="section-header"><div className="section-label">What changes</div><h2 className="section-title">Marketing. Sales. Operations.<br />All connected.</h2></div><div className="pillars-grid">{pillars.map((p, i) => (<FadeIn key={p.title} delay={i * 0.1}><div className="pillar"><div className={`pillar__icon ${p.cls}`}>{p.icon}</div><h3>{p.title}</h3><ul className="feature-list">{p.features.map(f => (<li key={f}>{f}</li>))}</ul></div></FadeIn>))}</div></div></section>

    <section className="section proof-section"><div className="container"><div className="proof__inner"><FadeIn><div><span className="badge badge-navy">Proven at IMT Nagpur</span><h2 className="proof__title">Proven Results at IMT</h2><p>At IMT Nagpur, GoEd AI replaced manual follow-up and disconnected systems. The platform went full scale live in just 3 weeks.</p><blockquote className="proof__quote">“We went from chasing leads to having AI-qualified, scored leads on every counsellor’s screen every morning.”</blockquote></div></FadeIn><FadeIn delay={0.2}><div className="proof__stats">{[{ n: '100%', l: 'Contact rate', c: 'var(--teal)' }, { n: '3×', l: 'Conversion improvement', c: 'var(--amber-dark)' }, { n: 'Instant', l: 'Response time', c: '#8b5cf6' }, { n: '3 weeks', l: 'Live in record time', c: 'var(--navy)' }].map(s => (<div key={s.n} className="proof__stat-card"><div className="proof__stat-num" style={{ color: s.c }}>{s.n}</div><div className="proof__stat-desc">{s.l}</div></div>))}</div></FadeIn></div></div></section>

    <section className="event-banner">
      <div className="container">
        <div className="event-banner__inner">
          <div className="event-content">
            <div className="badge badge-amber">Upcoming Webinar</div>
            <h3>AI Powered Admissions — Reimagining the GenZ Era with Agentic AI</h3>
            <p className="event-desc">Join industry veterans and technology leaders as they discuss the transformation of higher education admissions through Agentic AI.</p>

            <div className="speaker-highlight">
              <div className="speaker-card chief">
                <div className="speaker-avatar">DR</div>
                <div className="speaker-info">
                  <strong>Dr. Rajneesh Chauhan</strong>
                  <span>Director, IMT Nagpur</span>
                </div>
              </div>
              <div className="speaker-others">
                <div className="speaker-card">
                  <span>Mr. Vikas Aggarwal</span>
                  <small>Industry Veteran</small>
                </div>
                <div className="speaker-card">
                  <span>Mr. Jagpreet Singh</span>
                  <small>Zoxima Solutions</small>
                </div>
                <div className="speaker-card">
                  <span>Mr. Rajeev Sood</span>
                  <small>Zoxima Solutions</small>
                </div>
              </div>
            </div>

            <div className="event-banner__meta">
              <strong>Thursday, 23rd April 2026</strong>
              <span>3:00 PM – 4:00 PM IST</span>
              <span>Online</span>
            </div>
          </div>
          <Link to="/register-webinar" className="btn btn-primary">Register Now</Link>
        </div>
      </div>
    </section>

    <section className="agent-cta">
      <div className="container">
        <h2 className="text-display">Talk to GoEd AI. Right now.</h2>
        <p className="agent-cta__sub">This is the same AI your students will experience.</p>
        <div className="agent-modes">
          <a href="/demo/university" className="agent-mode" style={{ textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h4>Chat now</h4>
            <p>Experience the Web Agent</p>
          </a>
          <a href="tel:+919810634630" className="agent-mode" style={{ textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--amber-dark)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.5 19.5 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <h4>Get a call</h4>
            <p>Direct call to our admissions team</p>
          </a>
          <a href={`https://wa.me/91${import.meta.env.VITE_WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer" className="agent-mode">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.86.85.85-2.86-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            <h4>WhatsApp</h4>
            <p>Continue on your phone</p>
          </a>
        </div>
        <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link>
      </div>
    </section>

  </>);
}
