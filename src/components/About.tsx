import React from 'react';
import { GraduationCap, Cpu, Server, GitBranch } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'left', marginBottom: '48px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <GraduationCap size={16} /> Background & Philosophy
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Scalability & AI Precision</span>
          </h2>
          <p className="section-subtitle">
            Combining rigorous computer science fundamentals from KL University (KLEF) with hands-on full-stack development, deep learning research, and cloud automation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px'
        }}>
          
          {/* Main Bio Card */}
          <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <img
                  src="/arayan.jpg"
                  alt="Sindiri Arayan"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    border: '2px solid var(--primary-light)',
                    boxShadow: '0 0 20px var(--primary-glow)'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                    Sindiri Arayan
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--secondary-light)', fontFamily: 'var(--font-mono)' }}>
                    B.Tech CSE Student @ KL University
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-sub)', marginBottom: '20px', lineHeight: 1.7, fontSize: '0.98rem' }}>
                I am a forward-thinking software engineer passionate about constructing resilient backend architectures and AI-driven user experiences.
              </p>
              
              <p style={{ color: 'var(--text-sub)', marginBottom: '28px', lineHeight: 1.7, fontSize: '0.98rem' }}>
                My engineering methodology spans training neural networks (YOLOv8, PyTorch) for real-time video analytics, engineering enterprise verification systems (Verhoeff dihedral algorithm), and orchestrating containerized microservice clusters on Kubernetes.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', fontFamily: 'var(--font-mono)' }}>INSTITUTION</span>
                <strong style={{ fontSize: '0.95rem', color: '#fff' }}>KL University (KLEF)</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', fontFamily: 'var(--font-mono)' }}>MAJOR</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--secondary-light)' }}>Computer Science & Eng.</strong>
              </div>
            </div>
          </div>

          {/* 3 Engineering Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                padding: '14px',
                borderRadius: '14px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                color: 'var(--primary-light)'
              }}>
                <Cpu size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>AI & Computer Vision</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                  Real-time object detection models (YOLOv8), PyTorch neural networks, OpenCV video streams, and NLP resume parsing algorithms.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                padding: '14px',
                borderRadius: '14px',
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.25)',
                color: 'var(--secondary-light)'
              }}>
                <Server size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Multi-Tier Microservices</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                  High-throughput RESTful endpoints using Python (FastAPI/Streamlit) and enterprise Java (Spring Boot) with SQL connection pooling.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                padding: '14px',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: 'var(--tertiary)'
              }}>
                <GitBranch size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>DevOps & Cloud Automation</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                  Docker containerization, Kubernetes cluster orchestration, Ansible playbooks, and automated CI/CD GitHub Action workflows.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
