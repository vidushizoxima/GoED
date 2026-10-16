import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../components/useInView';
import './Features.css';

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={`feat-fade ${vis ? 'feat-fade--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function ImagePlaceholder({ label, accent }) {
  return (
    <div className={`feat-img feat-img--${accent}`}>
      <div className="feat-img__inner">
        <div className="feat-img__icon">📷</div>
        <p className="feat-img__label">{label}</p>
        <p className="feat-img__hint">Image coming soon</p>
      </div>
    </div>
  );
}

const chapters = [
  {
    num: '01',
    act: 'Generate',
    color: 'teal',
    bg: 'white',
    headline: 'AI outbound calls + WhatsApp broadcast to purchased lists',
    sub: 'GoEd AI\'s calling agent proactively dials leads within minutes of enquiry. WhatsApp broadcast campaigns activate 1,000 leads from CollegeDekho, Shiksha, or any CSV. Two-channel outbound engine: message first, call to follow up.',
    features: [],
    stat: { num: '1,000+', label: 'leads per broadcast' },
    img: '/callingdashboard.png',
    imgLabel: 'AI Outbound Calling Dashboard',
  },
  {
    num: '02',
    act: 'Capture',
    color: 'amber',
    bg: 'off-white',
    headline: 'Every enquiry across all channels in under 5 minutes',
    sub: 'Facebook DMs, Instagram lead forms, WhatsApp messages, website chat, aggregator uploads — every enquiry is captured, profiled (source, language, interest, student/parent), and pushed to CRM immediately.',
    features: [],
    stat: { num: '< 5 min', label: 'capture to CRM' },
    img: '/aipoweredleadautomation.png',
    imgLabel: 'Multi-channel Capture View',
  },
  {
    num: '03',
    act: 'Engage',
    color: 'navy',
    bg: 'white',
    headline: 'AI conversations on WhatsApp, chat, voice — 24×7',
    sub: 'GoEd AI continues the conversation — answers questions, sends brochures, qualifies eligibility, handles objections. Works at 11 PM just as well as 11 AM. Student vs parent detected from language tone.',
    features: [],
    stat: { num: '24×7', label: 'AI conversations' },
    img: '/engagedashboard.png',
    imgLabel: 'WhatsApp & Social Media Conversation Flow',
  },
  {
    num: '04',
    act: 'Qualify',
    color: 'teal',
    bg: 'off-white',
    headline: 'Lead gate + AI scoring surfaces only warm leads',
    sub: 'Every lead scored continuously based on response pattern, sentiment, engagement depth, course interest match, and eligibility signals. Only qualified leads surface to counsellor dashboard.',
    features: [],
    stat: { num: 'HOT / WARM / COLD', label: 'AI lead scoring' },
    img: '/qualifydashboard.png',
    imgLabel: 'Lead Scoring & Qualification View',
  },
  {
    num: '05',
    act: 'Convert',
    color: 'amber',
    bg: 'white',
    headline: 'Counsellor gets AI summary, opener, best time to call',
    sub: 'AI nudge panel on every CRM lead card: fee concerns, courses browsed, recommended opening line. Documents collected by AI in parallel. 35–45% improvement in contact rate.',
    features: [],
    stat: { num: '35–45%', label: 'improvement in contact rate' },
    img: '/counsellor dashboard.png',
    imgLabel: 'Counsellor AI Nudge Dashboard',
  },
  {
    num: '06',
    act: 'Admin Control',
    color: 'navy',
    bg: 'off-white',
    headline: 'Full visibility and control for every admin and director',
    sub: 'Live admission funnel across every course, channel, and counsellor — in one view. Source ROI, counsellor performance, seat fill, and AI Monday Insight all on one dashboard. Admin configures workflows, sets lead routing rules, and tracks every number without chasing anyone.',
    features: [],
    stat: { num: '100%', label: 'funnel visibility — no blind spots' },
    img: '/salesboostadmindash.png',
    imgLabel: 'Admin Control Dashboard',
  },
  {
    num: '07',
    act: 'Lead Journey',
    color: 'teal',
    bg: 'white',
    headline: 'Email and WhatsApp journeys that convert leads into admissions',
    sub: 'Every lead that does not convert immediately enters a structured journey — personalised email sequences and WhatsApp follow-ups timed to their behaviour. Course-specific content, fee reminders, scholarship nudges, and deadline alerts — all automated until the student enrolls.',
    features: [],
    stat: { num: '7-day', label: 'automated nurture journey' },
    img: '/leadnurthuredahsboard.png',
    imgLabel: 'Lead Journey — Email & WhatsApp',
  },
];

const bridges = {
  1: 'Every enquiry is in. The AI is already talking. But which lead is ready to close?',
  3: 'The lead is warm. The counsellor knows exactly what to say.',
  5: 'The counsellor has closed. Now the admin sees the full picture.',
};

export default function Features() {
  return (
    <div className="feat-page">

      {/* ── HERO ── */}
      <section className="feat-hero">
        <div className="feat-hero__bg-shape" />
        <div className="container feat-hero__inner">
          <FadeIn className="feat-hero__left">
            <div className="feat-hero__badge">
              <span className="feat-pulse" />
              GoEd AI · Seven-stage platform
            </div>
            <h1 className="feat-hero__title">
              The story of every<br />
              enrolled student<br />
              <em>starts with a missed lead.</em>
            </h1>
            <p className="feat-hero__sub">
              GoEd AI closes every gap — from the moment a student enquires to the day they enrol.
              Seven stages. One connected platform. Zero leads left behind.
            </p>
            <div className="feat-hero__actions">
              {/* <Link to="/demo" className="btn btn-primary btn-lg">See it live</Link> */}
              <Link to="/pricing" className="btn btn-outline-white btn-lg">View pricing</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="feat-hero__right">
            <img src="/7chapters2.png" alt="GoEd AI 7 chapters" className="feat-hero__img" />
          </FadeIn>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      {chapters.map((ch, i) => (
        <React.Fragment key={ch.num}>
          <section className={`feat-chapter feat-chapter--${ch.color} feat-chapter--${ch.bg}`}>
            <div className="feat-chapter__bg-num" aria-hidden="true">{ch.num}</div>
            <div className={`container feat-chapter__grid ${i % 2 === 0 ? 'feat-chapter__grid--img-right' : 'feat-chapter__grid--img-left'}`}>

              <FadeIn className="feat-chapter__text" delay={0.05}>
                <div className="feat-chapter__meta">
                  <span className="feat-chapter__num-tag">Chapter {ch.num}</span>
                  <span className={`feat-chapter__act-tag feat-chapter__act-tag--${ch.color}`}>{ch.act}</span>
                </div>
                <h2 className="feat-chapter__title">{ch.headline}</h2>
                <p className="feat-chapter__sub">{ch.sub}</p>
                {ch.features.length > 0 && (
                  <ul className="feat-chapter__list">
                    {ch.features.map((f) => (
                      <li key={f} className="feat-chapter__list-item">
                        <span className={`feat-chapter__check feat-chapter__check--${ch.color}`}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className={`feat-chapter__stat feat-chapter__stat--${ch.color}`}>
                  <div className="feat-chapter__stat-num">{ch.stat.num}</div>
                  <div className="feat-chapter__stat-label">{ch.stat.label}</div>
                </div>
              </FadeIn>

              <FadeIn className="feat-chapter__media" delay={0.15}>
                {ch.img
                  ? <img src={ch.img} alt={ch.imgLabel} className="feat-chapter__img" />
                  : <ImagePlaceholder label={ch.imgLabel} accent={ch.color} />
                }
              </FadeIn>
            </div>
          </section>

          {bridges[i] && (
            <div className="feat-bridge">
              <div className="container">
                <div className="feat-bridge__line" />
                <p className="feat-bridge__text">{bridges[i]}</p>
                <div className="feat-bridge__line" />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      {/* ── EPILOGUE ── */}
      <section className="feat-epilogue">
        <div className="container">
          <FadeIn>
            <div className="feat-epilogue__eyebrow">The outcome</div>
            <h2 className="feat-epilogue__title">
              What happens when every chapter<br />comes together.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="feat-epilogue__stats">
              {[
                { n: '100%', l: 'Contact rate — every lead reached', c: 'var(--teal-light)' },
                { n: '3×', l: 'Conversion lift per counsellor', c: 'var(--amber)' },
                { n: '< 3 min', l: 'Average first response time', c: '#a78bfa' },
                { n: '1 week', l: 'Phase 1 fully live', c: '#fff' },
              ].map((s) => (
                <div key={s.n} className="feat-epilogue__stat">
                  <div className="feat-epilogue__stat-num" style={{ color: s.c }}>{s.n}</div>
                  <div className="feat-epilogue__stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <blockquote className="feat-epilogue__quote">
              &ldquo;We went from chasing leads to having AI-qualified, scored leads
              on every counsellor&rsquo;s screen every morning.&rdquo;
            </blockquote>
            <p className="feat-epilogue__attr">Director of Admissions — GoEd AI client institution</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="feat-epilogue__actions">
              {/* <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link> */}
              <Link to="/results" className="btn btn-outline-white btn-lg">Read the case study</Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
