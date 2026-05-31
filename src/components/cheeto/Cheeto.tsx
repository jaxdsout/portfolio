import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import { NavItem } from '../../store/types';
import './Cheeto.css';

function Cheeto(): JSX.Element {
  const { navItems } = useStore();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<NavItem | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);
  const touched = useRef<NavItem | null>(null);

  const handleHover = (item: NavItem) => {
    touched.current = item;
    setHovered(item);
  };

  const handleTouch = (item: NavItem) => {
    if (touched.current?.id === item.id) {
      handleClick(item);
    } else {
      touched.current = item;
      setHovered(item);
    }
  };

  const handleClick = (item: NavItem) => {
    if (touched.current?.id === item.id) {
      setClicked(item.id);
      setTimeout(() => {
        navigate(item.type !== 'ABOUT' ? `/proj/${item.id}` : '/about-me/');
      }, 200);
    }
  };

  const handleEnd = () => {
    touched.current = null;
    setHovered(null);
  };

  return (
    <div className={`cheeto-root ${clicked ? 'cheeto-root--clicked' : 'cheeto-root--visible'}`}>
      <h1
        className="cheeto-hub font-raleway-black"
        style={{
          color: hovered ? 'white' : '#e7a55e',
          mixBlendMode: hovered ? 'normal' : 'lighten',
          backgroundColor: hovered ? hovered.accent : 'rgba(207, 83, 0, 0.3)',
          transform: clicked ? 'translateY(-3px)' : undefined,
        }}
      >
        JS
      </h1>

      <div
        className="cheeto-grid animate-spin-slow"
        style={{ animationPlayState: hovered ? 'paused' : 'running' }}
      >
        {navItems.map((item, index) => {
          const rotation =
            index === 0 ? 315 :
              index === 1 ? 45 :
                index === 2 ? 225 :
                  135;

          const pathId = `curve-${item.id}`;

          return (
            <div key={item.id} className="cheeto-tile">
              <svg
                width="190"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                className="cheeto-svg animate-glow drop-shadow-wedge"
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={handleEnd}
                onTouchStart={() => handleTouch(item)}
                onTouchEnd={handleEnd}
                onClick={() => handleClick(item)}
                style={{
                  animationPlayState: hovered ? 'paused' : 'running',
                  transform: `rotate(${rotation}deg)${clicked === item.id ? ' translateY(-3px)' : ''}`,
                }}
              >
                <path
                  d="M 30 80 Q 95 10 160 80 M"
                  id={pathId}
                  stroke={hovered?.id === item.id ? item.accent : 'rgba(207, 83, 0, 0.3)'}
                  strokeWidth="48"
                  fill="transparent"
                  strokeLinecap="round"
                  className="drop-shadow-wedge animate-bounce"
                  style={{ animationPlayState: hovered ? 'paused' : 'running' }}
                />
                {!hovered ? (
                  <text
                    fill="#e7a55e"
                    fontSize="15"
                    textAnchor="middle"
                    className="animate-slow-fade"
                    style={{
                      letterSpacing: '0.2em',
                      fontWeight: '700',
                      fontFamily: 'Raleway, sans-serif',
                      mixBlendMode: 'lighten',
                    }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      alignmentBaseline="middle"
                    >
                      {item.title}
                    </textPath>
                  </text>
                ) : (
                  <text
                    fill="white"
                    fontSize="15"
                    textAnchor="middle"
                    style={{
                      opacity: hovered?.id === item.id ? 1 : 0,
                      letterSpacing: '0.2em',
                      fontWeight: '700',
                      fontFamily: 'Raleway, sans-serif',
                    }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      alignmentBaseline="middle"
                    >
                      {hovered.title}
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
