import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cheeto.css';

interface Project {
  id: number;
  name: string;
  type: string;
  color: string;
}

function Cheeto(): JSX.Element {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<Project | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);
  const touched = useRef<Project | null>(null);

  const handleHover = (proj: Project) => {
    touched.current = proj;
    setHovered(proj);
  };

  const handleTouch = (proj: Project) => {
    if (touched.current?.id === proj.id) {
      handleClick(proj);
    } else {
      touched.current = proj;
      setHovered(proj);
    }
  };

  const handleClick = (proj: Project) => {
    if (touched.current?.id === proj.id) {
      const id = proj.id;
      setClicked(id);
      setTimeout(() => {
        navigate(id !== 4 ? `/proj/${id}` : '/about-me/');
      }, 200);
    }
  };

  const handleEnd = () => {
    touched.current = null;
    setHovered(null);
  };

  const projs: Project[] = [
    { id: 1, name: 'ATLAS', type: 'PROJ', color: '#5F85DB' },
    { id: 2, name: 'SUBSTREAM', type: 'PROJ', color: '#a5d294' },
    { id: 3, name: 'THE GALLERY', type: 'PROJ', color: '#464646' },
    { id: 4, name: 'ABOUT ME', type: 'ABOUT', color: '#eb8242' },
  ];

  return (
    <div className={`cheeto-root ${clicked ? 'cheeto-root--clicked' : 'cheeto-root--visible'}`}>
      <h1
        className="cheeto-hub font-raleway-black"
        style={{
          color: hovered ? 'white' : '#e7a55e',
          mixBlendMode: hovered ? 'normal' : 'lighten',
          backgroundColor: hovered ? hovered.color : 'rgba(207, 83, 0, 0.3)',
          transform: clicked ? 'translateY(-3px)' : undefined,
        }}
      >
        JS
      </h1>

      <div
        className="cheeto-grid animate-spin-slow"
        style={{ animationPlayState: hovered ? 'paused' : 'running' }}
      >
        {projs.map((proj, index) => {
          const rotation =
            index === 0 ? 315 :
            index === 1 ? 45 :
            index === 2 ? 225 :
            135;

          const pathId = `curve-${proj.id}`;

          return (
            <div key={proj.id} className="cheeto-tile">
              <svg
                width="190"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                className="cheeto-svg animate-glow drop-shadow-wedge"
                onMouseEnter={() => handleHover(proj)}
                onMouseLeave={handleEnd}
                onTouchStart={() => handleTouch(proj)}
                onTouchEnd={handleEnd}
                onClick={() => handleClick(proj)}
                style={{
                  animationPlayState: hovered ? 'paused' : 'running',
                  transform: `rotate(${rotation}deg)${clicked === proj.id ? ' translateY(-3px)' : ''}`,
                }}
              >
                <path
                  d="M 30 80 Q 95 10 160 80 M"
                  id={pathId}
                  stroke={hovered?.id === proj.id ? proj.color : 'rgba(207, 83, 0, 0.3)'}
                  strokeWidth="48"
                  fill="transparent"
                  strokeLinecap="round"
                  className="drop-shadow-wedge animate-bounce"
                  style={{ animationPlayState: hovered ? 'paused' : 'running' }}
                />
                {!hovered ? (
                  <text
                    fill="#e7a55e"
                    fontSize="18"
                    textAnchor="middle"
                    className="animate-slow-fade"
                    style={{
                      letterSpacing: '0.2em',
                      fontWeight: '700',
                      fontFamily: 'Raleway-Black, sans-serif',
                      mixBlendMode: 'lighten',
                    }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      alignmentBaseline="middle"
                    >
                      {proj.name}
                    </textPath>
                  </text>
                ) : (
                  <text
                    fill="white"
                    fontSize="18"
                    textAnchor="middle"
                    style={{
                      opacity: hovered?.id === proj.id ? 1 : 0,
                      letterSpacing: '0.2em',
                      fontWeight: '700',
                      fontFamily: 'Raleway-Black, sans-serif',
                    }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      alignmentBaseline="middle"
                    >
                      {hovered.name}
                    </textPath>
                  </text>
                )}
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cheeto;
