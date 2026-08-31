import { useState } from 'react';

export default function AboutFile() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('zoom2shubham@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="about-ui">
      {/* Hero card */}
      <div className="about-hero">
        <div className="about-avatar-wrap">
          <img src="/images/Shubham_Jain_pfp-min.JPG" alt="Shubham Jain" className="about-avatar" />
          <span className="about-avatar-status" title="Available for opportunities" />
        </div>
        <div className="about-hero-text">
          <h1 className="about-name">Shubham Jain</h1>
          <p className="about-role">
            <span className="about-role-badge">Ex-SDE Intern @ AWS, Robert Half</span>
            <span className="about-role-sep">·</span>
            CS &amp; AI @ Purdue University
          </p>
          <p className="about-bio">
            I'm a Computer Science &amp; AI student at Purdue building scalable software,
            intelligent ML pipelines, and full-stack systems. Most recently at AWS on the
            Quick Suite team — graduating December 2026.
          </p>
          <div className="about-chips">
            <span className="about-chip">3.80 GPA</span>
            <span className="about-chip">West Lafayette, IN</span>
            <span className="about-chip">AWS · Azure · Databricks</span>
            <span className="about-chip">6× Dean's List & Semester Honors</span>
          </div>
        </div>
      </div>

      {/* Two-col */}
      <div className="about-cols">
        <div className="about-card">
          <div className="about-card-header">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <span className="about-card-title">Education</span>
          </div>
          <div className="about-edu-entry">
            <span className="about-edu-school">Purdue University</span>
            <span className="about-edu-deg">B.S. Computer Science</span>
            <span className="about-edu-deg">B.S. Artificial Intelligence</span>
            <span className="about-edu-deg">Minor in Mathematics</span>
            <span className="about-edu-meta">Expected Dec 2026 · GPA 3.80</span>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span className="about-card-title">Core Focus</span>
          </div>
          <div className="about-focus-list">
            {[
              'Full-Stack Engineering',
              'Machine Learning & AI',
              'Cloud & Scalable Systems',
              'Compiler & Systems Design',
            ].map(f => (
              <div className="about-focus-item" key={f}>
                <span className="about-focus-dot" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="about-links">
        <a href="https://github.com/TheSj78" target="_blank" rel="noreferrer" className="about-link-btn">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/shubhamjain2005" target="_blank" rel="noreferrer" className="about-link-btn about-link-btn--linkedin">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="/resume/Shubham_Jain_Resume.pdf" target="_blank" rel="noreferrer" className="about-link-btn about-link-btn--resume">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Resume
        </a>
        <button className="about-link-btn about-link-btn--copy" onClick={copy}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </div>
  );
}
