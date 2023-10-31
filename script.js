var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubbles(){
    var clutter = "";
    for(let i=1; i<103; i++){
        var n = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${n}</div>`;
    }
    
    document.querySelector(".play-board").innerHTML = clutter;
}
function runTimer(){
    var clock = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer-display").textContent = timer;
        }
        else{
            clearInterval(clock);
            document.querySelector(".play-board").innerHTML = `<h1>Game Over</h1> <br> <h1>Your Score: ${score}</h1>`;
        }
    },1000);
}
function newHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit-display").textContent = hitrn;   
}
function countScore(){
    score += 10;
    document.querySelector("#score-display").textContent = score;
}

document.querySelector(".play-board").addEventListener("click",function(dets){
    let clickednum = Number(dets.target.textContent);

    if(clickednum === hitrn){
        countScore();
        newHit();
        makeBubbles();
    }
    else{
        newHit();
        makeBubbles();
    }
})


newHit();
runTimer();
makeBubbles();
