const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
let playing = true;

musicBtn.addEventListener('click', () => {
  if (playing) {
    music.pause();
    musicIcon.textContent = '🔇';
  } else {
    music.play();
    musicIcon.textContent = '🎵';
  }
  playing = !playing;
});

document.querySelectorAll('.photo-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', (e) => {
    wrapper.classList.add('liked');
    setTimeout(() => wrapper.classList.remove('liked'), 600);

    for (let i = 0; i < 10; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      const dx = (Math.random() - 0.5) * 200 + 'px';
      const dy = (Math.random() - 0.5) * 200 + 'px';
      firework.style.setProperty('--dx', dx);
      firework.style.setProperty('--dy', dy);
      firework.style.left = e.clientX + 'px';
      firework.style.top = e.clientY + 'px';
      document.body.appendChild(firework);
      setTimeout(() => firework.remove(), 1000);
    }
  });
});

function toggleNight() {
  document.body.classList.toggle('night');
  const stars = document.getElementById('stars');
  const toggleBtn = document.getElementById('toggleNightBtn');
  const icon = document.getElementById('sky-icon');

  if (document.body.classList.contains('night')) {
    toggleBtn.textContent = '☀️';
    icon.style.background = '#f0f0f0';
    icon.style.boxShadow = '0 0 10px 3px #bbb';
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      stars.appendChild(star);
    }
  } else {
    toggleBtn.textContent = '🌙';
    icon.style.background = '#FFD700';
    icon.style.boxShadow = '0 0 12px 4px #FFD700';
    stars.innerHTML = '';
  }
}

function autoSetTheme() {
  const hour = new Date().getHours();
  const isNight = (hour >= 18 || hour < 6);
  const toggleBtn = document.getElementById('toggleNightBtn');
  const icon = document.getElementById('sky-icon');
  const stars = document.getElementById('stars');

  if (isNight) {
    document.body.classList.add('night');
    toggleBtn.textContent = '☀️';
    icon.style.background = '#f0f0f0';
    icon.style.boxShadow = '0 0 10px 3px #bbb';
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      stars.appendChild(star);
    }
  } else {
    document.body.classList.remove('night');
    toggleBtn.textContent = '🌙';
    icon.style.background = '#FFD700';
    icon.style.boxShadow = '0 0 12px 4px #FFD700';
    stars.innerHTML = '';
  }
}

window.addEventListener('DOMContentLoaded', autoSetTheme);
