import React from 'react';
import { BarChart3, Trophy, Flame, Code2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const GithubStats: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section id="github" className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <BarChart3 size={16} /> Live GitHub Analytics
          </div>
          <h2 className="section-title">
            Open-Source <span className="gradient-text">Activity & Achievements</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-time GitHub activity metrics, language distributions, commit streaks, and trophies from user profile <strong style={{ color: '#fff' }}>klu2300030639</strong>.
          </p>
        </div>

        {/* Dynamic GitHub Metrics Dashboard */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          
          {/* Card 1: Overall Contribution Stats */}
          <div className="glass-card" style={{ padding: '28px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)' }}>
                <BarChart3 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Overall Contributions</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>@klu2300030639</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }} className="gradient-text">168+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>Total Contributions</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }} className="gradient-text-cyan">19+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>Public Repositories</div>
              </div>
            </div>

            <img
              src="https://github-readme-stats.vercel.app/api?username=klu2300030639&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
              alt="Sindiri Arayan GitHub Stats"
              style={{ width: '100%', borderRadius: '12px', display: 'block', marginTop: '12px' }}
              onError={handleImgError}
            />
          </div>

          {/* Card 2: Top Languages */}
          <div className="glass-card" style={{ padding: '28px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.15)', color: 'var(--secondary-light)' }}>
                <Code2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Top Languages</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Code Distribution</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
              {[
                { name: 'Python (FastAPI, OpenCV, PyTorch)', pct: 45, color: '#38BDF8' },
                { name: 'TypeScript / React', pct: 30, color: '#818CF8' },
                { name: 'Java (Spring Boot 3)', pct: 15, color: '#34D399' },
                { name: 'C++ & Systems Code', pct: 10, color: '#F59E0B' }
              ].map((lang, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: '#fff' }}>{lang.name}</span>
                    <span style={{ color: 'var(--text-dim)' }}>{lang.pct}%</span>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${lang.pct}%`, background: lang.color, borderRadius: '4px' }}></div>
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=klu2300030639&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top Languages"
              style={{ width: '100%', borderRadius: '12px', display: 'block', marginTop: '12px' }}
              onError={handleImgError}
            />
          </div>

        </div>

        {/* Second Row: Streaks & Trophies */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          
          {/* Card 3: Contribution Streak */}
          <div className="glass-card" style={{ padding: '28px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--tertiary)' }}>
                <Flame size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Streak & Consistency</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Active Commits</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--tertiary-light)', fontFamily: 'var(--font-heading)' }}>Active</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>Continuous Commits</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>Commit Reliability</div>
              </div>
            </div>

            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=klu2300030639&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              style={{ width: '100%', borderRadius: '12px', display: 'block', marginTop: '16px' }}
              onError={handleImgError}
            />
          </div>

          {/* Card 4: GitHub Achievements & Trophies */}
          <div className="glass-card" style={{ padding: '28px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                <Trophy size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>GitHub Badges & Trophies</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Open-Source Honors</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {['🏆 Quickdraw', '⚡ Arctic Code Vault Contributor', '🌟 Pull Shark', '🚀 Multi-Repo Builder', '🤖 AI Vision Specialist'].map((badge, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.82rem',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontWeight: 600
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <img
              src="https://github-profile-trophy.vercel.app/?username=klu2300030639&theme=tokyonight&no-frame=true&column=3"
              alt="GitHub Trophies"
              style={{ width: '100%', borderRadius: '12px', display: 'block', marginTop: '12px' }}
              onError={handleImgError}
            />
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://github.com/klu2300030639"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <GithubIcon size={18} /> Visit @klu2300030639 on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};
