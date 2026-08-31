import { useState, useEffect, useRef } from 'react';
import { getFileIcon } from './fileUtils';

export default function CommandPalette({ files, onOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const results = files.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { setSelected(0); }, [query]);

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(i => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && results[selected]) onOpen(results[selected].name);
    if (e.key === 'Escape') onClose();
  };

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette-modal" onClick={e => e.stopPropagation()}>
        <div className="palette-search-wrap">
          <svg className="palette-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="Search files..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            spellCheck={false}
          />
          <span className="palette-esc">esc</span>
        </div>

        <div className="palette-results">
          {results.length === 0 && (
            <div className="palette-empty">No files matching "{query}"</div>
          )}
          {results.map((f, i) => (
            <button
              key={f.name}
              className={`palette-item ${selected === i ? 'palette-item--selected' : ''}`}
              onClick={() => onOpen(f.name)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="palette-item-icon">{getFileIcon(f.icon)}</span>
              <span className="palette-item-name">{f.name}</span>
              <span className="palette-item-path">src/{f.name}</span>
            </button>
          ))}
        </div>

        <div className="palette-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
