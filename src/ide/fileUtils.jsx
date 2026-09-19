// Returns a colored language badge icon for a given file type
export function getFileIcon(icon) {
  switch (icon) {
    case 'jsx': return <span className="file-icon file-icon--jsx">⚛</span>;
    case 'ts':  return <span className="file-icon file-icon--ts">TS</span>;
    case 'json':return <span className="file-icon file-icon--json">{'{}'}</span>;
    case 'md':  return <span className="file-icon file-icon--md">M↓</span>;
    case 'pdf': return <span className="file-icon file-icon--pdf">PDF</span>;
    default:    return <span className="file-icon file-icon--default">📄</span>;
  }
}

export function getLangLabel(icon) {
  switch (icon) {
    case 'jsx': return 'JSX';
    case 'ts':  return 'TypeScript';
    case 'json':return 'JSON';
    case 'md':  return 'Markdown';
    case 'pdf': return 'PDF';
    default:    return 'Text';
  }
}
