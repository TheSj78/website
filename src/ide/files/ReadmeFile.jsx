export default function ReadmeFile() {
  return (
    <div className="file-readme">
      <div className="readme-body">
        <div className="readme-hero">
          <img src="/images/Shubham_Jain_pfp-min.JPG" alt="Shubham Jain" className="readme-avatar" />
          <div>
            <h1 className="readme-h1">Hi, I'm <span className="readme-name">Shubham Jain</span></h1>
            <p className="readme-tagline">Ex-SDE Intern @ AWS, Robert Half · CS &amp; AI @ Purdue</p>
            <div className="readme-badges">
              <span className="readme-badge readme-badge--blue">Purdue University</span>
              <span className="readme-badge readme-badge--green">Graduating Dec 2026</span>
              <span className="readme-badge readme-badge--purple">Open to Full-Time</span>
            </div>
          </div>
        </div>

        <hr className="readme-hr" />

        <h2 className="readme-h2">About This Portfolio</h2>
        <p className="readme-p">
          Welcome — this portfolio is built as a VSCode IDE simulation. Navigate the file tree on
          the left, open tabs, use <code className="readme-code">Cmd+P</code> to search files, and
          explore from the terminal below.
        </p>

        <h2 className="readme-h2">File Structure</h2>
        <div className="readme-code-block">
          <div className="readme-code-header"><span>bash</span></div>
          <pre className="readme-pre">{`shubham-jain/
├── README.md           ← You are here
└── src/
    ├── about.jsx       ← Who I am
    ├── experience.json ← Work history
    ├── skills.ts       ← Technical skills
    ├── projects.jsx    ← Things I've built
    └── contact.jsx     ← Let's connect`}</pre>
        </div>

        <h2 className="readme-h2">Quick Start</h2>
        <div className="readme-code-block">
          <div className="readme-code-header"><span>bash</span></div>
          <pre className="readme-pre">{`# Try these in the terminal below:
$ whoami
$ ls
$ cat skills
$ git log
$ help`}</pre>
        </div>

        <h2 className="readme-h2">Contact</h2>
        <p className="readme-p">
          <a href="mailto:zoom2shubham@gmail.com" className="readme-link">zoom2shubham@gmail.com</a>
          {' · '}
          <a href="https://linkedin.com/in/shubhamjain2005" target="_blank" rel="noreferrer" className="readme-link">LinkedIn</a>
          {' · '}
          <a href="https://github.com/TheSj78" target="_blank" rel="noreferrer" className="readme-link">GitHub</a>
        </p>

        <hr className="readme-hr" />
        <p className="readme-footer-note">Built with React · Tokyo Night theme · Deployed on Vercel</p>
      </div>
    </div>
  );
}
