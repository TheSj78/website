import AboutFile from './files/AboutFile';
import ExperienceFile from './files/ExperienceFile';
import SkillsFile from './files/SkillsFile';
import ProjectsFile from './files/ProjectsFile';
import ContactFile from './files/ContactFile';
import ReadmeFile from './files/ReadmeFile';
import WelcomeScreen from './WelcomeScreen';

const FILE_MAP = {
  'about.jsx':       AboutFile,
  'experience.json': ExperienceFile,
  'skills.ts':       SkillsFile,
  'projects.jsx':    ProjectsFile,
  'contact.jsx':     ContactFile,
  'README.md':       ReadmeFile,
};

export default function EditorPane({ activeFile }) {
  if (!activeFile) return <WelcomeScreen />;

  const Component = FILE_MAP[activeFile];
  if (!Component) return <WelcomeScreen />;

  return (
    <div className="ide-editor-pane">
      {/* Breadcrumb */}
      <div className="ide-breadcrumb">
        <span className="ide-breadcrumb-seg">shubham-jain</span>
        <span className="ide-breadcrumb-sep">›</span>
        {activeFile.includes('.jsx') || activeFile.includes('.ts') || activeFile.includes('.json')
          ? <><span className="ide-breadcrumb-seg">src</span><span className="ide-breadcrumb-sep">›</span></>
          : null
        }
        <span className="ide-breadcrumb-seg ide-breadcrumb-seg--active">{activeFile}</span>
      </div>

      {/* Content */}
      <div className="ide-editor-scroll" data-file={activeFile}>
        <Component />
      </div>
    </div>
  );
}
