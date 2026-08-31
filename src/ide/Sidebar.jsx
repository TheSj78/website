import { useState } from 'react';
import { getFileIcon } from './fileUtils';

const ROOT_FILES = ['README.md'];
const SRC_FILES  = ['about.jsx', 'experience.json', 'skills.ts', 'projects.jsx', 'contact.jsx'];

function FolderIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style={{color:'#7aa2f7', flexShrink:0}}>
      <path d="M1 3.5A1.5 1.5 0 012.5 2H6l1.5 2H13.5A1.5 1.5 0 0115 5.5v7A1.5 1.5 0 0113.5 14h-11A1.5 1.5 0 011 12.5v-9z"/>
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style={{color:'#7aa2f7', flexShrink:0}}>
      <path d="M1 3.5A1.5 1.5 0 012.5 2H6l1.5 2H13.5A1.5 1.5 0 0115 5.5v7A1.5 1.5 0 0113.5 14h-11A1.5 1.5 0 011 12.5v-9z" opacity=".6"/>
    </svg>
  );
}

export default function Sidebar({ files, activeFile, openTabs, onFileClick }) {
  const [srcOpen, setSrcOpen] = useState(true);
  const [rootOpen, setRootOpen] = useState(true);
  const [editorsOpen, setEditorsOpen] = useState(true);

  const renderFile = (filename) => {
    const file = files.find(f => f.name === filename);
    if (!file) return null;
    const isActive = activeFile === filename;
    const isOpen   = openTabs.includes(filename);
    return (
      <button
        key={filename}
        className={`ide-filetree-item ${isActive ? 'ide-filetree-item--active' : ''}`}
        onClick={() => onFileClick(filename)}
      >
        <span className="ide-filetree-icon">{getFileIcon(file.icon)}</span>
        <span className="ide-filetree-name">{filename}</span>
        {isOpen && !isActive && <span className="ide-filetree-dot" />}
      </button>
    );
  };

  return (
    <div className="ide-sidebar">
      <div className="ide-sidebar-header">EXPLORER</div>

      <div className="ide-sidebar-section">
        <button className="ide-sidebar-section-title" onClick={() => setRootOpen(p => !p)}>
          <span className={`ide-chevron ${rootOpen ? 'ide-chevron--open' : ''}`}>›</span>
          SHUBHAM-JAIN
        </button>
        {rootOpen && (
          <div className="ide-filetree">
            {ROOT_FILES.map(renderFile)}

            <button className="ide-filetree-folder" onClick={() => setSrcOpen(p => !p)}>
              <span className={`ide-chevron ${srcOpen ? 'ide-chevron--open' : ''}`}>›</span>
              <FolderIcon open={srcOpen} />
              <span style={{marginLeft:4}}>src</span>
            </button>
            {srcOpen && (
              <div className="ide-filetree-indent">
                {SRC_FILES.map(renderFile)}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="ide-sidebar-section">
        <button className="ide-sidebar-section-title" onClick={() => setEditorsOpen(p => !p)}>
          <span className={`ide-chevron ${editorsOpen ? 'ide-chevron--open' : ''}`}>›</span>
          OPEN EDITORS
        </button>
        {editorsOpen && (
          <div className="ide-filetree">
            {openTabs.map(renderFile)}
          </div>
        )}
      </div>
    </div>
  );
}
