function handleYes() {
    createConfetti();
    setTimeout(() => {
        alert('🎉 Yay! Let\'s have an amazing time together! 💗');
    }, 500);
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createConfetti() {
    const heartsContainer = document.getElementById('hearts');
    const hearts = ['💗', '💕', '💖', '✨', '⭐'];
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}