import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section style={{ paddingTop: '150px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="animate-fade-in" style={{ textAlign: 'left' }}>
            
            <div style={{ marginBottom: '20px' }}>
              <div className="badge-status">
                <span className="status-dot"></span>
                Available for Full-Stack & AI Engineering Roles
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em'
            }}>
              Building Intelligent <span className="gradient-text">Cloud Platforms</span> & <span className="gradient-text-cyan">AI Infrastructure</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: 'var(--text-sub)',
              marginBottom: '32px',
              lineHeight: 1.7,
              maxWidth: '640px'
            }}>
              Hi, I'm <strong style={{ color: '#fff' }}>Sindiri Arayan</strong> 👋 — a Computer Science & Engineering student at <strong>KL University (KLEF)</strong> specializing in multi-tier web microservices, computer vision AI diagnostic engines, and containerized DevOps deployments.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <a href="#projects" className="btn-primary">
                <Sparkles size={18} />
                Explore Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/klu2300030639"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sindiriarayan639"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:aryansindiri115714@gmail.com"
                className="btn-secondary"
                style={{ padding: '14px 20px' }}
                title="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Perfectly Formatted & Aligned Stat Counters Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '12px',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '24px'
            }}>
              <div style={{
                padding: '12px 10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
                  19+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  GitHub Repos
                </div>
              </div>

              <div style={{
                padding: '12px 10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', whiteSpace: 'nowrap' }} className="gradient-text-cyan">
                  Vision AI
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  YOLOv8 Models
                </div>
              </div>

              <div style={{
                padding: '12px 10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: 'clamp(0.98rem, 1.4vw, 1.25rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--tertiary)', whiteSpace: 'nowrap' }}>
                  Docker/K8s
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  DevOps Pipeline
                </div>
              </div>

              <div style={{
                padding: '12px 10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#f59e0b' }}>
                  KLEF
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  KL University
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Perfect Centered Portrait Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card animate-float" style={{
              padding: '32px 24px',
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              
              <div style={{
                position: 'relative',
                width: '240px',
                height: '240px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                padding: '5px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--tertiary) 100%)',
                boxShadow: '0 0 35px var(--primary-glow)'
              }}>
                <img
                  src="/arayan.jpg"
                  alt="Sindiri Arayan"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    border: '4px solid #07090E'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--tertiary)',
                  border: '3px solid #07090E',
                  boxShadow: '0 0 12px var(--tertiary)'
                }}></div>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                Sindiri Arayan
              </h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--secondary-light)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>
                Computer Science & Engineering Student @ KL University
              </div>

              {/* Tech Badges Row */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Python', 'FastAPI', 'Spring Boot', 'React', 'PyTorch', 'Docker'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-sub)'
                    }}
                  >
                    #{tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

