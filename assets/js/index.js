const konektor = document.querySelector('.konektor_website');
const koneksi = document.querySelector('.koneksi_website');

let timer;

function showKoneksi() {
  clearTimeout(timer);
  koneksi.style.display = 'block';
}

function hideKoneksi() {
  timer = setTimeout(() => {
    koneksi.style.display = 'none';
  }, 200); // delay dikit biar smooth
}

konektor.addEventListener('mouseenter', showKoneksi);
konektor.addEventListener('mouseleave', hideKoneksi);
koneksi.addEventListener('mouseenter', showKoneksi);
koneksi.addEventListener('mouseleave', hideKoneksi);
