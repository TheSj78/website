import { useState } from 'react';

const EXPERIENCES = [
  { role: 'SDE Intern', company: 'Amazon Web Services (AWS)', period: 'May 2026 – Aug 2026', color: '#FF9900', initials: 'AWS',
    points: ['Engineered a conversation recap feature for Amazon Quick, cutting context-recovery time by 2+ minutes with 0 idle compute overhead.', 'Built a fidelity testing framework in Python across 70+ API actions, improving simulation accuracy by 32%.', 'Automated multi-target test loops in Rust, reducing connector onboarding effort from days to hours.'] },
  { role: 'Software Engineering Intern', company: 'Robert Half / Protiviti', period: 'Jun 2025 – May 2026', color: '#e63946', initials: 'RH',
    points: ['Built an ML pipeline improving prediction accuracy from 72% to 86%.', 'Shipped 20+ LWCs and 40+ Apex classes for 30+ production tickets.', 'Engineered 4 autonomous AI agents via Agentforce, reducing effort by 60%.'] },
  { role: 'Machine Learning Lead', company: 'Indiana Fever · The Data Mine', period: 'Aug 2024 – May 2025', color: '#f59e0b', initials: 'IF',
    points: ['Led ML models (XGBoost, RF) for WNBA player performance at 80% accuracy.', 'Cut model RMSE by 23% via hyperparameter tuning and ensembling.', 'Built Databricks pipeline processing 500K+ player stats.'] },
  { role: 'Software Engineering Intern', company: 'Elastik Teams', period: 'Jun 2022 – Aug 2022', color: '#7c3aed', initials: 'ET',
    points: ['Built RESTful APIs in Node/Express with OAuth 2.0, cutting login latency 20% with 98% test coverage.', 'Redesigned CI/CD pipelines, reducing deployment time from 1 hr to 10 mins.'] },
];

const SKILLS = ['Python', 'Java', 'C/C++', 'Rust', 'SQL', 'R', 'HTML/CSS/JS', 'React', 'Node.js', 'Salesforce', 'AWS', 'Azure', 'Docker', 'Databricks', 'TensorFlow', 'PyTorch', 'PySpark', 'XGBoost', 'Git', 'CI/CD', 'Linux'];

const PROJECTS = [
  { title: 'Learnify', desc: 'Gemini-powered AI study helper — boosted productivity 60%', tech: ['React', 'Node.js', 'Gemini API'], github: 'https://github.com/TheSj78/learnify', demo: null },
  { title: 'Slingshot Sumo', desc: 'Real-time multiplayer physics game with WebSockets', tech: ['JavaScript', 'Socket.io', 'Canvas'], github: 'https://github.com/TheSj78/slingshot-sumo', demo: 'https://slingshot-sumo.onrender.com/' },
  { title: 'Tiler', desc: 'Strategic human vs AI puzzle game with adaptive bot', tech: ['TypeScript', 'React'], github: 'https://github.com/TheSj78/tiler', demo: 'https://tiler-orpin.vercel.app/' },
  { title: 'Sort-o-Matic', desc: 'AI garbage sorter — 85% accuracy, 3rd @ EcoHacks (600+ teams)', tech: ['Python', 'TensorFlow', 'Firebase'], github: 'https://github.com/TheSj78/sort-omatic', demo: null },
  { title: 'Compiler', desc: 'SimpleC → x86_64 compiler with semantic analysis', tech: ['C', 'Lex', 'Yacc', 'Assembly'], github: '', demo: '' },
  { title: 'Memory Allocator', desc: 'Custom malloc/free/calloc/realloc from scratch', tech: ['C', 'Linux/Unix'], github: '', demo: '' },
];

const NAV = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function MobileLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const [openExp, setOpenExp] = useState(0);
  const [bannerDismissed, setBannerDismissed] = useState(false);


  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <div className="mob-root">
      {!bannerDismissed && (
        <div className="mob-banner">
          <span className="mob-banner-icon">💻</span>
          <span className="mob-banner-text">
            This portfolio has an interactive desktop experience — open it on a laptop or desktop for the full IDE view.
          </span>
          <button className="mob-banner-close" onClick={() => setBannerDismissed(true)} aria-label="Dismiss">×</button>
        </div>
      )}
      {/* Nav */}
      <nav className="mob-nav">
        <a href="#mob-about" className="mob-nav-brand" onClick={e => { e.preventDefault(); scrollTo('mob-about'); }}>
          Shubham Jain
        </a>
        <button className="mob-hamburger" onClick={() => setNavOpen(p => !p)} aria-label="Menu">
          {navOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </nav>

      {navOpen && (
        <div className="mob-nav-dropdown">
          {NAV.map(n => (
            <button key={n} className="mob-nav-item" onClick={() => scrollTo(`mob-${n.toLowerCase()}`)}>
              {n}
            </button>
          ))}
          <a href="/resume/Shubham_Jain_Resume.pdf" target="_blank" rel="noreferrer" className="mob-nav-resume">
            Resume
          </a>
        </div>
      )}

      {/* Hero */}
      <section id="mob-about" className="mob-section mob-hero">
        <img src="/images/Shubham_Jain_pfp-min.JPG" alt="Shubham Jain" className="mob-avatar" />
        <h1 className="mob-name">Shubham Jain</h1>
        <p className="mob-role">Ex-SDE Intern @ AWS, Robert Half · CS &amp; AI @ Purdue</p>
        <p className="mob-bio">
          CS &amp; AI student at Purdue building scalable software, intelligent ML
          pipelines, and full-stack systems. Most recently at AWS on the Quick Suite team.
          Graduating December 2026.
        </p>
        <div className="mob-chips">
          <span className="mob-chip">3.80 GPA</span>
          <span className="mob-chip">5× Dean's List</span>
          <span className="mob-chip">Milpitas, CA</span>
        </div>
        <div className="mob-hero-links">
          <a href="https://github.com/TheSj78" target="_blank" rel="noreferrer" className="mob-hero-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/shubhamjain2005" target="_blank" rel="noreferrer" className="mob-hero-btn mob-hero-btn--li">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="/resume/Shubham_Jain_Resume.pdf" target="_blank" rel="noreferrer" className="mob-hero-btn mob-hero-btn--resume">
            Resume
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="mob-experience" className="mob-section">
        <h2 className="mob-section-title">Experience</h2>
        <div className="mob-exp-list">
          {EXPERIENCES.map((e, i) => (
            <div key={i} className="mob-exp-card" style={{ '--exp-color': e.color }}>
              <button className="mob-exp-header" onClick={() => setOpenExp(openExp === i ? -1 : i)}>
                <span className="mob-exp-badge" style={{ color: e.color, background: e.color + '18' }}>{e.initials}</span>
                <div className="mob-exp-summary">
                  <span className="mob-exp-role">{e.role}</span>
                  <span className="mob-exp-company">{e.company}</span>
                  <span className="mob-exp-period">{e.period}</span>
                </div>
                <span className="mob-exp-chevron">{openExp === i ? '▲' : '▼'}</span>
              </button>
              {openExp === i && (
                <ul className="mob-exp-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="mob-skills" className="mob-section">
        <h2 className="mob-section-title">Skills</h2>
        <div className="mob-skills-grid">
          {SKILLS.map(s => <span key={s} className="mob-skill-chip">{s}</span>)}
        </div>
      </section>

      {/* Projects */}
      <section id="mob-projects" className="mob-section">
        <h2 className="mob-section-title">Projects</h2>
        <div className="mob-projects-list">
          {PROJECTS.map(p => (
            <div key={p.title} className="mob-proj-card">
              <div className="mob-proj-header">
                <h3 className="mob-proj-title">{p.title}</h3>
                <div className="mob-proj-links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="mob-proj-link">GitHub</a>}
                  {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer" className="mob-proj-link mob-proj-link--demo">Demo</a>}
                </div>
              </div>
              <p className="mob-proj-desc">{p.desc}</p>
              <div className="mob-proj-tech">
                {p.tech.map(t => <span key={t} className="mob-proj-chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="mob-contact" className="mob-section">
        <h2 className="mob-section-title">Contact</h2>
        <div className="mob-contact-cards">
          <a href="mailto:zoom2shubham@gmail.com" className="mob-contact-card">
            zoom2shubham@gmail.com
          </a>
          <a href="https://github.com/TheSj78" target="_blank" rel="noreferrer" className="mob-contact-card">
            github.com/TheSj78
          </a>
          <a href="https://linkedin.com/in/shubhamjain2005" target="_blank" rel="noreferrer" className="mob-contact-card">
            linkedin.com/in/shubhamjain2005
          </a>
        </div>
      </section>

      <footer className="mob-footer">
        © {new Date().getFullYear()} Shubham Jain
      </footer>
    </div>
  );
}
