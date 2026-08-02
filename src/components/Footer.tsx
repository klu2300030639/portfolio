import React from 'react';
import { Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0',
      background: 'rgba(7, 9, 14, 0.95)',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-sub)', fontSize: '0.9rem' }}>
          <span>© {new Date().getFullYear()}</span>
          <strong style={{ color: '#fff' }}>Sindiri Arayan</strong>. Engineered with <Heart size={14} color="var(--tertiary)" style={{ display: 'inline', margin: '0 2px' }} /> in React & TypeScript.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a
            href="https://github.com/klu2300030639"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ color: 'var(--text-sub)', transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sindiri-arayan"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: 'var(--text-sub)', transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--secondary-light)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:aryansindiri115714@gmail.com"
            title="Email"
            style={{ color: 'var(--text-sub)', transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.spoj.com/users/klu2300030639/"
            target="_blank"
            rel="noopener noreferrer"
            title="SPOJ"
            style={{ color: 'var(--text-sub)', transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
          >
            <Code2 size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};
