var stat = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0;


btn.addEventListener("click",function(){
    if(check == 0){
        stat.innerHTML = "Friends"
        stat.style.color = "green"
        btn.innerHTML = "Remove"
        check = 1
    }else{
        stat.innerHTML = "Stranger"
        stat.style.color = "grey"
        btn.innerHTML = "Add Friend"
        check = 0
    }
    
})