function handleYes() {
    createConfetti();
    setTimeout(() => {
        alert('That\'s amazing! I\'m so happy. Let\'s make it special. 💫');
    }, 800);
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const emojis = ['💗', '✨', '💫', '🌟'];
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '-50px';
        confettiContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}
