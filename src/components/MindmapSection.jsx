import React, { useState, useRef } from 'react';
import { APP_DATA } from '../data/marxismData';

export const MindmapSection = ({ onSelectNode }) => {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });

  const categoryColors = {
    root: { fill: '#ef4444', stroke: '#f59e0b', radius: 26 },
    branch1: { fill: '#3b82f6', stroke: '#60a5fa', radius: 18 },
    branch2: { fill: '#f59e0b', stroke: '#fbbf24', radius: 18 },
    branch3: { fill: '#10b981', stroke: '#34d399', radius: 18 },
    branch4: { fill: '#8b5cf6', stroke: '#a78bfa', radius: 18 }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startRef.current = {
      x: e.clientX - translateX,
      y: e.clientY - translateY
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTranslateX(e.clientX - startRef.current.x);
    setTranslateY(e.clientY - startRef.current.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((prev) => Math.min(Math.max(0.5, prev * zoomFactor), 2.5));
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev * 1.25, 2.5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev / 1.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const { nodes, links } = APP_DATA.mindmapData;

  return (
    <section id="mindmap-section" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trực quan hóa</span>
          <h2 className="section-title">Sơ Đồ Tư Duy Động (Interactive Mindmap)</h2>
          <p className="section-desc">Kéo rê canvas, cuộn chuột để Zoom và nhấp vào từng Nút sơ đồ để tra cứu chi tiết</p>
        </div>

        <div className="mindmap-container">
          <div className="mindmap-controls">
            <button className="mm-btn" onClick={handleZoomIn} title="Phóng to">
              <i className="fas fa-search-plus"></i>
            </button>
            <button className="mm-btn" onClick={handleZoomOut} title="Thu nhỏ">
              <i className="fas fa-search-minus"></i>
            </button>
            <button className="mm-btn" onClick={handleReset} title="Đặt lại vị trí">
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>

          <svg
            id="mindmap-svg"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <g transform={`translate(${translateX}, ${translateY}) scale(${scale})`}>
              {/* Render Links */}
              {links.map((link, idx) => {
                const sourceNode = nodes.find(n => n.id === link.source);
                const targetNode = nodes.find(n => n.id === link.target);

                if (!sourceNode || !targetNode) return null;

                const dx = targetNode.x - sourceNode.x;
                const dy = targetNode.y - sourceNode.y;
                const cx1 = sourceNode.x + dx * 0.5;
                const cy1 = sourceNode.y;
                const cx2 = sourceNode.x + dx * 0.5;
                const cy2 = targetNode.y;
                const pathD = `M ${sourceNode.x} ${sourceNode.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${targetNode.x} ${targetNode.y}`;

                return (
                  <path
                    key={idx}
                    d={pathD}
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="2"
                    fill="none"
                  />
                );
              })}

              {/* Render Nodes */}
              {nodes.map(node => {
                const style = categoryColors[node.category] || categoryColors.branch1;

                return (
                  <g
                    key={node.id}
                    className="mindmap-node"
                    transform={`translate(${node.x}, ${node.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectNode(node);
                    }}
                  >
                    <circle
                      r={style.radius}
                      fill={style.fill}
                      stroke={style.stroke}
                      strokeWidth="3"
                      className="node-circle"
                    />
                    <text
                      className="node-text"
                      textAnchor="middle"
                      dy={style.radius + 16}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
