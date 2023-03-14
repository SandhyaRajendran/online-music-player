let All_song = [{
    name: "Singa Penney",
    path: "songs/num1.mp3",
    img: "images/numone.jpg",
    singer: "1",
    artist: "Bigil"
},
{
    name: "Boomi Ena Suthuthey",
    path: "songs/song1.mp3",
    img: "images/im1.jpeg",
    singer: "2",
    artist: "Ethirneechal"
},
{
    name: "Chilla Chilla song",
    path: "songs/song2.mp3",
    img: "images/im2.jpeg",
    singer: "3",
    artist: "Thunivu"
},

{
    name: "Unstoppable song",
    path: "songs/song3.mp3",
    img: "images/imm3.jpeg",
    singer: "4",
    artist: "Unstoppable"
},

{
    name: "Themai than vellum song",
    path: "songs/song4.mp3",
    img: "images/im44.png",
    singer: "5",
    artist: "Thanioruvan"
},
{
    name: "Let me sing a kutty story",
    path: "songs/song5.mp3",
    img: "images/img5.png",
    singer: "6",
    artist: "Master"
},
{
    name: "Damaku Damaku Dama",
    path: "songs/song6.mp3",
    img: "images/img6.png",
    singer: "7",
    artist: "Adhvan"
},

{
    name: "Thani oruvan",
    path: "songs/song7.mp3",
    img: "images/im44.png",
    singer: "8",
    artist: "Thanioruvan"
}
];



let previousBtn = document.querySelector('#previous')
let playBtn = document.querySelector('.play')
let nextBtn = document.querySelector('#next')
let title = document.querySelector('#title')
let artist = document.querySelector('#artist')
let inputRange = document.querySelector('#ranger')
let images = document.querySelector('#images')
let audio = document.createElement('audio')
audio.autoplay;
let pauseBtn = document.querySelector('.pause')
console.log(pauseBtn)
let autoplay = document.querySelector('.autoplay')
// console.log(autoplay)
const spanValue = document.querySelector('.soundValue')

let decrement = 3
previousBtn.addEventListener('click', function () {
    decrement--;
    title.innerText = All_song[decrement].name;
    artist.innerText = All_song[decrement].artist;
    images.src = All_song[decrement].img;
    audio.src = All_song[decrement].path;

    showAlert('Now previous song is playinG')
})

let increment = 0;
nextBtn.addEventListener('click', function () {
    increment++
    title.innerText = All_song[increment].name;
    artist.innerText = All_song[increment].artist;
    images.src = All_song[increment].img;
    audio.src = All_song[increment].path;
    // audio.load()
    if (playBtn.classList.contains('pause')) {
        playBtn.classList.add('play')
    }

    showAlert('Now next song is playing')
})
window.addEventListener('DOMContentLoaded', function () {
    title.innerText = All_song[0].name;
    artist.innerText = All_song[0].artist;
    images.src = All_song[0].img;
    audio.src = All_song[0].path;

    showAlert('welcome to our music player')
})

let position = 0;
position = audio.currentTime * (100 / audio.duration);
inputRange.value = position;


playBtn.addEventListener('click', function (e) {
    audio.play();
    pauseBtn.classList.remove('hide')
    playBtn.classList.add('hide')
    time()

    showAlert('Now music is playing')

})

pauseBtn.addEventListener('click', function () {
    audio.pause()
    pauseBtn.classList.add('hide')
    playBtn.classList.remove('hide')
    time()

    showAlert('Now music is paused')

})

inputRange.addEventListener('click', () => {
    audio.currentTime = inputRange.value

    audio.play();
})

//input la audio voda input tharathuku

setInterval(() => {
    inputRange.value = audio.currentTime;

    if (audio.currentTime == audio.duration) {
        increment++
        title.innerText = All_song[increment].name;
        artist.innerText = All_song[increment].artist;
        images.src = All_song[increment].img;
        audio.src = All_song[increment].path;
        audio.play()
    }
}, 1000)

audio.onloadedmetadata = function () {
    inputRange.max = audio.duration;
}

const sound = document.querySelector('#sound')
console.log(sound)
sound.addEventListener('change', function () {
    spanValue.innerText = sound.value
    audio.volume = sound.value / 100;
})

const starting = document.querySelector('.staart')

const ending = document.querySelector('.end');

function time() {
    setInterval(() => {
        show()
    }, 1000)
}

function show() {
    CurrenntMin = Math.floor(audio.currentTime / 60)
    curretSec = Math.floor(audio.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(audio.duration / 60)
    durationSec = Math.floor(audio.duration - (durationMin * 60))

    if (CurrenntMin < 10) {
        CurrenntMin = "0" + CurrenntMin
    }
    if (curretSec < 10) {
        curretSec = "0" + curretSec
    }
    if (durationMin < 10) {
        durationMin = "0" + durationMin
    }
    if (durationSec < 10) {
        durationSec = "0" + durationSec
    }
    starting.innerText = `${CurrenntMin}:${curretSec}`
    ending.innerText = `${durationMin}:${durationSec}`
}

const playlisst = document.querySelector('.playlisst')
const allson = document.querySelector('.songshere')
const xmark = document.querySelector('.xmark')
const playy = document.querySelector('.playy')


for (let i = 0; i < All_song.length; i++) {
    const lis = document.createElement('li')
    lis.className = All_song[i].name
    allson.append(lis)
    lis.innerText = All_song[i].name
    lis.addEventListener('click', function (e) {
        console.log(e.target.className)
        if (e.target.className == All_song[i].name) {
            title.innerText = All_song[i].name;
            artist.innerText = All_song[i].artist;
            images.src = All_song[i].img;
            audio.src = All_song[i].path;
        }
    })
}

playlisst.addEventListener('click', (e) => {
    if (e.target.classList.contains('playlisst')) {
        // alert('woohoo')
        playlisst.classList.add('hide')
        xmark.classList.remove('hide')
        allson.classList.remove('hide')

        playy.classList.add('hide')
    }
})
xmark.addEventListener('click', (e) => {
    // alert('welcom')
    if (e.target.classList.contains('xmark')) {
        xmark.classList.add('hide')
        playlisst.classList.remove('hide')
        allson.classList.add('hide')
        playy.classList.remove('hide')
    }
})

const random = document.querySelector('.random')
random.addEventListener('click', function (e) {
    const randomVal = Math.floor(Math.random() * All_song.length)
    // console.log(randomVal)
    title.innerText = All_song[randomVal].name;
    artist.innerText = All_song[randomVal].artist;
    images.src = All_song[randomVal].img;
    audio.src = All_song[randomVal].path;
    audio.play()
})

const aleert = document.querySelector('.alert')
// console.log(aleert)
function showAlert(alertVal) {
    setTimeout(() => {
        aleert.innerText = alertVal;
        aleert.style.color = "black";
        aleert.classList.remove('hide')
    }, 1000)
}
