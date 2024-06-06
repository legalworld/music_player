var arr = [
  {
    songName: "pehle bhi main",
    URL: "musics/pe.mp3",
    img: "images/animal.jpg",
  },

  {
    songName: "ami j tomar",
    URL: "musics/ami.mp3",
    img: "images/ami_je_tomar.jpg",
  },
  {
    songName: "sajni re",
    URL: "musics/saj.mp3",
    img: "images/sajni_re.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var backward = document.querySelector("#backward");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id="${index}">
          <div class="part1">
            <img src="${elem.img}" alt="" />
            <h2>${elem.songName}</h2>
          </div>
          <h6>4:10</h6>
        </div>`;
  });

  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].URL;

  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

allSongs.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.3;
  }
});
