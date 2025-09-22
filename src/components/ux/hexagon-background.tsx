import React, { useState, useEffect, useRef } from 'react';

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

interface HexagonBackgroundProps {
  size?: number;
  spacing?: number;
  className?: string;
}

const HexagonBackground = ({ 
  size = 180, 
  spacing = 10,
  className = "" 
}: HexagonBackgroundProps) => {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState<{ 
    cols: number; 
    rows: number; 
    hexes: { key: string; cx: number; cy: number }[];
    containerRect: DOMRect | null;
  }>({ 
    cols: 0, 
    rows: 0, 
    hexes: [], 
    containerRect: null 
  });

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const hexWidth = Math.sqrt(3) * size + spacing;
      const hexHeight = 2 * size + spacing;

      // Usa as dimensões do container, não da janela
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const cols = Math.ceil(containerWidth / hexWidth) + 2; // +2 para garantir cobertura
      const rows = Math.ceil(containerHeight / (hexHeight * 0.75)) + 2;

      const hexes = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
          const cx = col * hexWidth + xOffset;
          const cy = row * hexHeight * 0.75;
          hexes.push({ key: `${row}-${col}`, cx, cy });
        }
      }
      setGrid({ cols, rows, hexes, containerRect });
    };

    updateGrid();

    // Recalcula quando a janela é redimensionada
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, [size, spacing]);

  const getHexagonPath = (cx: number, cy: number, s: number) => {
    const h = (Math.sqrt(3) / 2) * s;
    return `M ${cx} ${cy - s} L ${cx + h} ${cy - s / 2} L ${cx + h} ${cy + s / 2} L ${cx} ${cy + s} L ${cx - h} ${cy + s / 2} L ${cx - h} ${cy - s / 2} Z`;
  };

  // Função para verificar se o mouse está dentro do hexágono (relativo ao container)
  const isMouseInsideHexagon = (cx: number, cy: number, containerRect: DOMRect | null) => {
    if (!containerRect) return false;
    
    // Ajusta as coordenadas do mouse para serem relativas ao container
    const relativeMouseX = mousePosition.x - containerRect.left;
    const relativeMouseY = mousePosition.y - containerRect.top;

    const dx = relativeMouseX - cx;
    const dy = relativeMouseY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= size;
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    >
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
            const isHovered = isMouseInsideHexagon(cx, cy, grid.containerRect);

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