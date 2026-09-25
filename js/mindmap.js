/* 
  Interactive Mindmap Engine (SVG Render, Drag, Zoom & Modal Integration)
*/

class MindmapEngine {
  constructor(containerId, svgId, data) {
    this.container = document.getElementById(containerId);
    this.svg = document.getElementById(svgId);
    this.data = data;
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    this.init();
  }

  init() {
    if (!this.svg) return;
    this.render();
    this.bindEvents();
  }

  render() {
    this.svg.innerHTML = ''; // Clear

    // Create main viewport group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('id', 'viewport');
    g.setAttribute('transform', `translate(${this.translateX}, ${this.translateY}) scale(${this.scale})`);

    // Category Color Maps
    const categoryColors = {
      root: { fill: '#ef4444', stroke: '#f59e0b', radius: 26 },
      branch1: { fill: '#3b82f6', stroke: '#60a5fa', radius: 18 },
      branch2: { fill: '#f59e0b', stroke: '#fbbf24', radius: 18 },
      branch3: { fill: '#10b981', stroke: '#34d399', radius: 18 },
      branch4: { fill: '#8b5cf6', stroke: '#a78bfa', radius: 18 }
    };

    // Render Links first (behind nodes)
    this.data.links.forEach(link => {
      const sourceNode = this.data.nodes.find(n => n.id === link.source);
      const targetNode = this.data.nodes.find(n => n.id === link.target);

      if (sourceNode && targetNode) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // Smooth curved bezier line
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const cx1 = sourceNode.x + dx * 0.5;
        const cy1 = sourceNode.y;
        const cx2 = sourceNode.x + dx * 0.5;
        const cy2 = targetNode.y;

        const pathD = `M ${sourceNode.x} ${sourceNode.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${targetNode.x} ${targetNode.y}`;
        line.setAttribute('d', pathD);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('fill', 'none');
        g.appendChild(line);
      }
    });

    // Render Nodes
    this.data.nodes.forEach(node => {
      const style = categoryColors[node.category] || categoryColors.branch1;

      const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      nodeGroup.setAttribute('class', 'mindmap-node');
      nodeGroup.setAttribute('transform', `translate(${node.x}, ${node.y})`);
      nodeGroup.style.cursor = 'pointer';

      // Circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', style.radius);
      circle.setAttribute('fill', style.fill);
      circle.setAttribute('stroke', style.stroke);
      circle.setAttribute('stroke-width', '3');
      circle.setAttribute('class', 'node-circle');

      // Label Text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('class', 'node-text');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dy', style.radius + 16);
      text.textContent = node.label;

      nodeGroup.appendChild(circle);
      nodeGroup.appendChild(text);

      // Click event to show modal
      nodeGroup.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openNodeModal(node);
      });

      g.appendChild(nodeGroup);
    });

    this.svg.appendChild(g);
  }

  bindEvents() {
    // Zoom & Pan Events
    this.svg.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.startX = e.clientX - this.translateX;
      this.startY = e.clientY - this.translateY;
      this.svg.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.translateX = e.clientX - this.startX;
      this.translateY = e.clientY - this.startY;
      this.updateTransform();
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
      if (this.svg) this.svg.style.cursor = 'grab';
    });

    this.svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      this.scale = Math.min(Math.max(0.5, this.scale * zoomFactor), 2.5);
      this.updateTransform();
    }, { passive: false });
  }

  updateTransform() {
    const viewport = document.getElementById('viewport');
    if (viewport) {
      viewport.setAttribute('transform', `translate(${this.translateX}, ${this.translateY}) scale(${this.scale})`);
    }
  }

  zoomIn() {
    this.scale = Math.min(this.scale * 1.25, 2.5);
    this.updateTransform();
  }

  zoomOut() {
    this.scale = Math.max(this.scale / 1.25, 0.5);
    this.updateTransform();
  }

  resetView() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.updateTransform();
  }

  openNodeModal(node) {
    const modal = document.getElementById('node-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (!modal) return;

    modalTitle.textContent = node.label;
    modalBody.innerHTML = `
      <div style="margin-top: 1rem;">
        <span style="background: rgba(245,158,11,0.15); color: #f59e0b; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Phân mục: ${node.category}</span>
        <p style="margin-top: 1.2rem; line-height: 1.7; color: #cbd5e1; font-size: 1rem;">
          Nội dung chi tiết cho nhánh <strong>"${node.label}"</strong> thuộc giáo trình Triết học Mác - Lênin (Trang 179-198).
        </p>
        <div style="background: rgba(255,255,255,0.04); border-left: 3px solid #ef4444; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          <small style="color: #94a3b8;">Ghi chú giảng dạy:</small>
          <p style="font-size: 0.92rem; color: #f1f5f9; margin-top: 0.3rem;">
            Nội dung này nhấn mạnh tính quy luật tất yếu khách quan của lịch sử, từ sự thay đổi về phương thức sản xuất dẫn đến sự chuyển biến của các hình thái kinh tế - xã hội.
          </p>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }
}
