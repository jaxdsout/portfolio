import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { projects } from '../../constants/project';
import Nav from '../nav/Nav';
import './project.css';

function Project(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id] : null;
  const title = project?.title ?? '';
  const github = project?.github ?? '';
  const deploy = project?.deploy;
  const thumbnail = project?.thumbnail ?? '';
  const accent = project?.accent ?? '';

  const content = project ? (
    <>
      {project.body.map((paragraph, i) => (
        <p key={i} className="content-body">{paragraph}</p>
      ))}
    </>
  ) : null;

  return (
    <AnimatePresence>
      <motion.div className="project-wrapper" style={{ zIndex: 4 }}>
        <Nav title={title} accent={accent} github={github} deploy={deploy} />
        <div className="project-layout">
          <div className="project-thumbnail-wrapper">
            <img
              src={thumbnail}
              className="project-thumbnail"
              alt="thumbnail"
              onDoubleClick={() => deploy && window.open(deploy)}
              onClick={() => deploy && window.open(deploy)}
            />
          </div>
          <div className="project-text-panel">
            <div className="project-scroll-area">
              {content}
            </div>
            <hr className="project-divider" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Project;
