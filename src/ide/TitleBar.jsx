export default function TitleBar({ activeFile, onRed, onYellow, onGreen }) {
  return (
    <div className="ide-titlebar">
      <div className="ide-titlebar-controls">
        <button className="ide-dot ide-dot-red"    title="Close tab"       onClick={onRed}    aria-label="Close active tab" />
        <button className="ide-dot ide-dot-yellow" title="Toggle terminal"  onClick={onYellow} aria-label="Toggle terminal" />
        <button className="ide-dot ide-dot-green"  title="Toggle sidebar"   onClick={onGreen}  aria-label="Toggle sidebar" />
      </div>

      <div className="ide-titlebar-menu">
        {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map(m => (
          <span key={m} className="ide-menu-item">{m}</span>
        ))}
      </div>

      <div className="ide-titlebar-title">
        {activeFile ? `${activeFile.name} — shubham-jain` : 'shubham-jain — portfolio'}
      </div>

      <div className="ide-titlebar-spacer" />
    </div>
  );
}
