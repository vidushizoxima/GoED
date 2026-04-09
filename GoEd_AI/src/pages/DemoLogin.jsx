import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import './DemoLogin.css';

export default function DemoLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (step === 'otp') {
      otpRefs.current[0]?.focus();
    }
  }, [step]);

  const sendOtp = async (e) => {
    if (e) e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    // Simulate sending OTP to backend/postgres
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
      setCountdown(60);
    }, 1000);
  };

  const resendOtp = async () => {
    if (countdown > 0) return;
    setIsSubmitting(true);
    setError(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setCountdown(60);
      setOtp(['', '', '', '', '', '']);
      otpRefs.current[0]?.focus();
    }, 1000);
  };

  const verifyOtp = async (otpOverride) => {
    const code = (otpOverride || otp).join('');
    if (code.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate verifying OTP and hitting postgres DB
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/select-platform');
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    if (value && index === 5 && newOtp.every((d) => d !== '')) {
      setTimeout(() => verifyOtp(newOtp), 100);
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      const pastedOtp = pasted.split('');
      setOtp(pastedOtp);
      otpRefs.current[5]?.focus();
      setTimeout(() => verifyOtp(pastedOtp), 100);
    }
  };

  return (
    <section style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
      <div style={{ background: '#fff', borderRadius: 24, padding: 48, width: '100%', maxWidth: 480, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)', marginBottom: 8 }}>Welcome Back</h1>
          <p style={{ color: 'var(--gray-600)', fontSize: 16 }}>Log in to your account</p>
        </div>

        {error && (
          <div style={{ background: 'var(--red-bg)', color: 'var(--red)', padding: '12px 16px', borderRadius: 8, marginBottom: 24, fontSize: 14 }}>
            {error}
          </div>
        )}

        {step === 'email' ? (
          <form onSubmit={sendOtp} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>Work Email</label>
              <input 
                type="email" 
                placeholder="you@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid var(--gray-300)', fontSize: 16, outline: 'none', transition: 'all 0.2s' }}
                autoComplete="email"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '16px', borderRadius: 12, fontSize: 16 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Verification Code \u2192'}
            </button>
            
            <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--gray-600)' }}>
              Don't have an account? <span style={{ color: 'var(--teal)', fontWeight: 600, cursor: 'pointer' }}>Try the instant demo</span>
            </p>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'var(--teal-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Mail style={{ color: 'var(--teal)' }} size={24} />
              </div>
              <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>We sent a 6-digit code to</p>
              <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 15 }}>{email}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }} onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { otpRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  style={{ width: 48, height: 56, textAlign: 'center', fontSize: 24, fontWeight: 700, borderRadius: 12, border: '2px solid var(--gray-200)', outline: 'none', color: 'var(--navy)' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              ))}
            </div>

            <button 
              type="button" 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '16px', borderRadius: 12, fontSize: 16 }}
              onClick={() => verifyOtp()}
              disabled={isSubmitting || otp.some(d => d === '')}
            >
              {isSubmitting ? 'Verifying...' : 'Verify & Log In \u2192'}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14 }}>
              <button 
                type="button" 
                onClick={() => { setStep('email'); setOtp(['','','','','','']); setError(null); }}
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gray-600)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <ArrowLeft size={16} /> Change email
              </button>
              <button 
                type="button" 
                onClick={resendOtp}
                disabled={countdown > 0 || isSubmitting}
                style={{ color: countdown > 0 ? 'var(--gray-400)' : 'var(--teal)', fontWeight: 600, background: 'none', border: 'none', cursor: countdown > 0 ? 'not-allowed' : 'pointer' }}
              >
                {countdown > 0 ? `Resend in ${countdown}s` : 'Resend code'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
