import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, BarChart, Briefcase } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Essential',
    price: '₹75K',
    period: '/Month',
    icon: <Clock size={24} />,
    description: 'Early Lead Capture & Engagement',
    features: [
      '3K Engagements',
      'Website AI Agent',
      'Engagement-based Lead Capture',
      'Basic Reports'
    ],
    popular: false
  },
  {
    name: 'Accelerate',
    price: '₹1.5L',
    period: '/Month',
    icon: <Zap size={24} />,
    description: 'Expand Engagement & Monitor Leads',
    features: [
      '5K Engagements',
      'Website AI Agent',
      'Admin CRM Access',
      'Lead Analytics'
    ],
    popular: false
  },
  {
    name: 'Scale',
    price: '₹2.5L',
    period: '/Month',
    icon: <BarChart size={24} />,
    description: 'Advanced Admissions Growth',
    features: [
      '10K Engagements',
      'Website & Social Media Agents',
      'Influencer & Admission Tracking',
      'Advanced Analytics',
      'CRM Sales Funnel Visibility'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'On Request',
    period: '',
    icon: <Briefcase size={24} />,
    description: 'Full AI-powered Sales Ecosystem',
    features: [
      'Sales Performance Monitoring',
      'Website & Social Agents',
      'Full CRM Access (Team & Admin)',
      'Personalized AI Agents For Counsellors & Leadership'
    ],
    popular: false
  }
];

const faqs = [
  {
    q: 'Does GoEd AI have its own CRM, or does it work with ours?',
    a: 'GoEd AI comes with its own built-in CRM — so you can go live without any existing system. If you already use Meritto, LeadSquared, or another platform, GoEd AI integrates directly with it, enriching your existing data with AI scoring, nudges, and real-time insights. You choose which mode works best for your institution.'
  },
  {
    q: 'How quickly can we go live?',
    a: 'Once you share all required credentials and access, deployment is guaranteed within 1 week. No delays, no dependencies on our end.'
  },
  {
    q: 'What do we need to provide to get started?',
    a: 'We need: (1) Website — access credentials, or we share a chatbot snippet your team adds manually. (2) Email — SMTP credentials (username, app password, from address, display name) for sending brochures and communication to students. (3) Social media — Instagram Account ID + Access Token, Facebook Page ID + Access Token. (4) WhatsApp — Phone Number ID and Permanent Access Token from WhatsApp Business API. Our team guides you through each step.'
  },
  {
    q: 'What social media channels does GoEd AI connect to?',
    a: 'GoEd AI connects to Instagram DMs and comments, Facebook Page messages, WhatsApp Business, and your website chat — all managed from one platform. Leads from every channel are captured, profiled, and pushed to CRM in under 5 minutes.'
  },
  {
    q: 'What about data security?',
    a: 'GoEd AI is built on Microsoft Azure AI — enterprise-grade infrastructure with full audit trails, conversation logs, and a document repository. All data is stored securely with role-based access controls and complete export capability.'
  },
  {
    q: 'Can we change plans later?',
    a: 'Yes. You can upgrade at any point during the admission cycle. Our team handles all transitions without disruption to live operations.'
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const CheckIcon = () => (
    <svg className="check-icon" viewBox="0 0 20 20" fill="none">
      <path d="M5 10.5L8.5 14L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Pricing Plans</div>
          <h1 className="section-title">Transparent. Aligned. Reliable.</h1>
          <p className="section-subtitle">Select a plan that fits your institution's scale. All models are designed to pay for themselves within the first admission cycle.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <Link
              key={plan.name}
              to="/contact"
              className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''} ${hoveredPlan && hoveredPlan !== plan.name && plan.popular ? 'pricing-card--muted' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="badge-above">
                  <span className="badge-popular">Most Popular</span>
                </div>
              )}

              <div className="pricing-card__body">
                <div className="plan-icon">
                  {plan.icon}
                </div>
                <h3 className="plan-name">{plan.name}</h3>

                <div className="price-block">
                  {plan.price === 'On Request' ? (
                    <span className="price-custom-text">{plan.price}</span>
                  ) : (
                    <>
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </>
                  )}
                </div>

                <div className="divider"></div>

                <p className="features-label">What's Included</p>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card__footer">
                {plan.description}
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64, marginBottom: 80 }}>
          <p style={{ fontSize: 15, color: 'var(--gray-500)', marginBottom: 8 }}>Every institution is different. Let's scope yours — 30-minute call, no obligation.</p>
          <p style={{ fontSize: 13, color: 'var(--gray-400)' }}>Phase 1 live in 1 week &middot; Phase 2 in 4 additional weeks &middot; No long-term lock-in</p>
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: 840, margin: '0 auto', background: '#fff', padding: '48px', borderRadius: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)', marginBottom: 32, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map(f => (
              <details key={f.q} style={{ borderBottom: '1px solid var(--gray-100)', padding: '24px 0' }}>
                <summary style={{ fontWeight: 700, fontSize: 17, color: 'var(--navy)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q}
                  <span style={{ color: 'var(--teal)', fontSize: 20 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 16 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
