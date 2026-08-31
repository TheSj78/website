import { getFileIcon } from './fileUtils';

export default function TabBar({ tabs, activeTab, files, onTabClick, onTabClose }) {
  return (
    <div className="ide-tabbar">
      {tabs.map(filename => {
        const file = files.find(f => f.name === filename);
        const isActive = activeTab === filename;
        return (
          <button
            key={filename}
            className={`ide-tab ${isActive ? 'ide-tab--active' : ''}`}
            onClick={() => onTabClick(filename)}
          >
            <span className="ide-tab-icon">{file ? getFileIcon(file.icon) : '📄'}</span>
            <span className="ide-tab-name">{filename}</span>
            <span
              className="ide-tab-close"
              role="button"
              aria-label={`Close ${filename}`}
              onClick={(e) => { e.stopPropagation(); onTabClose(filename); }}
            >
              ×
            </span>
          </button>
        );
      })}
    </div>
  );
}
