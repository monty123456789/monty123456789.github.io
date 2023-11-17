let currentFilmIndex = 0;
const vimeoIDs = ['375247022', '842453811', 'VIMEO_ID_3', 'VIMEO_ID_4', 'VIMEO_ID_5', 'VIMEO_ID_6', 'VIMEO_ID_7'];

function enlargeFilm(vimeoID) {
  currentFilmIndex = vimeoIDs.indexOf(vimeoID);
  document.getElementById('overlay').style.display = 'block';
  displayFilm();
}

function closeFilm() {
  document.getElementById('overlay').style.display = 'none';
}

function changeFilm(change) {
  currentFilmIndex += change;
  if (currentFilmIndex < 0) {
    currentFilmIndex = vimeoIDs.length - 1;
  } else if (currentFilmIndex >= vimeoIDs.length) {
    currentFilmIndex = 0;
  }
  displayFilm();
}

function displayFilm() {
  const filmContainer = document.getElementById('filmContainer');
  const iframe = document.createElement('iframe');
  iframe.src = `https://player.vimeo.com/video/${vimeoIDs[currentFilmIndex]}`;
  iframe.width = '800';
  iframe.height = '450';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; fullscreen';
  iframe.allowFullscreen = true;
  filmContainer.innerHTML = '';
  filmContainer.appendChild(iframe);
}

function closeOnOverlayClick(event) {
  if (event.target.id === 'overlay') {
    closeFilm();
  }
}

document.getElementById('overlay').addEventListener('click', closeOnOverlayClick);
