
import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

const HexagonBackground = () => {
  const mousePosition = useMousePosition();
  const [grid, setGrid] = useState<{ cols: number; rows: number; hexes: { key: string; cx: number; cy: number }[] }>({ cols: 0, rows: 0, hexes: [] });

  const size = 180; // Hexágonos ainda maiores
  const spacing = 100; // Espaçamento proporcional maior

  useEffect(() => {
    const hexWidth = Math.sqrt(3) * size + spacing;
    const hexHeight = 2 * size + spacing;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const cols = Math.ceil(screenWidth / hexWidth) + 1;
    const rows = Math.ceil(screenHeight / (hexHeight * 0.75)) + 1;

    const hexes = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
        const cx = col * hexWidth + xOffset - hexWidth / 2;
        const cy = row * hexHeight * 0.75 - hexHeight / 2;
        hexes.push({ key: `${row}-${col}`, cx, cy });
      }
    }
    setGrid({ cols, rows, hexes });
  }, [size, spacing]);

  const getHexagonPath = (cx: number, cy: number, s: number) => {
    const h = (Math.sqrt(3) / 2) * s;
    return `M ${cx} ${cy - s} L ${cx + h} ${cy - s / 2} L ${cx + h} ${cy + s / 2} L ${cx} ${cy + s} L ${cx - h} ${cy + s / 2} L ${cx - h} ${cy - s / 2} Z`;
  };

  // Função para verificar se o mouse está dentro do hexágono
  const isMouseInsideHexagon = (cx: number, cy: number, mouseX: number, mouseY: number) => {
    const dx = mouseX - cx;
    const dy = mouseY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= size;
  };

  return (
    <div className="fixed inset-0 z-0 bg-background overflow-hidden">
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="led-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066a3" stopOpacity="0" />
            <stop offset="50%" stopColor="#0066a3" stopOpacity="1" />
            <stop offset="100%" stopColor="#0066a3" stopOpacity="0" />
            <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g>
          {grid.hexes.map(({ key, cx, cy }) => {
            const isHovered = isMouseInsideHexagon(cx, cy, mousePosition.x, mousePosition.y);

            return (
              <g key={key}>
                {/* Base hexagon */}
                <path
                  d={getHexagonPath(cx, cy, size)}
                  fill="transparent"
                  stroke="#BAD7F5"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                {/* LED effect apenas quando hover */}
                {isHovered && (
                  <path
                    d={getHexagonPath(cx, cy, size)}
                    fill="transparent"
                    stroke="url(#led-gradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default HexagonBackground;
