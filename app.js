// Star Oracle v1.0 - Full Interactive Experience

let currentTool = null;

function navigateTo(tool) {
    document.querySelectorAll('.tool-section').forEach(section => {
        section.style.display = section.id === tool ? 'block' : 'none';
    });
    currentTool = tool;
}

function toggleTheme() {
    const body = document.body;
    if (body.style.backgroundColor === 'rgb(26, 0, 51)') {
        body.style.backgroundColor = '#0a001f';
    } else {
        body.style.backgroundColor = '#1a0033';
    }
}

function showSettings() {
    alert("🌌 Settings (v1.1)\n\n• API Configuration\n• Save Sessions\n• Export Interpretations");
}

function showAbout() {
    document.getElementById('about-modal').classList.toggle('hidden');
}

function hideModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// Rosetta Lens
document.getElementById('rosetta-file').addEventListener('change', (e) => {
    if (e.target.files[0]) {
        document.getElementById('rosetta-results').classList.remove('hidden');
        alert("✨ Rosetta Lens activated!\n\nSimulated OCR + enhancement complete.\nConfidence: 87%");
    }
});

function speakText() {
    const text = document.getElementById('ocr-text').value;
    if ('speechSynthesis' in window) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
}

// Neon Forge
let neonCtx;
document.getElementById('neon-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const canvas = document.getElementById('neon-canvas');
    canvas.classList.remove('hidden');
    neonCtx = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
        canvas.width = img.width > 800 ? 800 : img.width;
        canvas.height = img.height;
        neonCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
        applyNeonEffect('rainbow');
    };
    img.src = URL.createObjectURL(file);
});

function applyNeonPreset(preset) {
    if (neonCtx) applyNeonEffect(preset);
    else alert("Upload an image first to activate Neon Forge ✨");
}

function applyNeonEffect(preset) {
    // Advanced canvas neon simulation
    const canvas = document.getElementById('neon-canvas');
    neonCtx.save();
    neonCtx.globalCompositeOperation = 'screen';
    
    if (preset === 'rainbow') {
        neonCtx.fillStyle = 'rgba(255, 0, 255, 0.4)';
    } else if (preset === 'synthwave') {
        neonCtx.fillStyle = 'rgba(180, 0, 255, 0.5)';
    } else if (preset === 'matrix') {
        neonCtx.fillStyle = 'rgba(0, 255, 100, 0.5)';
    } else {
        neonCtx.fillStyle = 'rgba(255, 80, 0, 0.5)';
    }
    
    neonCtx.fillRect(0, 0, canvas.width, canvas.height);
    neonCtx.restore();
    alert(`🌈 ${preset.toUpperCase()} neon applied!`);
}

// Uno Reverse
function generateReverse() {
    const input = document.getElementById('reverse-input').value.trim();
    if (!input) return alert("Enter a statement first");
    
    const resultsDiv = document.getElementById('reverse-results');
    resultsDiv.innerHTML = `
        <div class="glass" style="padding:1.5rem">
            <strong>Literal Opposite:</strong> ${input.split(' ').reverse().join(' ')}<br><br>
            <strong>Shadow Mirror:</strong> What if the opposite of "${input}" reveals your hidden power?<br><br>
            <strong>Healing Reframe:</strong> This situation invites you to embrace cosmic flow.
        </div>
    `;
}

// Predictive Muse
function generateMuse() {
    const input = document.getElementById('muse-input').value.trim();
    const chaos = document.getElementById('chaos').value;
    if (!input) return;
    
    const output = document.getElementById('muse-output');
    output.innerHTML = `<p>${input}... under neon skies, the universe whispered back: "You are the algorithm of wonder."</p><small>Chaos: ${chaos}%</small>`;
}

// Language Alchemy
function performAlchemy() {
    const input = document.getElementById('alchemy-input').value.trim();
    if (!input) return;
    
    document.getElementById('alchemy-path').innerHTML = `
        <p>🌐 Path: English → French → Japanese → Cosmic → English</p>
        <p style="font-style:italic; color:var(--neon-cyan)">"${input}" → "The stars remember your name in light language."</p>
    `;
}

// Notebook & Image Oracle
function generateInterp(mode) {
    const output = document.getElementById('interp-output');
    output.innerHTML = `<div class="glass" style="padding:1rem"><strong>${mode.toUpperCase()}:</strong> Your notebook reveals recurring themes of cosmic reconnection and creative rebellion.</div>`;
}

document.getElementById('image-file').addEventListener('change', () => {
    document.getElementById('image-results').classList.remove('hidden');
    document.getElementById('image-results').innerHTML = `
        <div class="glass">
            <h3>Creative Interpretations</h3>
            <p><strong>Symbolic:</strong> Portal to another dimension</p>
            <p><strong>Archetypal:</strong> The Fool's Journey begins here</p>
        </div>
    `;
});

// Drag and drop support
function enableDragDrop() {
    const areas = document.querySelectorAll('.upload-area');
    areas.forEach(area => {
        area.addEventListener('dragover', e => { e.preventDefault(); area.style.borderColor = '#00ffff'; });
        area.addEventListener('dragleave', () => area.style.borderColor = 'var(--neon-purple)');
        area.addEventListener('drop', e => {
            e.preventDefault();
            area.style.borderColor = 'var(--neon-purple)';
            alert("File received! Processing with Star Oracle...");
        });
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    enableDragDrop();
    // Show hero first
    document.querySelectorAll('.tool-section').forEach(s => s.style.display = 'none');
    console.log('%c🌌 Star Oracle v1.0 fully loaded. Welcome, seeker.', 'color:#ff00ff; font-size:16px');
});