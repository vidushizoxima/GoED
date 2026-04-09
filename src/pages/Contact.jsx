import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', institution: '', role: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    emailjs.init('JPwcMlF2YMicwIxbz');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        institution: form.institution,
        role: form.role,
        message: form.message,
        source: 'Main Contact Page Schedule Demo',
        submitted_at: new Date().toLocaleString()
      };

      await emailjs.send('service_4byp487', 'template_fk9mvtt', templateParams);
      console.log('Main Contact request sent successfully');
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send request. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    padding: '14px 16px',
    borderRadius: 8,
    border: '1px solid var(--gray-200)',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="contact-section" style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* Left: Form */}
            <div>
              <div className="section-label">Get in touch</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--navy)', marginBottom: 16, lineHeight: 1.2 }}>
                Watch a demo.<br />See it working.
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 32 }}>
                30-minute call. We&rsquo;ll show you GoEd AI working on real data &mdash; not a concept deck. Bring your Director, IT Head, or anyone who needs to see it.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <input
                    type="text" name="name" placeholder="Your name *" required
                    value={form.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                  <input
                    type="email" name="email" placeholder="Work email *" required
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                  <input
                    type="tel" name="phone" placeholder="Phone number"
                    value={form.phone} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                  <input
                    type="text" name="institution" placeholder="Institution name"
                    value={form.institution} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                  <select
                    name="role" value={form.role} onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: form.role ? 'var(--gray-800)' : 'var(--gray-400)',
                      background: '#fff',
                    }}
                  >
                    <option value="">Your role</option>
                    <option value="director">Director of Admissions</option>
                    <option value="admissions_head">Admissions Head / Manager</option>
                    <option value="counsellor">Counsellor</option>
                    <option value="cfo">CFO / Owner / Trustee</option>
                    <option value="it_head">IT Head</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    name="message" placeholder="Anything specific you'd like to see in the demo?"
                    value={form.message} onChange={handleChange}
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                  {error && <p style={{ color: 'var(--red)', fontSize: 13, marginBottom: 8 }}>{error}</p>}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Schedule Demo'}
                  </button>
                </form>
              ) : (
                <div style={{
                  background: 'var(--teal-bg)',
                  border: '1px solid rgba(13,148,136,.2)',
                  borderRadius: 16,
                  padding: 40,
                  textAlign: 'center',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--navy)', marginBottom: 8 }}>Thank you!</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 16 }}>We&rsquo;ll be in touch within 24 hours to schedule your demo.</p>
                </div>
              )}

              <div style={{ marginTop: 32, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                <a href="mailto:sales@goedai.com" style={{ fontSize: 14, color: 'var(--gray-600)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" /></svg>
                  sales@goedai.com
                </a>
                <a href="tel:+919810634630" style={{ fontSize: 14, color: 'var(--gray-600)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 9810634630
                </a>
                <a href="https://wa.me/919810634630" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: 'var(--gray-600)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.86.85.85-2.86-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Calendly */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)', marginBottom: 16 }}>Or pick a time that works.</h3>
              <div style={{
                background: 'var(--off-white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 16,
                overflow: 'hidden',
              }}>
                {/*
                  CALENDLY INTEGRATION
                */}
                <iframe
                  src={import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/goedai-sales/30min-demo"}
                  title="Schedule a demo with GoEd AI"
                  style={{
                    width: '100%',
                    height: 650,
                    border: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
