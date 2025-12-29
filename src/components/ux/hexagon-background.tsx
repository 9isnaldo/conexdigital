import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// Hook otimizado para posição do mouse com throttle
const useMousePosition = (throttleDelay = 32) => { // ~30fps
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateRef.current >= throttleDelay) {
        setMousePosition({ x: event.clientX, y: event.clientY });
        lastUpdateRef.current = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [throttleDelay]);

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
  
  // Estado otimizado - apenas o necessário
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  
  // Debounce para redimensionamento
  const resizeTimeoutRef = useRef<NodeJS.Timeout>();

  // Calcular dimensões do hexágono uma vez
  const hexDimensions = useMemo(() => {
    const hexWidth = Math.sqrt(3) * size + spacing;
    const hexHeight = 2 * size + spacing;
    return { hexWidth, hexHeight };
  }, [size, spacing]);

  // Função para obter o path do hexágono (memoizada)
  const getHexagonPath = useCallback((cx: number, cy: number, s: number) => {
    const h = (Math.sqrt(3) / 2) * s;
    return `M ${cx} ${cy - s} L ${cx + h} ${cy - s / 2} L ${cx + h} ${cy + s / 2} L ${cx} ${cy + s} L ${cx - h} ${cy + s / 2} L ${cx - h} ${cy - s / 2} Z`;
  }, []);

  // Calcular grid de hexágonos (memoizada)
  const hexGrid = useMemo(() => {
    if (!containerRect) return { hexes: [] };

    const { hexWidth, hexHeight } = hexDimensions;
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const cols = Math.ceil(containerWidth / hexWidth) + 2;
    const rows = Math.ceil(containerHeight / (hexHeight * 0.75)) + 2;

    const hexes: { key: string; cx: number; cy: number }[] = [];
    
    for (let row = 0; row < rows; row++) {
      const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
      for (let col = 0; col < cols; col++) {
        hexes.push({
          key: `${row}-${col}`,
          cx: col * hexWidth + xOffset,
          cy: row * hexHeight * 0.75
        });
      }
    }

    return { hexes };
  }, [containerRect, hexDimensions]);

  // Atualizar containerRect de forma eficiente
  useEffect(() => {
    const updateContainerRect = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    };

    updateContainerRect();

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(updateContainerRect, 100); // Debounce de 100ms
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Verificar hover apenas para hexágonos próximos ao mouse (otimizado)
  const hoveredHexKey = useMemo(() => {
    if (!containerRect || !mousePosition) return null;

    const relativeMouseX = mousePosition.x - containerRect.left;
    const relativeMouseY = mousePosition.y - containerRect.top;

    // Encontrar hexágono mais próximo sem percorrer todos
    const { hexWidth, hexHeight } = hexDimensions;
    
    // Estimar a posição aproximada do hexágono
    const approxCol = Math.floor(relativeMouseX / hexWidth);
    const approxRow = Math.floor(relativeMouseY / (hexHeight * 0.75));
    
    // Verificar apenas hexágonos em uma área 3x3 ao redor da posição estimada
    const searchRadius = 3;
    
    for (let row = approxRow - searchRadius; row <= approxRow + searchRadius; row++) {
      if (row < 0) continue;
      
      for (let col = approxCol - searchRadius; col <= approxCol + searchRadius; col++) {
        if (col < 0) continue;
        
        const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
        const cx = col * hexWidth + xOffset;
        const cy = row * hexHeight * 0.75;
        
        const dx = relativeMouseX - cx;
        const dy = relativeMouseY - cy;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= size) {
          return `${row}-${col}`;
        }
      }
    }
    
    return null;
  }, [mousePosition, containerRect, hexDimensions, size]);

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
            <animate 
              attributeName="x1" 
              from="-100%" 
              to="100%" 
              dur="2s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="x2" 
              from="0%" 
              to="200%" 
              dur="2s" 
              repeatCount="indefinite" 
            />
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
          {hexGrid.hexes.map(({ key, cx, cy }) => {
            const isHovered = key === hoveredHexKey;

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