import React from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="pp-page">
      <div className="pp-hero">
        <div className="pp-hero__inner container">
          <p className="pp-hero__label">Legal</p>
          <h1 className="pp-hero__title">Privacy Policy</h1>
          <p className="pp-hero__meta">
            <span>Effective Date: December 8, 2025</span>
            <span className="pp-hero__sep">•</span>
            <span>Last Updated: June 25, 2026</span>
          </p>
        </div>
      </div>

      <div className="pp-body container">

        {/* 1. Introduction */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">1</span> Introduction</h2>
          <p>The GoEd AI website and platform (collectively, the "Site") are owned and operated by <strong>Zoxima Pvt. Ltd.</strong>, a private limited company incorporated under the laws of India ("Company", "we", "us", or "our").</p>
          <p>GoEd AI is a brand and product of Zoxima Pvt. Ltd., which acts as the data controller of your personal data under this Policy.</p>
          <p>We have adopted this Privacy Policy to explain how we collect, use, store, share, and protect information gathered through our Site and AI-powered education services. Please read this Policy carefully before using GoEd AI.</p>
          <p>By accessing or using our Site, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
          <p>If you do not agree to this Policy, please discontinue use of the Site immediately.</p>
          <p>For any questions, please contact us at <a href="mailto:sales@goedai.com" className="pp-link">sales@goedai.com</a>.</p>
        </section>

        {/* 2. Personal Information We Collect */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">2</span> Personal Information We Collect</h2>

          <h3 className="pp-subsection__title">2.1 Information Collected Automatically</h3>
          <p>When you visit GoEd AI, we automatically collect certain information about your device and browsing activity, including:</p>
          <ul className="pp-list">
            <li>Web browser type and version</li>
            <li>IP address and approximate geographic location</li>
            <li>Device type, operating system, and screen resolution</li>
            <li>Time zone settings</li>
            <li>Cookies and similar tracking technologies installed on your device</li>
            <li>Web pages or products you view on the Site</li>
            <li>Referring websites or search terms that brought you to the Site</li>
            <li>Interaction data, including click patterns, session duration, and navigation paths</li>
          </ul>
          <p>We refer to this automatically collected data as <strong>"Device Information."</strong></p>

          <h3 className="pp-subsection__title">2.2 Information You Provide to Us</h3>
          <p>We may also collect personal data you voluntarily provide when registering or using our services, including:</p>
          <ul className="pp-list">
            <li>First name and last name</li>
            <li>Email address</li>
            <li>Physical address or city of residence</li>
            <li>Organisation or institution name</li>
            <li>Telephone number</li>
            <li>Payment and billing information</li>
            <li>Communications and messages you send to us</li>
            <li>Responses to surveys, feedback forms, or questionnaires</li>
          </ul>
          <p>You may choose not to provide personal data, but this may restrict your access to certain features such as newsletters, account registration, or direct contact forms.</p>

          <h3 className="pp-subsection__title">2.3 AI Interaction Data</h3>
          <p>As an AI-powered education platform, we may collect and process data generated through your interactions with our AI systems, including:</p>
          <ul className="pp-list">
            <li>Prompts, queries, and inputs you submit to the AI</li>
            <li>AI-generated responses and outputs</li>
            <li>Session metadata (duration, frequency, features used)</li>
            <li>Feedback ratings or corrections you provide on AI outputs</li>
          </ul>
          <p>Please refer to <strong>Section 7 (AI-Specific Data Use)</strong> for details on how your AI interaction data is handled.</p>
        </section>

        {/* 3. Why We Process Your Data */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">3</span> Why We Process Your Data &amp; Legal Basis (GDPR)</h2>

          <h3 className="pp-subsection__title">3.1 Performance of a Contract (Article 6(1)(b) GDPR)</h3>
          <p>We process your data to:</p>
          <ul className="pp-list">
            <li>Provide services</li>
            <li>Fulfil orders</li>
            <li>Manage your account</li>
            <li>Deliver features you have signed up for</li>
          </ul>

          <h3 className="pp-subsection__title">3.2 Legitimate Interests (Article 6(1)(f) GDPR)</h3>
          <p>We process certain data based on our legitimate business interests, including:</p>
          <ul className="pp-list">
            <li>Improving and personalising our website and AI features</li>
            <li>Fraud prevention and platform security</li>
            <li>Statistical analysis and product development</li>
            <li>Internal business operations</li>
          </ul>

          <h3 className="pp-subsection__title">3.3 Consent (Article 6(1)(a) GDPR)</h3>
          <p>Where required by law, we will seek your explicit consent before processing your data, including for:</p>
          <ul className="pp-list">
            <li>Marketing communications</li>
            <li>Optional cookies</li>
            <li>Sensitive data</li>
          </ul>

          <h3 className="pp-subsection__title">3.4 Legal Obligation (Article 6(1)(c) GDPR)</h3>
          <p>We may process your data to comply with legal or regulatory obligations, including:</p>
          <ul className="pp-list">
            <li>Court orders</li>
            <li>Law enforcement requests</li>
            <li>Tax requirements</li>
          </ul>
        </section>

        {/* 4. Cookie Policy */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">4</span> Cookie Policy</h2>
          <p>We use cookies and similar tracking technologies (such as web beacons and pixels) on our Site.</p>

          <h3 className="pp-subsection__title">4.1 Types of Cookies</h3>
          <ul className="pp-list">
            <li><strong>Essential Cookies</strong></li>
            <li><strong>Functional Cookies</strong></li>
            <li><strong>Analytics Cookies</strong></li>
            <li><strong>Marketing Cookies</strong></li>
          </ul>

          <h3 className="pp-subsection__title">4.2 Third-Party Cookies</h3>
          <p>Some cookies are placed by third-party services (such as analytics providers). We do not control these cookies.</p>

          <h3 className="pp-subsection__title">4.3 Managing Cookie Preferences</h3>
          <p>Users can:</p>
          <ul className="pp-list">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize cookie preferences</li>
          </ul>
          <p>Cookie settings can also be changed later by clicking Cookie Settings, clearing browser cookies, or managing browser settings.</p>
          <p>Disabling essential cookies may prevent the website from functioning properly.</p>
        </section>

        {/* 5. Data Retention */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">5</span> Data Retention</h2>

          <h3 className="pp-subsection__title">5.1 Account Data</h3>
          <ul className="pp-list">
            <li>Active accounts: retained while active</li>
            <li>Closed accounts: retained up to 3 years</li>
            <li>Backups: retained up to 90 days</li>
          </ul>

          <h3 className="pp-subsection__title">5.2 AI Interaction Logs</h3>
          <ul className="pp-list">
            <li>Raw prompts &amp; outputs: retained up to 24 months</li>
            <li>Anonymous aggregated logs: may be retained indefinitely</li>
            <li>Feedback: retained while account exists</li>
          </ul>
          <p>Users may request deletion by contacting <a href="mailto:sales@goedai.com" className="pp-link">sales@goedai.com</a>.</p>

          <h3 className="pp-subsection__title">5.3 Transaction Records</h3>
          <ul className="pp-list">
            <li>Payment records: retained 7 years</li>
            <li>Invoice history: retained 7 years</li>
            <li>Card details are not stored on GoEd AI servers</li>
          </ul>

          <h3 className="pp-subsection__title">5.4 Communications</h3>
          <ul className="pp-list">
            <li>Support tickets: 3 years</li>
            <li>Marketing opt-ins: until unsubscribe</li>
            <li>Sales enquiries: 2 years</li>
          </ul>

          <h3 className="pp-subsection__title">5.5 Cookies &amp; Device Information</h3>
          <ul className="pp-list">
            <li>Analytics cookies: up to 2 years</li>
            <li>Session cookies: deleted after browser closes</li>
            <li>Marketing cookies: retained according to third-party settings</li>
          </ul>

          <h3 className="pp-subsection__title">5.6 Legal Holds</h3>
          <p>Legal requirements override normal deletion schedules.</p>

          <h3 className="pp-subsection__title">5.7 Deletion Process</h3>
          <p>Data is securely deleted or anonymised using industry-standard methods.</p>
        </section>

        {/* 6. Third-Party Data Sharing */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">6</span> Third-Party Data Sharing</h2>
          <p>GoEd AI does not sell, rent, lease, or trade personal information.</p>
          <p>Data may be shared with trusted providers including:</p>
          <ul className="pp-list">
            <li>Payment processors</li>
            <li>Cloud hosting providers</li>
            <li>Analytics providers</li>
            <li>AI infrastructure providers</li>
            <li>Email platforms</li>
            <li>Customer support software</li>
            <li>Legal and compliance partners</li>
          </ul>
          <p>All providers operate under data processing agreements.</p>
        </section>

        {/* 7. AI-Specific Data Use */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">7</span> AI-Specific Data Use</h2>

          <h3 className="pp-subsection__title">7.1 AI Training</h3>
          <p>GoEd AI does not use personally identifiable prompts or conversations to train AI models without explicit written consent.</p>
          <p>It may use fully anonymised, aggregated, and non-identifiable interaction data. Users may opt out of anonymous analytics.</p>

          <h3 className="pp-subsection__title">7.2 Third-Party AI Providers</h3>
          <p>GoEd AI integrates with:</p>
          <ul className="pp-list">
            <li>OpenAI (GPT)</li>
            <li>Anthropic (Claude)</li>
          </ul>
          <p>Only the minimum necessary data is shared. These providers act as data processors.</p>

          <h3 className="pp-subsection__title">7.3 AI Output Disclaimer</h3>
          <p>AI responses:</p>
          <ul className="pp-list">
            <li>May contain inaccuracies</li>
            <li>Are not professional advice</li>
            <li>Must be independently verified</li>
            <li>Should not be relied upon for legal, financial, medical or critical decisions</li>
          </ul>
          <p>Users assume responsibility for how AI outputs are used.</p>

          <h3 className="pp-subsection__title">7.4 Automated Decision Making</h3>
          <p>Automated systems may be used for personalisation, recommendations, and fraud detection.</p>
          <p>Users have rights to human review, explanation, and to challenge automated decisions.</p>
        </section>

        {/* 8. Children's Privacy */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">8</span> Children's Privacy</h2>
          <p>GoEd AI complies with COPPA, GDPR provisions relating to children, and applicable local laws.</p>
          <p>It does not knowingly collect data from children under 13 without parental consent.</p>
          <p>Educational institutions remain responsible for obtaining necessary parental permissions.</p>
        </section>

        {/* 9. Your Rights */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">9</span> Your Rights</h2>

          <h3 className="pp-subsection__title">GDPR Rights</h3>
          <p>Users may exercise rights including:</p>
          <ul className="pp-list">
            <li>Right to be informed</li>
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
            <li>Rights regarding automated decisions</li>
            <li>Right to complain to a Data Protection Authority</li>
          </ul>

          <h3 className="pp-subsection__title">California Rights (CCPA / CPRA)</h3>
          <p>California residents have rights to:</p>
          <ul className="pp-list">
            <li>Know</li>
            <li>Delete</li>
            <li>Correct</li>
            <li>Opt out of sale or sharing</li>
            <li>Limit sensitive information</li>
            <li>Non-discrimination</li>
          </ul>
        </section>

        {/* 10. International Data Transfers */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">10</span> International Data Transfers</h2>
          <p>GoEd AI is headquartered in India. Data may be processed internationally, including in the United States and other service provider locations.</p>
          <p>Transfers rely on:</p>
          <ul className="pp-list">
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions</li>
            <li>Supplementary technical safeguards</li>
          </ul>
        </section>

        {/* 11. Payment Data Handling */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">11</span> Payment Data Handling</h2>
          <p>Payments are processed through PCI-DSS compliant payment providers.</p>
          <p>GoEd AI does not store:</p>
          <ul className="pp-list">
            <li>Card numbers</li>
            <li>CVV</li>
            <li>Full payment details</li>
          </ul>
        </section>

        {/* 12. Information Security */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">12</span> Information Security</h2>
          <p>Security measures include:</p>
          <ul className="pp-list">
            <li>TLS/SSL encryption</li>
            <li>Encryption at rest</li>
            <li>Access controls</li>
            <li>Security assessments</li>
            <li>Secure servers</li>
            <li>Employee privacy training</li>
          </ul>

          <h3 className="pp-subsection__title">Data Breach Notification</h3>
          <p>If a breach occurs:</p>
          <ul className="pp-list">
            <li>Investigation begins within 24–48 hours</li>
            <li>Authorities notified within 72 hours (where required)</li>
            <li>Users notified within 30 days, unless legally delayed</li>
          </ul>
          <p>Notifications may be sent via email, website notice, or SMS/Phone (if applicable).</p>
        </section>

        {/* 13. Data Protection Officer */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">13</span> Data Protection Officer</h2>
          <p>Privacy enquiries can be directed to:</p>
          <div className="pp-contact-card">
            <p><strong>Email:</strong> <a href="mailto:sales@goedai.com" className="pp-link">sales@goedai.com</a></p>
            <p><strong>Subject:</strong> Attention: Data Protection Officer</p>
            <p><strong>Response target:</strong> 30 calendar days</p>
          </div>
        </section>

        {/* 14. Links to Other Websites */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">14</span> Links to Other Websites</h2>
          <p>GoEd AI is not responsible for third-party websites linked from its platform. Users should review third-party privacy policies separately.</p>
        </section>

        {/* 15. Legal Disclosure */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">15</span> Legal Disclosure</h2>
          <p>Personal data may be disclosed where required by law to:</p>
          <ul className="pp-list">
            <li>Protect legal rights</li>
            <li>Prevent fraud</li>
            <li>Protect safety</li>
            <li>Respond to government requests</li>
          </ul>
          <p>Where legally permitted, users will be notified beforehand.</p>
        </section>

        {/* 16. Changes to This Privacy Policy */}
        <section className="pp-section">
          <h2 className="pp-section__title"><span className="pp-num">16</span> Changes to This Privacy Policy</h2>
          <p>When material changes are made:</p>
          <ul className="pp-list">
            <li>"Last Updated" date will change</li>
            <li>Users will receive notice at least 14 days before changes take effect</li>
            <li>New consent will be requested where legally required</li>
          </ul>
          <p>Continued use of the Site constitutes acceptance of the revised policy.</p>
        </section>

        {/* 17. Contact Information */}
        <section className="pp-section pp-section--last">
          <h2 className="pp-section__title"><span className="pp-num">17</span> Contact Information</h2>
          <div className="pp-contact-card pp-contact-card--full">
            <p className="pp-contact-card__company"><strong>Zoxima Pvt. Ltd.</strong> <span>(Operating as GoEd AI)</span></p>
            <div className="pp-contact-card__grid">
              <div>
                <p className="pp-contact-card__label">Registered Address</p>
                <address className="pp-contact-card__address">
                  FF-24, Omaxe Square<br />
                  Jasola District Centre<br />
                  New Delhi – 110044<br />
                  India
                </address>
              </div>
              <div>
                <p className="pp-contact-card__label">Contact</p>
                <p><strong>Website:</strong> <a href="https://www.goedai.com" target="_blank" rel="noopener noreferrer" className="pp-link">www.goedai.com</a></p>
                <p><strong>Privacy &amp; Data Requests:</strong> <a href="mailto:sales@goedai.com" className="pp-link">sales@goedai.com</a></p>
                <p><strong>General Enquiries:</strong> <a href="mailto:sales@goedai.com" className="pp-link">sales@goedai.com</a></p>
              </div>
            </div>
            <p className="pp-contact-card__note">GoEd AI aims to respond to privacy requests within 30 calendar days. Complex requests may take an additional 60 days, with notice provided to the requester.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
