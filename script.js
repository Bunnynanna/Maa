// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random() + 0.5}) rotate(45deg)`;
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
  
  setInterval(createHeart, 300);
  
  // Slideshow Logic
  const slides = document.querySelectorAll('#slideshow img');
  let index = 0;
  
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
  
  // Music Controls
  const audio = document.getElementById('bg-music');
  const playBtn = document.getElementById('play-music');
  const stopBtn = document.getElementById('stop-music');
  
  playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
  });
  
  stopBtn.addEventListener('click', () => {
    audio.pause();
    stopBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
  });
  