import { useState, useEffect, useRef } from 'react';

const COMMANDS = {
  help: () => `Available commands:\n  help        Show this help message\n  whoami      About Shubham\n  ls          List portfolio sections\n  cat skills  Show top skills\n  git log     Show recent work history\n  clear       Clear the terminal`,
  whoami: () => `Hi! I'm Shubham, thanks for visiting my website :)`,
  ls: () => `src/\n├── about.jsx\n├── experience.json\n├── skills.ts\n├── projects.jsx\n└── contact.jsx\nREADME.md`,
  'cat skills': () => `Top Skills:\n  Languages:  Python, Java, C/C++, Rust, SQL\n  Frontend:   React, Node.js, Salesforce LWC\n  Cloud/Infra: AWS, Azure, Docker, Databricks\n  AI/ML:      TensorFlow, PyTorch, PySpark\n  DevOps:     Git, CI/CD, Linux/Unix`,
  'git log': () => `commit a1b2c3d  AWS SDE Intern (May–Aug 2026)\ncommit e4f5g6h  Robert Half SWE Intern (Jun 2025–May 2026)\ncommit i7j8k9l  Indiana Fever ML Lead (Aug 2024–May 2025)\ncommit m0n1o2p  Elastik Teams SWE Intern (Jun–Aug 2022)`,
  clear: () => '__CLEAR__',
};

const INTRO = [
  'shubham@portfolio:~$ ',
  'Welcome to Shubham\'s Portfolio Terminal.',
  'Type "help" for available commands.',
  '',
];

export default function TerminalPanel({ onClose }) {
  const [lines, setLines] = useState(INTRO);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const prompt = `shubham@portfolio:~$ ${input}`;
      let output;
      if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd]();
        if (result === '__CLEAR__') {
          setLines(INTRO);
          setInput('');
          return;
        }
        output = result;
      } else if (cmd === '') {
        output = null;
      } else {
        output = `bash: ${cmd}: command not found`;
      }
      setHistory(h => [cmd, ...h]);
      setHistIdx(-1);
      setLines(prev => [
        ...prev,
        prompt,
        ...(output ? output.split('\n') : []),
        '',
      ]);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }
  };

  return (
    <div className="ide-terminal">
      <div className="ide-terminal-header">
        <div className="ide-terminal-tabs">
          <span className="ide-terminal-tab ide-terminal-tab--active">TERMINAL</span>
          <span className="ide-terminal-tab">PROBLEMS</span>
          <span className="ide-terminal-tab">OUTPUT</span>
        </div>
        <div className="ide-terminal-actions">
          <button className="ide-terminal-btn" title="New Terminal">+</button>
          <button className="ide-terminal-btn" title="Split Terminal">⧉</button>
          <button className="ide-terminal-btn" title="Close" onClick={onClose}>×</button>
        </div>
      </div>

      <div
        className="ide-terminal-body"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className="ide-terminal-line">
            {line.startsWith('shubham@portfolio') ? (
              <>
                <span className="ide-terminal-user">shubham</span>
                <span className="ide-terminal-at">@</span>
                <span className="ide-terminal-host">portfolio</span>
                <span className="ide-terminal-colon">:</span>
                <span className="ide-terminal-path">~</span>
                <span className="ide-terminal-dollar">$</span>
                <span className="ide-terminal-cmd"> {line.split('$ ')[1]}</span>
              </>
            ) : (
              <span className="ide-terminal-output">{line}</span>
            )}
          </div>
        ))}

        {/* Live input line */}
        <div className="ide-terminal-line ide-terminal-input-line">
          <span className="ide-terminal-user">shubham</span>
          <span className="ide-terminal-at">@</span>
          <span className="ide-terminal-host">portfolio</span>
          <span className="ide-terminal-colon">:</span>
          <span className="ide-terminal-path">~</span>
          <span className="ide-terminal-dollar">$</span>
          <span className="ide-terminal-input-wrap">
            <input
              ref={inputRef}
              className="ide-terminal-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </span>
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}
