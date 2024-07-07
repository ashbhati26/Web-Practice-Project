var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(move){
    crsr.style.left = move.x + "px"
    crsr.style.top = move.y + "px"
})