// =============================================
// Star Oracle v1.1 - Upgraded JavaScript
// =============================================

let currentTool = null;
let neonCtx = null;

// Navigation
function navigateTo(tool) {
    // Hide all tool sections
    document.querySelectorAll('.tool-section').forEach(section => {
        section.style.display = section.id === tool ? 'block' : 'none';
    });
    
    // Highlight active nav link (optional)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${tool}`);
    });
    
    currentTool = tool;
    
    // Close mobile menu if open
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.remove('open');
}

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('open');
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    // You can expand this with localStorage later
}

// Modals
function showAbout() {
    const modal = document.getElementById('about-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

function showSettings() {
    alert("🌌 Star Oracle Settings\n\n• Theme preferences\n• Session saving (coming soon)\n• Export results\n• API keys (future)");
}

// Rosetta Lens
function initRosetta() {
    const fileInput = document.getElementById('rosetta-file');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files[0]) {
                const results = document.getElementById('rosetta-results');
                if (results) results.classList.remove('hidden');
                alert("✨ Rosetta Lens activated!\n\nOCR + Symbolic interpretation complete.");
            }
        });
    }
}

// Neon Forge
function initNeonForge() {
    const fileInput = document.getElementById('neon-file');
    const canvas = document.getElementById('neon-canvas');
    
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !canvas) return;

            canvas.classList.remove('hidden');
            neonCtx = canvas.getContext('2d');

            const img = new Image();
            img.onload = () => {
                canvas.width = Math.min(img.width, 800);
                canvas.height = img.height;
                neonCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
                applyNeonPreset('rainbow');
            };
            img.src = URL.createObjectURL(file);
        });
    }
}

function applyNeonPreset(preset) {
    if (!neonCtx) {
        alert("Please upload an image first ✨");
        return;
    }
    
    const canvas = document.getElementById('neon-canvas');
    neonCtx.save();
    neonCtx.globalCompositeOperation = 'screen';

    const colors = {
        rainbow: 'rgba(255, 0, 255, 0.45)',
        synthwave: 'rgba(180, 0, 255, 0.55)',
        matrix: 'rgba(0, 255, 120, 0.5)',
        lava: 'rgba(255, 100, 0, 0.5)'
    };

    neonCtx.fillStyle = colors[preset] || colors.rainbow;
    neonCtx.fillRect(0, 0, canvas.width, canvas.height);
    neonCtx.restore();
    
    alert(`🌈 ${preset.toUpperCase()} Neon Forge activated!`);
}

// Text Tools
function generateReverse() {
    const input = document.getElementById('reverse-input')?.value.trim();
    if (!input) return alert("Enter some text to reverse ✨");
    
    const results = document.getElementById('reverse-results');
    if (results) {
        results.innerHTML = `
            <div class="glass" style="padding: 1.5rem; margin-top: 1rem;">
                <strong>Literal Opposite:</strong> ${input.split(' ').reverse().join(' ')}<br><br>
                <strong>Shadow Mirror:</strong> What if the opposite reveals your hidden strength?<br><br>
                <strong>Healing Reframe:</strong> The universe invites you to flow with this energy.
            </div>
        `;
    }
}

function generateMuse() {
    const input = document.getElementById('muse-input')?.value.trim();
    const chaos = document.getElementById('chaos')?.value || 50;
    if (!input) return;

    const output = document.getElementById('muse-output');
    if (output) {
        output.innerHTML = `
            <p>${input}... and the neon stars whispered back: "You are the algorithm writing reality."</p>
            <small>Chaos Level: ${chaos}%</small>
        `;
    }
}

function performAlchemy() {
    const input = document.getElementById('alchemy-input')?.value.trim();
    if (!input) return;

    const output = document.getElementById('alchemy-path');
    if (output) {
        output.innerHTML = `
            <p>🌐 Transmutation Path: English → Starlight → Cosmic → English</p>
            <p style="font-style:italic; color:#00ffff">"${input}" became: "The stars remember your name in light language."</p>
        `;
    }
}

// Notebook & Image helpers
function generateInterp(mode) {
    const output = document.getElementById('interp-output');
    if (output) {
        output.innerHTML = `
            <div class="glass" style="padding:1rem; margin-top:1rem;">
                <strong>${mode.toUpperCase()} Reading:</strong> 
                Your notebook pulses with themes of cosmic reconnection and creative rebellion.
            </div>
        `;
    }
}

// Drag & Drop
function enableDragDrop() {
    document.querySelectorAll('.upload-area').forEach(area => {
        area.addEventListener('dragover', e => {
            e.preventDefault();
            area.style.borderColor = '#00ffff';
            area.style.background = 'rgba(0, 255, 255, 0.1)';
        });
        
        area.addEventListener('dragleave', () => {
            area.style.borderColor = '';
            area.style.background = '';
        });
        
        area.addEventListener('drop', e => {
            e.preventDefault();
            area.style.borderColor = '';
            area.style.background = '';
            alert("📥 File received! Star Oracle is processing...");
            // You can extend this to handle actual files
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    enableDragDrop();
    initRosetta();
    initNeonForge();

    // Hide all tools initially
    document.querySelectorAll('.tool-section').forEach(s => {
        s.style.display = 'none';
    });

    console.log('%c🌌 Star Oracle v1.1 initialized. Welcome, seeker of patterns.', 'color:#ff00ff; font-size:16px; font-family:Orbitron');
});
