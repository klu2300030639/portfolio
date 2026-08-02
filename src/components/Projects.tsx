import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Search } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'devops';
  description: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
}

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'smarthealthcare',
      title: 'SmartHealthcare Diagnostic Portal',
      category: 'fullstack',
      description: 'Multi-tier clinical healthcare portal combining FastAPI AI symptom diagnosis backend, Streamlit clinician interface, Spring Boot REST services, and mobile-ready React PWA.',
      highlights: [
        'FastAPI ML endpoint for differential diagnosis predictions',
        'Spring Boot backend controllers & JWT token security',
        'React PWA mobile portal with Android viewport optimization'
      ],
      tags: ['Python', 'FastAPI', 'Spring Boot', 'React', 'Streamlit', 'JWT'],
      repoUrl: 'https://github.com/klu2300030639/SmartHealthcare'
    },
    {
      id: 'smartkyc',
      title: 'SmartKYC PAN & Aadhaar Validation',
      category: 'devops',
      description: 'Enterprise offline identity validation system running real-time Verhoeff checksum algorithms, regex PAN formatters, OCR image scanning, and zero-config SQLite database fallback.',
      highlights: [
        'Verhoeff dihedral D5 checksum validation algorithm',
        'Transparent SQLite DB auto-seeding & connection pooling',
        'Automated GitHub Actions keep-alive ping workflow'
      ],
      tags: ['Python', 'Streamlit', 'SQLite', 'OCR', 'Algorithms'],
      repoUrl: 'https://github.com/klu2300030639/SmartKYC-PAN-Aadhaar-Validation'
    },
    {
      id: 'smarthire',
      title: 'SmartHire AI Talent Acquisition Engine',
      category: 'ai',
      description: 'Automated candidate ranking and resume parsing platform utilizing natural language processing (NLP) to parse resume PDFs and match candidates against job descriptions.',
      highlights: [
        'TF-IDF & cosine similarity candidate scoring',
        'PDF/Docx resume parser with skill extraction',
        'Interactive recruiter dashboard & applicant tracking'
      ],
      tags: ['Python', 'NLP', 'Streamlit', 'Machine Learning'],
      repoUrl: 'https://github.com/klu2300030639/SmartHire'
    },
    {
      id: 'its-yolov8',
      title: 'Intelligent Transportation System (YOLOv8)',
      category: 'ai',
      description: 'Real-time vehicle detection and smart traffic flow monitoring neural network trained on the BDD100K dataset using YOLOv8s architecture for smart city applications.',
      highlights: [
        'Real-time traffic object detection & velocity estimation',
        'Trained on 100K driving video frames (BDD100K)',
        'OpenCV video stream processing pipeline'
      ],
      tags: ['Jupyter', 'YOLOv8', 'PyTorch', 'OpenCV', 'Deep Learning'],
      repoUrl: 'https://github.com/klu2300030639/intelligent-transportation-system-using-deep-neural-networks'
    },
    {
      id: 'ticket-devops',
      title: 'Online Ticket Booking (Kubernetes & Ansible)',
      category: 'devops',
      description: 'Containerized high-availability ticket booking microservices architecture deployed with Docker, Kubernetes cluster orchestration, and automated Ansible playbooks.',
      highlights: [
        'Docker multi-container microservice setup',
        'Kubernetes ingress, deployments, and services',
        'Ansible playbook infrastructure automation'
      ],
      tags: ['Docker', 'Kubernetes', 'Ansible', 'DevOps', 'Microservices'],
      repoUrl: 'https://github.com/klu2300030639/Online-Ticket-Booking-Kubernetes-Ansible'
    }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <FolderGit2 size={16} /> Featured Engineering Systems
          </div>
          <h2 className="section-title">
            Architected <span className="gradient-text">Platforms & Applications</span>
          </h2>
          <p className="section-subtitle">
            Full-stack clinical portals, computer vision AI models, identity verification engines, and DevOps Kubernetes pipelines.
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack Web' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'devops', label: 'DevOps & Security' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeCategory === cat.id ? 'var(--primary)' : 'var(--bg-card)',
                  border: activeCategory === cat.id ? 'none' : '1px solid var(--border-color)',
                  color: activeCategory === cat.id ? '#fff' : 'var(--text-sub)',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>

        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '28px'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--primary-light)', background: 'rgba(99, 102, 241, 0.15)', padding: '4px 12px', borderRadius: 'var(--radius-pill)' }}>
                    {project.category.toUpperCase()}
                  </span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-sub)', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-sub)')}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', marginBottom: '22px', lineHeight: 1.6 }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--tertiary)', fontSize: '0.9rem' }}>▶</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-sub)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.88rem' }}
                >
                  <GithubIcon size={16} /> View GitHub Repository
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
