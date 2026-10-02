function handleYes() {
    // Disable button to prevent multiple clicks
    document.querySelector('.yes-btn').disabled = true;
    document.querySelector('.no-btn').disabled = true;
    
    // Create multiple waves of confetti
    createConfetti();
    
    // Add celebration animation to card
    const card = document.querySelector('.card');
    card.style.animation = 'celebrate 0.6s ease-in-out';
    
    // Show success message after animation
    setTimeout(() => {
        showSuccessOverlay();
    }, 1000);
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const emojis = ['💗', '✨', '💫', '🌟', '💕', '🎉', '💖'];
    
    // Wave 1: Explosion effect
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            confettiContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }, i * 30);
    }
}

function showSuccessOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('success-overlay');
    overlay.innerHTML = `
        <div class="success-content">
            <div class="success-emoji">💗</div>
            <h2>Yes!</h2>
            <p>I'm so happy!</p>
            <div class="floating-hearts">
                <span>💕</span>
                <span>💖</span>
                <span>💗</span>
                <span>💕</span>
                <span>💖</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.classList.add('show');
    }, 50);
}
