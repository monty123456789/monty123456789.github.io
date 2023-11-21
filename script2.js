let currentFilmIndex = 0;
const vimeoIDs = ['756760035', '375247022', '772816966', '801747294', '842453811', '722983782?h=6314ffdf5c'];

const films = {
  'Killer Kat': '756760035',
  'Train Trip': '375247022',
  'Reflect': '772816966',
  'Circuit Breaker': '801747294',
  'Rise and Fall': '512238234?h=cbaefe96b3',
  'VFX Reel': '842453811'

};

// Functions related to films
function enlargeFilm(filmName) {
  currentFilmIndex = filmName;
  document.getElementById('overlay').style.display = 'block';
  displayFilm();
}

function closeFilm() {
  document.getElementById('overlay').style.display = 'none';
}

function changeFilm(change) {
  const filmNames = Object.keys(films);
  const currentIndex = filmNames.indexOf(currentFilmIndex);
  let newIndex = currentIndex + change;

  if (newIndex < 0) {
      newIndex = filmNames.length - 1;
  } else if (newIndex >= filmNames.length) {
      newIndex = 0;
  }

  currentFilmIndex = filmNames[newIndex];
  displayFilm();
}

function displayFilm() {
  const filmContainer = document.getElementById('filmContainer');
  const iframe = document.createElement('iframe');
  iframe.src = `https://player.vimeo.com/video/${films[currentFilmIndex]}`;
  iframe.width = '800';
  iframe.height = '450';
  iframe.style.maxWidth = '60vw'; // Set the maximum width to the viewport width
  iframe.style.maxHeight = '40vW'; 
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
function showFilmName(film) {
  var filmName = film.querySelector('.film-name');
  filmName.style.display = 'block';
}

function hideFilmName(film) {
  var filmName = film.querySelector('.film-name');
  filmName.style.display = 'none';
}





document.getElementById('overlay').addEventListener('click', closeOnOverlayClick);

// Other functions (add your functions from about.html here)
function redColor() {
  var col = document.getElementById("body");
  col.style.backgroundColor = "black";
}

function blueColor() {
  var col = document.getElementById("body");
  col.style.backgroundColor = "white";
}

function appearL() {
//  document.getElementById("myDivL").style.opacity = "1";
  document.getElementById("myDivL").style.display = "block";
}

function disappearL() {
 // document.getElementById("myDivL").style.opacity = "0";
  document.getElementById("myDivL").style.display = "none";
}

function appearR() {
 // document.getElementById("myDivR").style.opacity = "1";
  document.getElementById("myDivR").style.display = "block";
}

function disappearR() {
  //document.getElementById("myDivR").style.opacity = "0";
  document.getElementById("myDivR").style.display = "none";
}

function flashTitle() {
  //document.getElementById("myDivR").style.opacity = "0";
  document.getElementById("myDivTop").style.display = "none";
}

function image_appear() {
  document.getElementById("imgA").style.scale = "100%";
}

function image_disappear() {
  document.getElementById("imgA").style.scale = "0%";
}

// Add any additional functions from about.html here
