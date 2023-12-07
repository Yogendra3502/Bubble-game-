var timer = 60;
score = 0;
var hitrn = 0 ;

function increacescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

function getNewhit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
};
getNewhit();

function makebubble(){
    var cluter = "";    

for(var i = 1; i <= 176; i++){
    var rn = Math.floor(Math.random()*10)
cluter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = cluter;

};
makebubble();

function finalscore(){
    document.querySelector(".pbtm")
.addEventListener("click", function(dets){
    console.log(Number(dets.target.textContent));
var clickednum = Number(dets.target.textContent)

if(clickednum === hitrn){
    increacescore();
makebubble();
getNewhit();
}
})
};
finalscore();

function runtimer(){
    var timerint = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(timerint)
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1><h1> <a href="https://instagram.com/yogendra_singh_rajput___?igshid=NzZlODBkYWE4Ng==">Yogi</a> se bolo</h1>    <h2>Your score is ${score} `      
    }

    },1000)
};
runtimer();