import { useRef, useCallback, useId } from 'react';
import './ChromaGrid.css';

export const ChromaCard = ({ item }) => {
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const borderRef = useRef(null);
  const id = useId().replace(/:/g, '');

  const RW = 342;
  const RH = 154;

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) cardRef.current.classList.add('chroma-active');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.classList.remove('chroma-active');
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !rectRef.current || !borderRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rectRef.current.setAttribute('x', x - RW / 2);
    rectRef.current.setAttribute('y', y - RH / 2);
    borderRef.current.style.left = `${x}px`;
    borderRef.current.style.top = `${y}px`;
  }, []);

  const handleClick = useCallback(() => {
    if (item?.url) window.open(item.url, '_blank', 'noopener,noreferrer');
  }, [item?.url]);

  const clipId = `clip-${id}`;
  const filterId = `gray-${id}`;

  return (
    <div
      ref={cardRef}
      className="chroma-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <svg className="chroma-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* grayscale + blur filter for the background image */}
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" result="blurred" />
            <feColorMatrix in="blurred" type="saturate" values="0" result="gray" />
            <feComponentTransfer in="gray">
              <feFuncR type="linear" slope="0.85" />
              <feFuncG type="linear" slope="0.85" />
              <feFuncB type="linear" slope="0.85" />
            </feComponentTransfer>
          </filter>

          {/* clipPath for the sharp color window */}
          <clipPath id={clipId}>
            <rect ref={rectRef} x="-999" y="-999" width={RW} height={RH} />
          </clipPath>
        </defs>

        {/* blurred grayscale layer — full image */}
        <image
          href={item?.image}
          x="0" y="0"
          width="100%" height="100%"
          preserveAspectRatio="xMidYMid slice"
          filter={`url(#${filterId})`}
        />

        {/* sharp full-color layer — clipped to rect */}
        <image
          href={item?.image}
          x="0" y="0"
          width="100%" height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
      </svg>

      <div ref={borderRef} className="chroma-rect-border" />
    </div>
  );
};

export default ChromaCard;