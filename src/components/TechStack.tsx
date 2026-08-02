import React, { useState } from 'react';
import { Layers, Terminal, Server, Layout, Cloud, Database } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'languages' | 'backend' | 'frontend' | 'devops' | 'databases';
  level: string;
  badgeColor: string;
  logo: string;
}

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const techItems: TechItem[] = [
    { name: 'Python', category: 'languages', level: 'Advanced / Primary', badgeColor: '#3776AB', logo: 'python' },
    { name: 'Java', category: 'languages', level: 'Enterprise OOP', badgeColor: '#ED8B00', logo: 'openjdk' },
    { name: 'JavaScript', category: 'languages', level: 'ES6+ Full-Stack', badgeColor: '#F7DF1E', logo: 'javascript' },
    { name: 'TypeScript', category: 'languages', level: 'Type-Safe App Dev', badgeColor: '#3178C6', logo: 'typescript' },
    { name: 'C++', category: 'languages', level: 'Data Structures & Algo', badgeColor: '#00599C', logo: 'cplusplus' },
    { name: 'SQL', category: 'languages', level: 'Relational Queries', badgeColor: '#4479A1', logo: 'postgresql' },

    { name: 'FastAPI', category: 'backend', level: 'Async High-Throughput', badgeColor: '#009688', logo: 'fastapi' },
    { name: 'Spring Boot', category: 'backend', level: 'Microservices & JWT', badgeColor: '#6DB33F', logo: 'springboot' },
    { name: 'PyTorch', category: 'backend', level: 'Deep Neural Networks', badgeColor: '#EE4C2C', logo: 'pytorch' },
    { name: 'YOLOv8', category: 'backend', level: 'Real-Time Vision AI', badgeColor: '#00FFFF', logo: 'ultralytics' },
    { name: 'OpenCV', category: 'backend', level: 'Image Processing & OCR', badgeColor: '#5C3EE8', logo: 'opencv' },
    { name: 'Node.js', category: 'backend', level: 'Runtime & APIs', badgeColor: '#339933', logo: 'nodedotjs' },

    { name: 'React', category: 'frontend', level: 'Component UI & PWA', badgeColor: '#61DAFB', logo: 'react' },
    { name: 'Streamlit', category: 'frontend', level: 'Rapid AI Apps', badgeColor: '#FF4B4B', logo: 'streamlit' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Glassmorphic Styling', badgeColor: '#E34F26', logo: 'html5' },

    { name: 'Docker', category: 'devops', level: 'Containerization', badgeColor: '#2496ED', logo: 'docker' },
    { name: 'Kubernetes', category: 'devops', level: 'Cluster Orchestration', badgeColor: '#326CE5', logo: 'kubernetes' },
    { name: 'Ansible', category: 'devops', level: 'Infrastructure Automation', badgeColor: '#EE0000', logo: 'ansible' },
    { name: 'GitHub Actions', category: 'devops', level: 'Automated CI/CD', badgeColor: '#2088FF', logo: 'githubactions' },
    { name: 'Linux', category: 'devops', level: 'System Administration', badgeColor: '#FCC624', logo: 'linux' },

    { name: 'MySQL', category: 'databases', level: 'Relational DB', badgeColor: '#4479A1', logo: 'mysql' },
    { name: 'SQLite', category: 'databases', level: 'Zero-Config Embedded', badgeColor: '#003B57', logo: 'sqlite' },
  ];

  const filteredItems = activeTab === 'all'
    ? techItems
    : techItems.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Technologies', icon: <Layers size={16} /> },
    { id: 'languages', label: 'Languages', icon: <Terminal size={16} /> },
    { id: 'backend', label: 'Backend & AI', icon: <Server size={16} /> },
    { id: 'frontend', label: 'Frontend & UX', icon: <Layout size={16} /> },
    { id: 'devops', label: 'Cloud & DevOps', icon: <Cloud size={16} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={16} /> },
  ];

  return (
    <section id="techstack" className="section-padding">
      <div className="container">
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>
              <Layers size={16} /> Technology Stack
            </div>
            <h2 className="section-title">
              Tools & <span className="gradient-text-cyan">Engineered Frameworks</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive inventory of programming languages, deep learning libraries, enterprise microservice frameworks, and DevOps infrastructure tools.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  background: activeTab === tab.id
                    ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
                    : 'var(--bg-card)',
                  border: activeTab === tab.id
                    ? 'none'
                    : '1px solid var(--border-color)',
                  color: activeTab === tab.id ? '#fff' : 'var(--text-sub)',
                  boxShadow: activeTab === tab.id ? '0 4px 20px var(--primary-glow)' : 'none'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid ' + item.badgeColor + '40',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 15px ${item.badgeColor}20`
              }}>
                <img
                  src={'https://cdn.simpleicons.org/' + item.logo}
                  alt={item.name}
                  style={{ width: '24px', height: '24px' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#fff' }}>
                  {item.name}
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {item.level}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

