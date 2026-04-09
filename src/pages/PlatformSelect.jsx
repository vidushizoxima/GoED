import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Globe, MessageCircle, Phone, X } from 'lucide-react';

const Instagram = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

import './DemoLogin.css';

const PLATFORM_CARDS = [
  {
      id: 'web',
      icon: Globe,
      title: 'Web',
      description: 'Website chatbot with sample conversations',
      features: ['Website widget integration', 'Sample conversation flows', 'Pre-configured responses'],
      color: 'linear-gradient(135deg, #3b82f6, #06b6d4)', // blue to cyan
      bgLight: '#eff6ff', // blue-50
      textColor: '#1d4ed8', // blue-700
      activeBorder: '#3b82f6'
  },
  {
      id: 'socialMedia',
      icon: MessageCircle,
      title: 'Social Media',
      description: 'Instagram & Facebook integration',
      features: ['Instagram business integration', 'Facebook Messenger integration', 'Sample customer interactions'],
      color: 'linear-gradient(135deg, #ec4899, #f43f5e)', // pink to rose
      bgLight: '#fdf2f8', // pink-50
      textColor: '#be185d', // pink-700
      activeBorder: '#ec4899'
  },
  {
      id: 'whatsapp',
      icon: Phone,
      title: 'WhatsApp',
      description: 'WhatsApp Business API access',
      features: ['WhatsApp Business API access', 'Message templates', 'Sample chat scenarios'],
      color: 'linear-gradient(135deg, #22c55e, #10b981)', // green to emerald
      bgLight: '#f0fdf4', // green-50
      textColor: '#15803d', // green-700
      activeBorder: '#22c55e'
  },
];

function WebInfoPopup({ onClose }) {
  return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={onClose}>
          <div
              style={{ position: 'relative', width: '100%', maxWidth: 450, margin: '0 16px', background: '#fff', borderRadius: 24, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: 24 }}
              onClick={(e) => e.stopPropagation()}
          >
              <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, padding: 8, borderRadius: '50%', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} color="var(--gray-400)" />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={24} color="#fff" />
                  </div>
                  <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Web Platform</h3>
                      <p style={{ fontSize: 14, color: 'var(--gray-500)', margin: 0 }}>What you'll get with Web trial</p>
                  </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {[
                      { label: 'Embeddable chatbot widget', desc: 'Place on any webpage with a single script tag' },
                      { label: 'Sample conversation flows', desc: 'Pre-built admission Q&A scenarios' },
                      { label: 'Pre-configured responses', desc: 'Industry-standard FAQ library included' },
                      { label: 'Analytics dashboard', desc: 'Track visitor engagement & top queries' },
                  ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 12, background: '#eff6ff', borderRadius: 12 }}>
                          <Check size={20} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                          <div>
                              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', margin: '0 0 2px' }}>{item.label}</p>
                              <p style={{ fontSize: 12, color: 'var(--gray-500)', margin: 0 }}>{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <button onClick={onClose} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', borderRadius: 12 }}>Got it!</button>
          </div>
      </div>
  );
}

export default function PlatformSelect() {
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState({
      web: true,
      socialMedia: false,
      whatsapp: false,
      instagramUsername: '',
      facebookUsername: '',
      whatsappPhone: '',
  });
  const [error, setError] = useState(null);
  const [showWebPopup, setShowWebPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePlatform = (id) => {
      setError(null);
      if (id === 'web') {
          const newVal = !platforms.web;
          setPlatforms((prev) => ({ ...prev, web: newVal }));
          if (newVal) setShowWebPopup(true);
      } else {
          setPlatforms((prev) => ({ ...prev, [id]: !prev[id] }));
      }
  };

  const handleConfirm = () => {
      const hasAny = platforms.web || platforms.socialMedia || platforms.whatsapp;
      if (!hasAny) {
          setError('Please select at least one platform');
          return;
      }
      if (platforms.socialMedia && !platforms.instagramUsername.trim() && !platforms.facebookUsername.trim()) {
          setError('Please provide at least one social media username');
          return;
      }
      if (platforms.whatsapp && !platforms.whatsappPhone.trim()) {
          setError('Please provide your WhatsApp phone number');
          return;
      }
      if (platforms.whatsapp && !/^[6-9]\d{9}$/.test(platforms.whatsappPhone.trim().replace(/\\s/g, ''))) {
          setError('Please enter a valid 10-digit number');
          return;
      }
      
      setError(null);
      setIsLoading(true);
      
      // Simulate DB confirm and move to dashboard
      setTimeout(() => {
        setIsLoading(false);
        alert("Platform preferences saved! (Demo mode)");
      }, 1500);
  };

  return (
      <section style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
          <div style={{ background: '#fff', borderRadius: 24, width: '100%', maxWidth: 540, boxShadow: '0 10px 40px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              
              {/* Header */}
              <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--gray-100)' }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', margin: '0 0 4px' }}>Choose Your Platforms</h2>
                  <p style={{ fontSize: 14, color: 'var(--gray-500)', margin: 0 }}>Select one or more channels for your sample trial</p>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {error && (
                      <div style={{ background: 'var(--red-bg)', color: 'var(--red)', padding: '12px 16px', borderRadius: 8, fontSize: 14 }}>
                          {error}
                      </div>
                  )}

                  {/* Platform Cards */}
                  {PLATFORM_CARDS.map((platform) => {
                      const isSelected = platforms[platform.id];
                      const Icon = platform.icon;
                      
                      return (
                          <div key={platform.id}>
                              <button
                                  type="button"
                                  onClick={() => togglePlatform(platform.id)}
                                  style={{
                                      width: '100%', textAlign: 'left', padding: 16, borderRadius: 16, 
                                      border: isSelected ? `2px solid ${platform.activeBorder}` : '2px solid var(--gray-200)',
                                      background: isSelected ? 'var(--gray-50)' : 'transparent',
                                      cursor: 'pointer', transition: 'all 0.2s', display: 'block'
                                  }}
                              >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                      <div style={{
                                          width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                                          background: isSelected ? platform.color : platform.bgLight
                                      }}>
                                          <Icon size={24} color={isSelected ? '#fff' : platform.textColor} />
                                      </div>
                                      <div style={{ flex: 1 }}>
                                          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--navy)', margin: '0 0 2px' }}>{platform.title}</p>
                                          <p style={{ fontSize: 13, color: 'var(--gray-500)', margin: 0 }}>{platform.description}</p>
                                      </div>
                                      <div style={{
                                          width: 24, height: 24, borderRadius: '50%', border: isSelected ? 'none' : '2px solid var(--gray-300)', 
                                          background: isSelected ? platform.color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                      }}>
                                          {isSelected && <Check size={14} color="#fff" />}
                                      </div>
                                  </div>
                                  
                                  {isSelected && (
                                      <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--gray-200)' }}>
                                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                              {platform.features.map((f, i) => (
                                                  <span key={i} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 999, background: platform.bgLight, color: platform.textColor, fontWeight: 500 }}>
                                                      {f}
                                                  </span>
                                              ))}
                                          </div>
                                      </div>
                                  )}
                              </button>

                              {/* Additional Fields based on selection */}
                              {platform.id === 'socialMedia' && isSelected && (
                                  <div style={{ marginTop: 12, marginLeft: 24, paddingLeft: 24, borderLeft: `2px solid ${platform.bgLight}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                      <div>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                              <Instagram size={16} color={platform.textColor} />
                                              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray-700)' }}>Instagram</span>
                                          </div>
                                          <input
                                              type="text"
                                              placeholder="@your_instagram_handle"
                                              value={platforms.instagramUsername}
                                              onChange={(e) => setPlatforms((prev) => ({ ...prev, instagramUsername: e.target.value }))}
                                              style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--gray-300)', fontSize: 14, outline: 'none' }}
                                          />
                                      </div>
                                      <div>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                              <Facebook size={16} color="#1d4ed8" />
                                              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray-700)' }}>Facebook</span>
                                          </div>
                                          <input
                                              type="text"
                                              placeholder="facebook.com/your_page"
                                              value={platforms.facebookUsername}
                                              onChange={(e) => setPlatforms((prev) => ({ ...prev, facebookUsername: e.target.value }))}
                                              style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--gray-300)', fontSize: 14, outline: 'none' }}
                                          />
                                      </div>
                                  </div>
                              )}

                              {platform.id === 'whatsapp' && isSelected && (
                                  <div style={{ marginTop: 12, marginLeft: 24, paddingLeft: 24, borderLeft: `2px solid ${platform.bgLight}` }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                          <Phone size={16} color={platform.textColor} />
                                          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray-700)' }}>WhatsApp Phone Number</span>
                                      </div>
                                      <input
                                          type="tel"
                                          placeholder="+91 9876543210"
                                          value={platforms.whatsappPhone}
                                          onChange={(e) => setPlatforms((prev) => ({ ...prev, whatsappPhone: e.target.value }))}
                                          style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--gray-300)', fontSize: 14, outline: 'none' }}
                                      />
                                  </div>
                              )}
                          </div>
                      );
                  })}

                  <button 
                    onClick={handleConfirm} 
                    className="btn btn-primary" 
                    style={{ width: '100%', justifyContent: 'center', padding: 16, borderRadius: 12, fontSize: 16, marginTop: 8 }} 
                    disabled={isLoading}
                  >
                      {isLoading ? 'Processing...' : 'Confirm & Start Trial \u2192'}
                  </button>
              </div>
          </div>

          {showWebPopup && <WebInfoPopup onClose={() => setShowWebPopup(false)} />}
      </section>
  );
}
