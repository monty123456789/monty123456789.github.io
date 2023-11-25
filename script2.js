const vimeoIDs = ['756760035', '375247022', '772816966', '801747294', '842453811', '722983782?h=6314ffdf5c'];

const films = {
  'Killer Kat': '756760035',
  'Train Trip': '375247022',
  'Reflect': '772816966',
  'Circuit Breaker': '801747294',
  'Rise and Fall': '512238234',
  'VFX Reel': '842453811',
  'Double A Batteries': '411589095', 
  'for Sid': '411515498',
  'Halo': '372839584',
  'Jump': '375301006',
  'Processing Ocean': '588527860',
  'Processing Reel': '590299999',
  'Tea Time': '733950269',
  'Implode': '722983782',
  'Bathroom Break': '722984907',
  'Bakar - Alive': '839735030'

};


// Functions related to films
let vimeoPlayer; // Declare a variable to hold the Vimeo player instance
let currentFilmIndex = 0;
function enlargeFilm(filmName) {
  currentFilmIndex = Object.keys(films).findIndex(key => key === filmName);
  document.getElementById('overlay').style.display = 'block';
  displayFilm();
}

function displayFilm() {
  const filmContainer = document.getElementById('filmContainer');
  const videoId = parseInt(films[Object.keys(films)[currentFilmIndex]]);

  console.log('Attempting to load video with ID:', videoId);

  if (!vimeoPlayer) {
    vimeoPlayer = new Vimeo.Player(filmContainer, {
      id: videoId,
      width: 980,
      height: 550,
      autoplay: true
    });

    vimeoPlayer.ready().then(() => {
      adjustMaxWidth();
    });
  } else {
    vimeoPlayer.loadVideo(videoId).then(() => {
      adjustMaxWidth();
    });
  }

  function adjustMaxWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      vimeoPlayer.element.style.maxWidth = '90vw';
      vimeoPlayer.element.style.maxHeight = '60vW';
    } else {
      vimeoPlayer.element.style.maxWidth = '70vw';
      vimeoPlayer.element.style.maxHeight = '40vW';
    }
  }
}


function closeFilm() {
  if (vimeoPlayer) {
    vimeoPlayer.pause();
  }
  document.getElementById('overlay').style.display = 'none';
}

function changeFilm(change) {
  currentFilmIndex += change;
  if (currentFilmIndex < 0) {
    currentFilmIndex = Object.keys(films).length - 1;
  } else if (currentFilmIndex >= Object.keys(films).length) {
    currentFilmIndex = 0;
  }
  displayFilm();
}



function showFilmName(film) {
  var filmName = film.querySelector('.film-name');
  filmName.style.display = 'block';
}

function hideFilmName(film) {
  var filmName = film.querySelector('.film-name');
  filmName.style.display = 'none';
}







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
  document.getElementById("contactID").style.display = "none";
  document.getElementById("contactID2").style.display = "none";
  document.getElementById("contactID3").style.display = "none";
  //document.getElementById("title").style.color = "white";


}

function disappearL() {

 // document.getElementById("myDivL").style.opacity = "0";
  document.getElementById("myDivL").style.display = "none";
  document.getElementById("contactID").style.display = "block";
  document.getElementById("contactID2").style.display = "block";
  document.getElementById("contactID3").style.display = "block";
 // document.getElementById("title").style.color = "black";

}

function appearR() {
 // document.getElementById("myDivR").style.opacity = "1";
  document.getElementById("myDivR").style.display = "block";
  document.getElementById("contactID").style.display = "none";
  document.getElementById("contactID2").style.display = "none";
  document.getElementById("contactID3").style.display = "none";
  //document.getElementById("title").style.color = "white";

}

function disappearR() {
  //document.getElementById("myDivR").style.opacity = "0";
  document.getElementById("myDivR").style.display = "none";
  document.getElementById("contactID").style.display = "block";
  document.getElementById("contactID2").style.display = "block";
  document.getElementById("contactID3").style.display = "block";
 // document.getElementById("title").style.color = "black";

}



  // On mobile devices, handle click outside the images


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

// Array of paths to your frames
const framePaths = [
  'portfolio_favicon/favicon-32x32.png',
  'portfolio_favicon/favicon-32x32_r.png'
  // Add paths to all your frames
];

// Function to change the favicon
function changeFavicon() {
  let currentFrame = 0;
  const totalFrames = framePaths.length;
  console.log(framePaths.length)
  setInterval(() => {
    const link = document.querySelector("link[rel='icon']");

    // Update the favicon
    link.href = framePaths[currentFrame];

    currentFrame = (currentFrame + 1) % totalFrames;
  }, 2000); // Adjust the time interval (in milliseconds) between frames
}

// Call the function to start the animation
changeFavicon();
console.log(framePaths.length)


; // Replace this with the path to your favicon

