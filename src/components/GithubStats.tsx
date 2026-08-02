import React from 'react';
import { BarChart3, Trophy, Flame } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const GithubStats: React.FC = () => {
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <BarChart3 size={18} color="var(--primary-light)" /> Overall Contribution Stats
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=klu2300030639&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
              alt="Sindiri Arayan GitHub Stats"
              style={{ width: '100%', maxWidth: '420px', borderRadius: '12px' }}
            />
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Flame size={18} color="var(--secondary-light)" /> Top Languages & Technologies
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=klu2300030639&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top Languages"
              style={{ width: '100%', maxWidth: '420px', borderRadius: '12px' }}
            />
          </div>

        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Flame size={18} color="var(--tertiary)" /> Contribution Streak Counter
            </h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=klu2300030639&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
            />
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Trophy size={18} color="#f59e0b" /> GitHub Trophies
            </h3>
            <img
              src="https://github-profile-trophy.vercel.app/?username=klu2300030639&theme=tokyonight&no-frame=true&column=3"
              alt="GitHub Trophies"
              style={{ width: '100%', maxWidth: '450px' }}
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

