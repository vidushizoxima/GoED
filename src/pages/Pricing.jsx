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
  { q: 'How quickly can we go live?', a: 'Phase 1 goes live in 3 weeks. This includes chatbot replacement, social media AI, WhatsApp agent, knowledge base, Meritto integration, AI scoring, counsellor nudges, and basic analytics. Phase 2 adds document automation, Zoho sync, ERP integration, and advanced analytics in 4 additional weeks.' },
  { q: 'What do we need to provide?', a: 'For Phase 1: Meritto API access, WhatsApp Business number, Facebook/Instagram admin access, website embed access, and knowledge base content (brochures, fee structure, FAQ). For Phase 2: Zoho API, ERP details, university portal credentials, fee schedule, and document checklists.' },
  { q: 'Does GoEd AI replace our CRM?', a: 'No. GoEd AI enriches your existing CRM (Meritto, LeadSquared, or any other). It adds AI scoring, nudges, and intelligence on top of your CRM — it doesn’t replace it.' },
  { q: 'What about data security?', a: 'GoEd AI is built on Microsoft Azure AI with enterprise-grade security. Fully DPDP-compliant with complete conversation logs, document repository, and audit trails.' },
  { q: 'Can we change plans later?', a: 'Yes. You can upgrade your plan during the admission cycle as your lead volume and student engagement needs grow.' },
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
          <p style={{ fontSize: 13, color: 'var(--gray-400)' }}>Phase 1 live in 3 weeks &middot; Phase 2 in 4 additional weeks &middot; No long-term lock-in</p>
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
