const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'Rust', 'SQL', 'R', 'HTML/CSS', 'JavaScript'],
  },
  {
    label: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'PySpark', 'XGBoost'],
  },
  {
    label: 'Web & Systems',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Salesforce (Apex, LWC, Agentforce)', 'Databricks', 'Firebase'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['AWS', 'Azure', 'Docker', 'Databricks Lakehouse'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Git / GitHub', 'CI/CD (GitHub Actions)', 'Linux / Unix'],
  },
];

const GROUP_COLORS = ['#82aaff', '#d4a1ff', '#b4e06a', '#ffaf6e', '#42d4f4'];

export default function SkillsFile() {
  return (
    <div className="skills-ui">
      <div className="skills-flat">
        {SKILL_GROUPS.map((g, gi) => (
          <div key={g.label} className="skills-flat-group">
            <div className="skills-flat-label" style={{ color: GROUP_COLORS[gi] }}>
              {g.label}
            </div>
            <div className="skills-flat-tags">
              {g.skills.map(s => (
                <span key={s} className="skills-flat-tag" style={{ '--tag-color': GROUP_COLORS[gi] }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
