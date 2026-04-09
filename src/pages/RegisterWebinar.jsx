import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './RegisterWebinar.css';

const EMAILJS_SERVICE_ID = 'service_duvn0ip';
const EMAILJS_TEMPLATE_ID = 'template_xa0itug';
const EMAILJS_PUBLIC_KEY = 'Fp7d4aeU85LQ-e0DK';

const webinarInfo = {
  title: 'AI Powered Admissions — Reimagining the GenZ Era with Agentic AI',
  date: 'Wednesday, 23rd April 2025',
  time: '3:00 PM – 4:00 PM IST',
  location: 'Online',
  description: 'Join industry veterans and technology leaders as they discuss the transformation of higher education admissions through Agentic AI. Learn how to reach GenZ students where they live — on WhatsApp, Instagram, and through instant AI voice conversations.'
};

const speakers = [
  { name: 'Dr. Rajneesh Chauhan', role: 'Director, IMT Nagpur', chief: true, avatar: 'DR' },
  { name: 'Mr. Vikas Aggarwal', role: 'Industry Veteran', chief: false },
  { name: 'Mr. Jagpreet Singh', role: 'Zoxima Solutions', chief: false },
  { name: 'Mr. Rajeev Sood', role: 'Zoxima Solutions', chief: false }
];

export default function RegisterWebinar() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    organization: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Send Email via EmailJS
      const templateParams = {
        name: formData.user_name,
        email: formData.user_email,
        number: formData.user_phone,
        message: `Webinar Registration: ${webinarInfo.title}\nOrganization: ${formData.organization}\nRole: ${formData.role}\nAdditional Message: ${formData.message}`,
        time: new Date().toLocaleString()
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // 2. Send Data to Excel API (Sheet API)
      const sheetApiUrl = import.meta.env.VITE_WEBINAR_SHEET_API;
      if (sheetApiUrl) {
        try {
          await fetch(sheetApiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sheet: "aiwebinar",
              name: formData.user_name,
              email: formData.user_email,
              number: formData.user_phone,
              org: formData.organization,
              role: formData.role,
              questions: formData.message
            }),
          });
        } catch (apiErr) {
          console.error('Sheet API error:', apiErr);
          // We continue to success if EmailJS worked, but log the error
        }
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Registration error:', err);
      setError('Something went wrong. Please try again or email us at sales@goedai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="webinar-reg-page success-view">
        <div className="container">
          <div className="success-card fade-in visible">
            <div className="success-icon-wrap">
              <CheckCircle size={64} className="success-icon" />
            </div>
            <h1 className="success-title">Registration Successful!</h1>
            <p className="success-desc">
              Thank you for registering for our upcoming webinar: <br />
              <strong>{webinarInfo.title}</strong>
            </p>
            <p className="success-next">
              A confirmation email has been sent to <strong>{formData.user_email}</strong>.
              We look forward to seeing you there!
            </p>
            <div className="success-actions">
              <Link to="/" className="btn btn-navy">Back to Home</Link>
              <button className="btn btn-secondary" onClick={() => window.print()}>Save Copy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="webinar-reg-page">
      <div className="container grid-container">
        {/* Info Side */}
        <div className="webinar-info-side">
          <Link to="/insights" className="back-link">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="badge badge-amber webinar-badge">Live Webinar</div>
          <h1 className="webinar-title">{webinarInfo.title}</h1>
          <p className="webinar-intro">{webinarInfo.description}</p>

          <div className="info-meta-list">
            <div className="meta-item">
              <div className="meta-icon"><Calendar size={20} /></div>
              <div>
                <strong>Date</strong>
                <span>{webinarInfo.date}</span>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon"><Clock size={20} /></div>
              <div>
                <strong>Time</strong>
                <span>{webinarInfo.time}</span>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon"><MapPin size={20} /></div>
              <div>
                <strong>Location</strong>
                <span>{webinarInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="webinar-speakers">
            <h3>Featured Speakers</h3>
            <div className="speaker-highlight-reg">
              {/* Highlight IMT Nagpur Director */}
              <div className="speaker-card chief">
                <div className="speaker-avatar">DR</div>
                <div className="speaker-info">
                  <strong>Dr. Rajneesh Chauhan</strong>
                  <span className="speaker-role-badge">Director, IMT Nagpur</span>
                </div>
              </div>

              <div className="speaker-others-grid">
                {speakers.filter(s => !s.chief).map(s => (
                  <div key={s.name} className="speaker-small-card">
                    <strong>{s.name}</strong>
                    <span>{s.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="webinar-form-side">
          <div className="reg-card">
            <div className="reg-card-header">
              <h2>Reserve Your Spot</h2>
              <p>Join the future of Agentic AI in education.</p>
            </div>

            <form onSubmit={handleSubmit} className="reg-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Business Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="name@university.edu"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Organization / University</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. IMT Nagpur"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Director Admissions"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Specific Questions? (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What should we cover?"
                  rows={3}
                ></textarea>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : (
                  <>Complete Registration <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
