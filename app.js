// selecting items 
let startBtn= document.querySelector(".startGame"); 
let h3 = document.querySelector("h3");
let allBtns = document.querySelectorAll(".btn");
let body = document.querySelector("body");

// variables and arrays  
let btns = ['y', 'r', 'b', 'g'];
let gameSt=[];
let userSt=[];
let lvl = 0;
let lastLvl = 0;

let isGame = false;
startBtn.addEventListener("click" , function(){
    if(isGame == false){
        lastLvl = 0;
        console.log("Game started !!!!");
        isGame = true;
        startBtn.innerText = "Stop";
        startBtn.style.backgroundColor = "red";
        startBtn.style.color = "white";
        btnPress;
        lvlUp();
        
    }
    else if(isGame == true){
        lvl = 0;
        console.log(`Game stoped !!!! ${lastLvl}`);
        isGame = false;
        startBtn.innerText = "Start";
        startBtn.style.backgroundColor = "yellow";
        startBtn.style.color = "black";
        console.log(lastLvl);
        gameSt = [];
        userSt=[];
        // lvlUp();
    }
});

function lvlUp(){
    userSt =[];
    lvl++;
    lastLvl = lvl;
    h3.innerText = ` Level: ${lvl}`
    //random logic 
    let rand = Math.floor((Math.random() * 3) + 1 );
    let randColor = document.querySelector(`.${btns[rand]}`);
    btnFlash(randColor);
    gameSt.push(btns[rand]);
    console.log(gameSt);
    console.log(userSt);
}



function check(i){
    
    if(userSt[i] == gameSt[i]){
        if(userSt.length == gameSt.length){
            setTimeout(lvlUp ,1000)
        }
        else{

        }

    }
    else{
        h3.innerText =  `Game Over !!!! Your Score :  ${lastLvl}`
        btnFlashr(body);
        startBtn.innerText = "Try Again !! ";
        startBtn.style.backgroundColor = "yellow";
        startBtn.style.color = "black";
    }
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 500);
}

function btnFlashr(btn){
    btn.classList.add("flashr");
    setTimeout(function(){
        btn.classList.remove("flashr")
    } , 500);
}


function btnPress(){
    console.log("btn was pressed ");
    let btn = this;
    btnFlash(btn);
    btnColor = this.id;
    userSt.push(btnColor);
    console.log(userSt);
    check(userSt.length-1);
}

for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

