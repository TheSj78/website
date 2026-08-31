export default function WelcomeScreen() {
  return (
    <div className="ide-welcome">
      <div className="ide-welcome-logo">⚛</div>
      <h1 className="ide-welcome-title">Shubham Jain — Portfolio</h1>
      <p className="ide-welcome-sub">Select a file from the sidebar to get started.</p>
      <div className="ide-welcome-shortcuts">
        <div className="ide-shortcut"><kbd>⌘</kbd><kbd>P</kbd><span>Quick Open</span></div>
        <div className="ide-shortcut"><kbd>⌘</kbd><kbd>⇧</kbd><kbd>E</kbd><span>Explorer</span></div>
        <div className="ide-shortcut"><kbd>⌃</kbd><kbd>`</kbd><span>Terminal</span></div>
      </div>
    </div>
  );
}
