const RESUME_URL = '/resume/Shubham_Jain_Resume.pdf';

export default function ResumeFile({ onOpenExternal }) {
  return (
    <div className="resume-file-ui">
      <div className="resume-file-toolbar">
        <span className="resume-file-name">Shubham_Jain_Resume.pdf</span>
        <button
          className="resume-file-btn"
          onClick={onOpenExternal}
          title="Close this tab and open PDF in browser"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Open in new tab
        </button>
        <a
          href={RESUME_URL}
          download="Shubham_Jain_Resume.pdf"
          className="resume-file-btn resume-file-btn--dl"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </a>
      </div>
      <iframe
        src={RESUME_URL + '#toolbar=1&navpanes=0'}
        className="resume-file-iframe"
        title="Shubham Jain Resume"
      />
    </div>
  );
}
