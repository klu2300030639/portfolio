import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { GithubIcon } from './GithubIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aryansindiri115714@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5c698baf-2553-46ad-862d-0bb040a5f5f0",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Sindiri Arayan Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try emailing directly.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please email aryansindiri115714@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'left', marginBottom: '48px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Mail size={16} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-stack engineering position, AI research collaboration, or cloud infrastructure project, my inbox is open.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px'
        }}>
          
          <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>
                Contact Details & Links
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    color: 'var(--primary-light)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>DIRECT EMAIL</div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>aryansindiri115714@gmail.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(14, 165, 233, 0.12)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    color: 'var(--secondary-light)'
                  }}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>LINKEDIN PROFILE</div>
                    <a href="https://www.linkedin.com/in/sindiriarayan639" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--secondary-light)', fontSize: '0.95rem', textDecoration: 'none' }}>
                      linkedin.com/in/sindiriarayan639
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: 'var(--tertiary)'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Vijayawada, India (KL University)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)'
                  }}>
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>GITHUB</div>
                    <a href="https://github.com/klu2300030639" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', textDecoration: 'none' }}>
                      github.com/klu2300030639
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {copied ? <Check size={18} color="var(--tertiary)" /> : <Copy size={18} />}
              {copied ? 'Email Copied!' : 'Copy Email Address'}
            </button>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <Sparkles size={48} color="var(--tertiary)" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Thank you for reaching out! Your message has been sent directly to Sindiri Arayan's email.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ margin: '0 auto', fontSize: '0.88rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {errorMessage && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#fca5a5',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      outline: 'none',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      outline: 'none',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Arayan, I'd like to discuss..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '8px',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};