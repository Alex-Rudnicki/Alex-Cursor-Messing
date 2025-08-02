// Matrix-style falling numbers animation
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrixBg = document.getElementById('matrixBg');
        this.matrixBg.appendChild(this.canvas);
        
        this.characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.fontSize = 16;
        this.columns = 0;
        this.drops = [];
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        
        // Initialize drops
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = 1;
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    resize() {
        this.init();
    }
}

// Early 2000s website features
class Early2000sWebsite {
    constructor() {
        this.visitorCount = 1;
        this.init();
    }
    
    init() {
        this.setupVisitorCounter();
        this.setupLastUpdated();
        this.setupGlitchEffect();
        this.setupTerminalTyping();
        this.setupMouseTrail();
        this.setupKonamiCode();
    }
    
    setupVisitorCounter() {
        const counter = document.getElementById('visitorCount');
        if (counter) {
            // Simulate visitor count increment
            setInterval(() => {
                this.visitorCount++;
                counter.textContent = this.visitorCount.toString().padStart(6, '0');
            }, 5000);
        }
    }
    
    setupLastUpdated() {
        const lastUpdated = document.getElementById('lastUpdated');
        if (lastUpdated) {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            lastUpdated.textContent = now.toLocaleDateString('en-US', options);
        }
    }
    
    setupGlitchEffect() {
        const title = document.querySelector('.title');
        if (title) {
            setInterval(() => {
                title.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px #00ff00,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 40px #00ff00
                `;
                setTimeout(() => {
                    title.style.textShadow = `
                        0 0 20px #00ff00,
                        0 0 40px #00ff00,
                        0 0 60px #00ff00
                    `;
                }, 100);
            }, 3000);
        }
    }
    
    setupTerminalTyping() {
        const terminalTexts = document.querySelectorAll('.terminal-text');
        terminalTexts.forEach((text, index) => {
            const originalText = text.textContent;
            text.textContent = '';
            text.style.opacity = '0';
            
            setTimeout(() => {
                text.style.opacity = '1';
                this.typeWriter(text, originalText, 0, 50);
            }, index * 1000);
        });
    }
    
    typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => this.typeWriter(element, text, i + 1, speed), speed);
        }
    }
    
    setupMouseTrail() {
        let trail = [];
        const maxTrailLength = 20;
        
        document.addEventListener('mousemove', (e) => {
            trail.push({ x: e.clientX, y: e.clientY });
            
            if (trail.length > maxTrailLength) {
                trail.shift();
            }
            
            // Remove old trail elements
            const oldTrails = document.querySelectorAll('.mouse-trail');
            oldTrails.forEach(trail => trail.remove());
            
            // Create new trail
            trail.forEach((pos, index) => {
                const trailElement = document.createElement('div');
                trailElement.className = 'mouse-trail';
                trailElement.style.cssText = `
                    position: fixed;
                    left: ${pos.x}px;
                    top: ${pos.y}px;
                    width: 2px;
                    height: 2px;
                    background: #00ff00;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    opacity: ${1 - index / maxTrailLength};
                    box-shadow: 0 0 5px #00ff00;
                `;
                document.body.appendChild(trailElement);
                
                setTimeout(() => trailElement.remove(), 100);
            });
        });
    }
    
    setupKonamiCode() {
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                this.activateEasterEgg();
                konamiCode = [];
            }
        });
    }
    
    activateEasterEgg() {
        const body = document.body;
        body.style.animation = 'none';
        body.offsetHeight; // Trigger reflow
        body.style.animation = 'glitch 0.5s infinite';
        
        setTimeout(() => {
            body.style.animation = '';
        }, 2000);
        
        // Create explosion effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    width: 4px;
                    height: 4px;
                    background: #00ff00;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                    animation: explode 1s ease-out forwards;
                `;
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1000);
            }, i * 50);
        }
        
        // Add CSS for explosion animation
        if (!document.querySelector('#explosion-style')) {
            const style = document.createElement('style');
            style.id = 'explosion-style';
            style.textContent = `
                @keyframes explode {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(10); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const matrixRain = new MatrixRain();
    const early2000sWebsite = new Early2000sWebsite();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        matrixRain.resize();
    });
    
    // Add some early 2000s sound effects (optional)
    document.addEventListener('click', () => {
        // Create a simple beep sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    });
    
    // Add welcome message
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid #00ff00;
            padding: 20px;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            z-index: 10001;
            text-align: center;
            box-shadow: 0 0 20px #00ff00;
        `;
        welcomeMsg.innerHTML = `
            <h3>Welcome to the Future</h3>
            <p>You have entered the Matrix...</p>
            <p>Click anywhere to continue</p>
        `;
        document.body.appendChild(welcomeMsg);
        
        document.addEventListener('click', () => {
            welcomeMsg.remove();
        }, { once: true });
    }, 1000);
}); 