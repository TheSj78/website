import { useState } from 'react';

const PROJECTS = [
  {
    id: 'learnify',
    title: 'Learnify',
    shortDesc: 'Gemini-powered AI study helper',
    description: [
      'Architected an educational platform with custom prompt engineering for content generation.',
      'Integrated Google Gemini API with Node.js, automating study content creation and boosting productivity by 60%.',
      'Helped students create flashcards, study guides, and practice tests.',
    ],
    tech: ['React', 'Node.js', 'JavaScript', 'Google Gemini API'],
    github: 'https://github.com/TheSj78/learnify',
    demo: null,
    label: 'EDU',
    color: '#4fc1ff',
    status: 'shipped',
  },
  {
    id: 'slingshot-sumo',
    title: 'Slingshot Sumo',
    shortDesc: 'Real-time multiplayer physics game',
    description: [
      'Developed a real-time multiplayer physics-based web game with collision detection and player sync.',
      'Implemented a dynamic lobby system, randomized power-ups, and a shrinking arena.',
      'Engineered a scalable backend using Node.js and WebSockets for low-latency communication.',
    ],
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'HTML5 Canvas'],
    github: 'https://github.com/TheSj78/slingshot-sumo',
    demo: 'https://slingshot-sumo.onrender.com/',
    label: 'GAME',
    color: '#f97316',
    status: 'live',
  },
  {
    id: 'tiler',
    title: 'Tiler',
    shortDesc: 'Strategic human vs AI puzzle game',
    description: [
      'Designed a strategy game with multiple game modes and an interactive grid system.',
      'Engineered a responsive UI to visualize game states and valid moves seamlessly.',
      'Built AI bot logic that adapts to player moves at varying difficulty levels.',
    ],
    tech: ['TypeScript', 'React', 'CSS', 'Vercel'],
    github: 'https://github.com/TheSj78/tiler',
    demo: 'https://tiler-orpin.vercel.app/',
    label: 'GAME',
    color: '#818cf8',
    status: 'live',
  },
  {
    id: 'compiler',
    title: 'Compiler',
    shortDesc: 'SimpleC → x86_64 compiler in C',
    description: [
      'Built a full compiler for SimpleC using C, lex, and yacc for lexing and parsing.',
      'Engineered code generation translating ASTs into optimized x86_64 assembly.',
      'Implemented semantic analysis to catch type errors at compile time.',
    ],
    tech: ['C', 'Assembly', 'Lex', 'Yacc'],
    github: '',
    demo: '',
    label: 'SYS',
    color: '#a78bfa',
    status: 'academic',
  },
  {
    id: 'memory-allocator',
    title: 'Memory Allocator',
    shortDesc: 'Custom malloc / free in C from scratch',
    description: [
      'Reimplemented malloc, free, calloc, and realloc from scratch in C.',
      'Engineered efficient algorithms to minimize fragmentation and improve performance.',
      'Implemented memory coalescing to optimize space utilization.',
    ],
    tech: ['C', 'Systems Programming', 'Linux/Unix'],
    github: '',
    demo: '',
    label: 'SYS',
    color: '#34d399',
    status: 'academic',
  },
  {
    id: 'sort-o-matic',
    title: 'Sort-o-Matic',
    shortDesc: 'AI garbage sorting device — 3rd @ EcoHacks',
    description: [
      'Camera-based device that sorts trash/recycle/compost with 85% accuracy using CNNs.',
      'Developed a full-stack website to control the device with real-time analytics.',
      'Won 3rd place at EcoHacks competing against 600+ participants.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Firebase'],
    github: 'https://github.com/TheSj78/sort-omatic',
    demo: null,
    label: 'ML',
    color: '#2dd4bf',
    status: 'shipped',
  },
];

const STATUS_META = {
  live:     { label: 'LIVE',     cls: 'status-live' },
  shipped:  { label: 'SHIPPED',  cls: 'status-shipped' },
  academic: { label: 'ACADEMIC', cls: 'status-academic' },
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function ProjectsFile() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects-ui">
      <div className="projects-grid">
        {PROJECTS.map((p) => {
          const status = STATUS_META[p.status];
          const isActive = active === p.id;
          return (
            <div
              key={p.id}
              className={`proj-card ${isActive ? 'proj-card--active' : ''}`}
              style={{ '--proj-color': p.color }}
              onClick={() => setActive(isActive ? null : p.id)}
            >
              <div className="proj-card-top">
                <span className="proj-label-badge" style={{ color: p.color, background: p.color + '18', border: `1px solid ${p.color}33` }}>
                  {p.label}
                </span>
                <span className={`proj-status ${status.cls}`}>{status.label}</span>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-short">{p.shortDesc}</p>

              {isActive && (
                <div className="proj-detail">
                  <ul className="proj-bullets">
                    {p.description.map((d, i) => (
                      <li key={i}><span className="proj-bullet-dot" />{d}</li>
                    ))}
                  </ul>
                  <div className="proj-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" onClick={e => e.stopPropagation()}>
                        <GithubIcon /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link proj-link--demo" onClick={e => e.stopPropagation()}>
                        ↗ Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="proj-tech-row">
                {p.tech.map(t => <span key={t} className="proj-tech-chip">{t}</span>)}
              </div>

              <div className="proj-expand-hint">{isActive ? '▲ collapse' : '▼ expand'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
