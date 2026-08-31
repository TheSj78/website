import { useState } from 'react';

// Shorthand for bolded impact text
const b = (text) => <strong className="exp-highlight">{text}</strong>;

const EXPERIENCES = [
  {
    role: 'SDE Intern',
    company: 'Amazon Web Services (AWS)',
    period: 'May 2026 – Aug 2026',
    location: 'Seattle, WA',
    type: 'Internship',
    color: '#FF9900',
    emoji: '☁️',
    points: [
      <span>Engineered an end-to-end conversation recap feature for Amazon Quick, cutting user context-recovery time from {b('2+ minutes')} to {b('a few seconds')} — with {b('0 idle compute overhead')}.</span>,
      <span>Built a modular fidelity testing framework in Python comparing live APIs (Outlook, Slack, Gmail) against digital twins across {b('70+ API actions')} to improve simulation accuracy by {b('32%')}.</span>,
      <span>Automated multi-target test loops in Rust, enabling rapid connector onboarding and reducing validation effort from {b('days to hours')}.</span>,
    ],
    tech: ['AWS', 'Python', 'Rust', 'Distributed Systems', 'API Testing'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Robert Half / Protiviti',
    period: 'Jun 2025 – May 2026',
    location: 'San Ramon, CA',
    type: 'Internship',
    color: '#e63946',
    emoji: '💼',
    points: [
      <span>Built an ML pipeline in Python and Salesforce Data Cloud, improving prediction accuracy from {b('72% → 86%')}.</span>,
      <span>Shipped {b('20+ Lightning Web Components')} and {b('40+ Apex classes')} across {b('30+ production tickets')} to enhance CRM functionality for consultants.</span>,
      <span>Engineered {b('4 autonomous AI agents')} via Agentforce to automate record creation and edits, reducing manual effort by {b('60%')}.</span>,
    ],
    tech: ['Salesforce', 'Python', 'Apex', 'LWC', 'Agentforce', 'ML'],
  },
  {
    role: 'Machine Learning Lead',
    company: 'Indiana Fever · The Data Mine',
    period: 'Aug 2024 – May 2025',
    location: 'Indianapolis, IN',
    type: 'Research / Industry',
    color: '#f59e0b',
    emoji: '🏀',
    points: [
      <span>Led development of supervised ML models (XGBoost, Random Forest) predicting WNBA player performance with {b('80% accuracy')}.</span>,
      <span>Cut model RMSE by {b('23%')} through hyperparameter tuning, ensemble methods, and feature importance analysis.</span>,
      <span>Architected a Databricks pipeline to clean, aggregate, and transform {b('500K+ player stats')} for downstream analytics.</span>,
    ],
    tech: ['Python', 'XGBoost', 'PySpark', 'Databricks', 'Feature Engineering'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Elastik Teams',
    period: 'Jun 2022 – Aug 2022',
    location: 'Remote',
    type: 'Internship',
    color: '#7c3aed',
    emoji: '⚡',
    points: [
      <span>Built RESTful APIs in Node.js / Express with OAuth 2.0, cutting login latency by {b('20%')} — backed by {b('98% test coverage')} across {b('30+ unit tests')}.</span>,
      <span>Redesigned microservices architecture and CI/CD pipelines, slashing deployment time from {b('1 hour to 10 minutes')}.</span>,
    ],
    tech: ['Node.js', 'Express', 'OAuth 2.0', 'CI/CD', 'REST APIs'],
  },
];

export default function ExperienceFile() {
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];

  return (
    <div className="exp-ui">
      {/* Left timeline */}
      <div className="exp-timeline">
        {EXPERIENCES.map((e, i) => (
          <button
            key={i}
            className={`exp-timeline-item ${active === i ? 'exp-timeline-item--active' : ''}`}
            style={{ '--exp-color': e.color }}
            onClick={() => setActive(i)}
          >
            <span className="exp-timeline-emoji">{e.emoji}</span>
            <div className="exp-timeline-info">
              <span className="exp-timeline-company">{e.company}</span>
              <span className="exp-timeline-period">{e.period}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Right detail */}
      <div className="exp-detail" style={{ '--exp-color': exp.color }}>
        <div className="exp-detail-header">
          <span className="exp-detail-emoji">{exp.emoji}</span>
          <div>
            <h2 className="exp-detail-role">{exp.role}</h2>
            <div className="exp-detail-company">{exp.company}</div>
            <div className="exp-detail-meta">
              <span>{exp.period}</span>
              <span>·</span>
              <span>{exp.location}</span>
              <span className="exp-type-badge">{exp.type}</span>
            </div>
          </div>
        </div>

        <div className="exp-detail-divider" />

        <ul className="exp-bullets">
          {exp.points.map((p, i) => (
            <li key={i} className="exp-bullet">
              <span className="exp-bullet-dot" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="exp-tech-row">
          {exp.tech.map(t => (
            <span key={t} className="exp-tech-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
