import { useState, useEffect, useCallback } from 'react';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import EditorPane from './EditorPane';
import TerminalPanel from './TerminalPanel';
import StatusBar from './StatusBar';
import CommandPalette from './CommandPalette';
import MobileLayout from './MobileLayout';

const DEFAULT_FILE = 'README.md';

export const ALL_FILES = [
  { name: 'about.jsx',       lang: 'JSX',  icon: 'jsx',  section: 'src' },
  { name: 'experience.json', lang: 'JSON', icon: 'json', section: 'src' },
  { name: 'skills.ts',       lang: 'TS',   icon: 'ts',   section: 'src' },
  { name: 'projects.jsx',    lang: 'JSX',  icon: 'jsx',  section: 'src' },
  { name: 'contact.jsx',     lang: 'JSX',  icon: 'jsx',  section: 'src' },
  { name: 'README.md',       lang: 'MD',   icon: 'md',   section: 'root' },
];

export default function IDELayout() {
  const [openTabs, setOpenTabs]     = useState([DEFAULT_FILE]);
  const [activeTab, setActiveTab]   = useState(DEFAULT_FILE);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [activeActivity, setActiveActivity] = useState('explorer');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openFile = useCallback((filename) => {
    setOpenTabs(prev => prev.includes(filename) ? prev : [...prev, filename]);
    setActiveTab(filename);
  }, []);

  const closeTab = useCallback((filename) => {
    setOpenTabs(prev => {
      const next = prev.filter(f => f !== filename);
      if (activeTab === filename) {
        const idx = prev.indexOf(filename);
        setActiveTab(next[Math.min(idx, next.length - 1)] ?? null);
      }
      return next;
    });
  }, [activeTab]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key === 'w')              { e.preventDefault(); if (activeTab) closeTab(activeTab); }
      if (mod && (e.key === 'p' || e.key === 'k')) { e.preventDefault(); setPaletteOpen(true); }
      if (mod && e.shiftKey && e.key === 'E') { e.preventDefault(); setSidebarOpen(p => !p); }
      if (mod && e.key === '`')              { e.preventDefault(); setTerminalOpen(p => !p); }
      if (e.key === 'Escape')               setPaletteOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeTab, closeTab]);

  const activeFile = ALL_FILES.find(f => f.name === activeTab);

  if (isMobile) return <MobileLayout />;

  return (
    <div className="ide-root">
      {paletteOpen && (
        <CommandPalette
          files={ALL_FILES}
          onOpen={(f) => { openFile(f); setPaletteOpen(false); }}
          onClose={() => setPaletteOpen(false)}
        />
      )}

      <TitleBar
        activeFile={activeFile}
        onRed={() => { if (activeTab) closeTab(activeTab); }}
        onYellow={() => setTerminalOpen(p => !p)}
        onGreen={() => setSidebarOpen(p => !p)}
      />

      <div className="ide-body">
        <ActivityBar
          active={activeActivity}
          onSelect={(id) => {
            if (id === activeActivity) setSidebarOpen(p => !p);
            else { setActiveActivity(id); setSidebarOpen(true); }
          }}
          onPalette={() => setPaletteOpen(true)}
        />

        {sidebarOpen && (
          <Sidebar
            files={ALL_FILES}
            activeFile={activeTab}
            openTabs={openTabs}
            onFileClick={openFile}
          />
        )}

        <div className="ide-editor-area">
          <TabBar
            tabs={openTabs}
            activeTab={activeTab}
            files={ALL_FILES}
            onTabClick={setActiveTab}
            onTabClose={closeTab}
          />
          <div className="ide-content-split">
            <EditorPane activeFile={activeTab} />
            {terminalOpen && <TerminalPanel onClose={() => setTerminalOpen(false)} />}
          </div>
        </div>
      </div>

      <StatusBar
        activeFile={activeFile}
        terminalOpen={terminalOpen}
        onToggleTerminal={() => setTerminalOpen(p => !p)}
        onOpenPalette={() => setPaletteOpen(true)}
      />
    </div>
  );
}
