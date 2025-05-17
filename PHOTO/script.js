
const audio = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPauseBtn");
const currentSongSpan = document.getElementById("currentSong");
const coverImg = document.getElementById("coverImg");
const seekBar = document.getElementById("seekBar");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");

const playlist = [
  { name: "Happy 1st Anniversary", src: "for JN.mp3", cover: "5.jpg" },
  { name: "3.14", src: "3.14 song.mp3", cover: "5.jpg" },  
  { name: "5/20", src: "5.20 for jn.mp3", cover: "5.jpg" }, 
  { name: "Angry JN", src: "YL0123.mp3", cover: "5.jpg" },
];

let currentIndex = 0;

function loadSong(index) {
  const song = playlist[index];
  audio.src = song.src;
  currentSongSpan.textContent = song.name;
  coverImg.src = song.cover;
  audio.play();
  playPauseBtn.textContent = "⏸";
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = " ▶︎";
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
}

audio.addEventListener("ended", () => nextSong());

audio.addEventListener("timeupdate", () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeText.textContent = formatTime(audio.currentTime);
  durationText.textContent = formatTime(audio.duration);
});

seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});


function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

window.addEventListener("DOMContentLoaded", () => loadSong(currentIndex));
 

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

// 點擊圖片會跳出 💖 愛心動畫
document.querySelectorAll('.photo-wrapper img').forEach(img => {
  img.addEventListener('click', e => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.className = 'click-heart';
    heart.style.position = 'absolute';
    heart.style.left = `${e.offsetX}px`;
    heart.style.top = `${e.offsetY}px`;
    heart.style.fontSize = '24px';
    heart.style.opacity = '1';
    heart.style.transition = 'all 0.8s ease';
    heart.style.pointerEvents = 'none';
    e.currentTarget.parentElement.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = 'translateY(-40px)';
      heart.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      heart.remove();
    }, 800);
  });
});


// ✅ 記得在 DOM 載入完成時自動套用主題
window.addEventListener('DOMContentLoaded', () => {
  autoSetTheme();
});
 