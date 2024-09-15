var arr = [
    {songName: "Jale 2", url:"./songs/Jale 2.mp3", img:"./images/jale.jpg"}, 
    {songName: "Arjan Vailly Ne", url:"./songs/Arjan Vailly Ne.mp3", img:"./images/animal.jpg"}, 
    {songName: "Pehle Bhi Main", url:"./songs/Pehle Bhi Main.mp3", img:"./images/animal.jpg"}, 
    {songName: "Ram Siya Ram", url:"./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg"}
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")


var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    var clutter = ""
    arr.forEach(function(helper, index){
        clutter += `<div class="song-card" id=${index}>
                        <div class="part1">
                            <img src=${helper.img} alt="">
                            <h2>${helper.songName}</h2>
                        </div>
                        <h6>3:56</h6>
                    </div>`
    })
    
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url

    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function(details){
    selectedSong = details.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    audio.play()
})

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    } 
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})