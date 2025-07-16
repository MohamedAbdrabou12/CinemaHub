class Heart {
  constructor() {
    this.particles = [];
    this.particleCount = 100;
    this.particleSize = 3;
    this.particleGap = 2;
    this.mouseForce = 10;
    this.noise = 10;
    this.layerCount = 3;
    this.layerDistance = 5;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas = null;
    this.ctx = null;
    this.mouse = { x: 0, y: 0 };
    this.isRunning = false;
  }

  init(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.setupParticles();
    this.setupEventListeners();
  }

  setupParticles() {
    this.particles = [];
    for (let layer = 0; layer < this.layerCount; layer++) {
      const layerParticles = [];
      const centerX = this.width / 2;
      const centerY = this.height / 2 - 50; // Adjust vertical position
      
      for (let i = 0; i < this.particleCount; i++) {
        const angle = (i / this.particleCount) * Math.PI * 2;
        const heartX = centerX + 16 * Math.pow(Math.sin(angle), 3);
        const heartY = centerY - (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        
        layerParticles.push({
          x: heartX,
          y: heartY,
          originX: heartX,
          originY: heartY,
          z: layer * this.layerDistance,
          color: `rgba(255, ${50 + layer * 50}, ${50 + layer * 50}, ${1 - layer * 0.2})`
        });
      }
      this.particles.push(layerParticles);
    }
  }

  setupEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.setupParticles();
    });
  }

  start(options = {}) {
    const { initPosition = 'none', initDirection = 'none' } = options;
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach(layer => {
      layer.forEach(particle => {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(this.mouseForce / (distance * distance), this.mouseForce);

        particle.x += (Math.random() - 0.5) * this.noise - dx * force;
        particle.y += (Math.random() - 0.5) * this.noise - dy * force;

        // Return to original position
        particle.x += (particle.originX - particle.x) * 0.1;
        particle.y += (particle.originY - particle.y) * 0.1;

        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, this.particleSize, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();
      });
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Heart;
