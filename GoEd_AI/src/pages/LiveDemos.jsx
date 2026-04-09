import React from 'react';
import { Link } from 'react-router-dom';

// Helper to convert YouTube watch links to embed links (from SaleZx pattern)
const getEmbedUrl = (url) => {
  if (!url) return '';
  const isEmbed = url.includes('youtube.com/embed') || url.includes('sharepoint.com') || url.includes('onedrive');
  if (isEmbed) return url;

  // Auto-convert YouTube watch URLs -> embed URLs
  const ytMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  return url;
};

const VideoPlayer = ({ src, title, className, style }) => {
  const embedUrl = getEmbedUrl(src);
  const isExternal = embedUrl.startsWith('http') && (embedUrl.includes('youtube.com') || embedUrl.includes('sharepoint.com') || embedUrl.includes('onedrive'));

  if (isExternal) {
    return (
      <div className={className} style={{ ...style, position: 'relative', width: '100%', height: '100%', background: '#000' }}>
        <iframe
          src={embedUrl}
          title={title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video 
      autoPlay 
      muted 
      loop 
      controls 
      className={className}
      style={{ ...style, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const demos = [
  {
    title: 'AI Calling Agent',
    desc: 'GoEd AI calls leads proactively within minutes of an enquiry. Full knowledge and context — knows the lead source, course interest, and prior interactions. Conducts a natural voice conversation, qualifies interest, handles objections, and books a counsellor callback.',
    color: 'var(--teal)',
    gradient: 'linear-gradient(135deg, var(--teal-bg), rgba(13,148,136,.15))',
    stats: ['47-second response time', 'Full CRM auto-update after every call', 'Works 8 PM to midnight — no human needed', 'Hindi, English, regional languages'],
    videoSrc: import.meta.env.VITE_VIDEO_AI_CALLING || '/demo.mp4'
  },
  {
    title: 'WhatsApp AI Agent',
    desc: 'Inbound messages answered instantly, 24×7. Outbound broadcast campaigns to purchased lead lists — CollegeDekho, Shiksha, any CSV. 1,000 leads contacted in under 60 seconds. Drip sequences over multiple days. All scored by noon.',
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, #ecfdf5, rgba(5,150,105,.15))',
    stats: ['1,000 leads activated before lunch', 'Student vs parent auto-detection', 'Document checklist sent at the right stage', 'Escalation to live counsellor with full context'],
    videoSrc: import.meta.env.VITE_VIDEO_WHATSAPP || '/whatsapp.mp4'
  },
  {
    title: 'Facebook & Instagram',
    desc: 'Lead form fills, DMs, and post enquiries responded to in under 5 minutes — automatically. Language auto-detected and switched per reply. Student vs parent detected from language tone. Lead profile created and pushed to CRM immediately.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #fdf4ff, rgba(168,85,247,.15))',
    stats: ['Under 5-minute response — any hour', 'The WOW moment at ITS demo', 'Different conversation for student vs parent', 'Full lead profile pushed to Meritto'],
    videoSrc: import.meta.env.VITE_VIDEO_SOCIAL || '/instafb.mp4'
  },
  {
    title: 'Website Chat',
    desc: 'AI chat widget on the institution website. Answers all queries 24×7 including the 9 PM and 11 PM enquiries that counsellors miss. Qualification built into the chat — course interest, eligibility, and contact details captured before the conversation ends.',
    color: 'var(--navy)',
    gradient: 'linear-gradient(135deg, var(--off-white), rgba(15,32,68,.08))',
    stats: ['24×7 coverage including holidays', 'Full qualification in-chat', 'Callback booking within conversation', 'Lead profile with chat summary to CRM'],
    videoSrc: import.meta.env.VITE_VIDEO_WEBSITE_CHAT || '/websitechat.mp4'
  },
];

export default function LiveDemos() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">Experience GoEd AI</div>
            <h1 className="section-title">See it working. Right now.</h1>
            <p className="section-subtitle">Every channel below is live. These are real demonstrations of what your students and counsellors will experience.</p>
          </div>

          {/* Main demo video */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#000', aspectRatio: '16/9' }}>
              <VideoPlayer 
                src={import.meta.env.VITE_VIDEO_MAIN_DEMO || "/demo.mp4"} 
                title="Full Product Demo" 
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: 'var(--gray-500)' }}>
              Experience the full GoEd AI product walkthrough
            </p>
          </div>

          {/* Channel demos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {demos.map((d, i) => (
              <div key={d.title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 12 }}>{d.title}</h2>
                  <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20 }}>{d.desc}</p>
                  <ul className="feature-list">
                    {d.stats.map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div style={{ background: d.gradient, border: '1px solid var(--gray-200)', borderRadius: 16, aspectRatio: '16/9', overflow: 'hidden', order: i % 2 === 0 ? 1 : 0 }}>
                  <VideoPlayer 
                    src={d.videoSrc} 
                    title={d.title} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#fff', marginBottom: 16 }}>Want to experience it yourself?</h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 24 }}>Chat, call, or WhatsApp — talk to GoEd AI right now.</p>
          <Link to="/demo" className="btn btn-primary btn-lg">Live Demo</Link>
        </div>
      </section>
    </div>
  );
}
