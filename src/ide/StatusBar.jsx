import { getLangLabel } from './fileUtils';

export default function StatusBar({ activeFile, terminalOpen, onToggleTerminal, onOpenPalette }) {
  const lang = activeFile ? getLangLabel(activeFile.icon) : '';
  const now  = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="ide-statusbar">
      <div className="ide-statusbar-left">
        <span className="ide-statusbar-item ide-statusbar-item--git">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" style={{marginRight:4}}>
            <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.456 0L5.809 1.749l1.844 1.844a1.223 1.223 0 011.55 1.56l1.777 1.776a1.224 1.224 0 011.21 2.084 1.222 1.222 0 01-1.61-1.171 1.226 1.226 0 00-.346-.823L8.5 5.165v4.383a1.225 1.225 0 01.323 2.402 1.222 1.222 0 01-1.218-1.224c0-.29.097-.556.26-.768V5.065a1.226 1.226 0 01-.666-1.608L5.352 1.616l-5.05 5.05a1.03 1.03 0 000 1.457l6.986 6.987a1.03 1.03 0 001.456 0l6.954-6.954a1.03 1.03 0 000-1.457z"/>
          </svg>
          main
        </span>
        <span className="ide-statusbar-item">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:4}}>
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
          0 errors, 0 warnings
        </span>
      </div>

      <div className="ide-statusbar-right">
        <button className="ide-statusbar-item" onClick={onOpenPalette} title="Open Command Palette (⌘P)">
          shubham-jain
        </button>
        <button className="ide-statusbar-item" onClick={onToggleTerminal}>
          Terminal {terminalOpen ? '⌄' : '⌃'}
        </button>
        {lang && <span className="ide-statusbar-item">{lang}</span>}
        <span className="ide-statusbar-item">UTF-8</span>
        <span className="ide-statusbar-item">LF</span>
        <span className="ide-statusbar-item">{time}</span>
      </div>
    </div>
  );
}
