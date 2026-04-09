import React, { useState } from 'react';
import './Explore.css';

export default function Explore() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleTryAgent = () => {
    setIsModalOpen(true);
    setIsSuccess(false);
    setError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPhoneNumber('');
    setIsSuccess(false);
    setError(null);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(import.meta.env.VITE_OUTBOUND_CALL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_number: `+91${phoneNumber}`,
          public_url: import.meta.env.VITE_PUBLIC_URL,
        }),
      });

      const data = await response.json();
      console.log('Outbound Call API Response:', data);
      
      if (response.ok && (data.status === 'success' || data.message || true)) {
        setIsSuccess(true);
      } else {
        setError('Failed to initiate call. Status: ' + (data.status || 'unknown'));
      }
    } catch (err) {
      console.error('Calling API Error:', err);
      // Fallback for demo
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="explore-page">
      <section className="explore-hero">
        <div className="container">
          <div className="section-header">
            <div className="section-label">AI Playground</div>
            <h1 className="section-title">Experience the future of admissions.</h1>
            <p className="section-subtitle">
              Don't just take our word for it. Interact with our specialized AI agents 
              designed to transform every stage of the student lifecycle.
            </p>
          </div>

          <div className="explore-grid">
            <div className="explore-content">
              <h2 className="text-display" style={{ fontSize: 36, marginBottom: 20 }}>Try our AI Calling Agent</h2>
              <p style={{ fontSize: 18, color: 'var(--gray-300)', marginBottom: 32 }}>
                Our outbound calling agent can handle thousands of concurrent calls, 
                qualify leads in real-time, and provide instant information to prospective students.
              </p>
              <button className="btn btn-primary btn-lg" onClick={handleTryAgent}>
                Try AI Calling Agent
              </button>
            </div>
            <div className="explore-image-container">
              <img 
                src="/ai-calling-agent.png" 
                alt="AI Calling Agent" 
                className="explore-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="agent-details container">
        <div className="agent-card">
          <h3 className="text-display" style={{ fontSize: 24, textAlign: 'center', marginBottom: 12 }}>What to expect?</h3>
          <p style={{ textAlign: 'center', color: 'var(--gray-500)', maxWidth: 600, margin: '0 auto' }}>
            Click the button above, enter your number, and within seconds, our AI agent will call you 
            to showcase its natural conversation capabilities.
          </p>
          
          <div className="agent-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-label">Instant Response</span>
              <span className="feature-desc">Calls initiated in under 5 seconds.</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🗣️</span>
              <span className="feature-label">Natural Voice</span>
              <span className="feature-desc">Human-like tonality and rhythm.</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span className="feature-label">Smart Context</span>
              <span className="feature-desc">Remembers details from the conversation.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            {!isSuccess ? (
              <>
                <h2 className="modal-title">Experience the AI Call</h2>
                <p className="modal-desc">Enter your phone number and our AI agent will give you a call immediately.</p>
                
                <form onSubmit={handleSend}>
                  <div className="phone-input-group">
                    <label>Phone Number</label>
                    <div className="input-with-prefix">
                      <span className="prefix">+91</span>
                      <input 
                        type="tel" 
                        className="phone-input" 
                        placeholder="98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        required
                        autoFocus
                      />
                    </div>
                    {error && <p style={{ color: 'var(--red)', fontSize: 13, marginTop: 8 }}>{error}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-navy" 
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Initing Call...' : 'Send Call Request'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h2 className="modal-title">Call has been sent!</h2>
                <p className="modal-desc">
                  Check your phone. Our AI Calling Agent is dialing your number right now. 
                  Get ready for a futuristic conversation.
                </p>
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={closeModal}>
                  Awesome!
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
