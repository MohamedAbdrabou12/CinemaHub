class ReactLogo {
  constructor() {
    this.particles = [];
    this.particleCount = 300;
    this.particleSize = 2;
    this.mouseForce = 15;
    this.noise = 8;
    this.ringCount = 3;
    this.ringRadius = [60, 80, 100];
    this.width = window.innerWidth;
    this.height = 400;
    this.canvas = null;
    this.ctx = null;
    this.mouse = { x: 0, y: 0 };
    this.isRunning = false;
    this.centerX = 0;
    this.centerY = 0;
    this.hue = 190; // React logo blue color
  }

  init(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.setupParticles();
    this.setupEventListeners();
  }

  setupParticles() {
    this.particles = [];
    
    // Create three elliptical rings (like React logo)
    for (let r = 0; r < this.ringCount; r++) {
      const ringParticles = [];
      const radius = this.ringRadius[r];
      const particlesInRing = Math.floor(this.particleCount / this.ringCount);
      
      for (let i = 0; i < particlesInRing; i++) {
        const angle = (i / particlesInRing) * Math.PI * 2;
        // Create elliptical shape
        const x = this.centerX + radius * Math.cos(angle) * 1.5; // 1.5 for elliptical shape
        const y = this.centerY + radius * Math.sin(angle);
        
        ringParticles.push({
          x: x,
          y: y,
          originX: x,
          originY: y,
          angle: angle,
          radius: radius,
          color: 'hsla(' + this.hue + ', 100%, 50%, ' + (0.8 - r * 0.2) + ')',
          speed: 0.005 + Math.random() * 0.01
        });
      }
      this.particles.push(ringParticles);
    }
  }

  setupEventListeners() {
    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.canvas.width = this.width;
      this.centerX = this.width / 2;
      this.setupParticles();
    });
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    this.particles.forEach((ring, ringIndex) => {
      ring.forEach((particle, i) => {
        // Rotate particles
        particle.angle += particle.speed;
        particle.x = particle.originX = this.centerX + particle.radius * Math.cos(particle.angle) * 1.5;
        particle.y = particle.originY = this.centerY + particle.radius * Math.sin(particle.angle);

        // Mouse interaction
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(this.mouseForce / (distance * distance), this.mouseForce);

        if (distance < 120) {
          particle.x += (Math.random() - 0.5) * this.noise - dx * force;
          particle.y += (Math.random() - 0.5) * this.noise - dy * force;
        }

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, this.particleSize, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();

        // Connect particles
        if (i < ring.length - 1) {
          const nextParticle = ring[i + 1];
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(nextParticle.x, nextParticle.y);
          this.ctx.strokeStyle = particle.color;
          this.ctx.stroke();
        }
      });
    });

    // Draw connections between rings
    for (let r = 0; r < this.particles.length - 1; r++) {
      const currentRing = this.particles[r];
      const nextRing = this.particles[r + 1];
      const step = Math.floor(nextRing.length / currentRing.length) || 1;

      for (let i = 0; i < currentRing.length; i += 3) {
        const particle = currentRing[i];
        const nextParticle = nextRing[i * step];
        if (nextParticle) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(nextParticle.x, nextParticle.y);
          this.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, 50%, 0.2)';
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default ReactLogo;
