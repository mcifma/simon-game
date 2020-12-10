 /*state section */
 let playerChoices = []
 let computerChoices = []
 let start = false;
 let noise = true;
 let signal;
 let round;
 let compPick;
 let win;
 let counterId;
 let correct; 
 
 
 
 /** cache DOM elements */
 let redDiv = document.getElementById("red");
 let blueDiv = document.getElementById("blue");
 let greenDiv = document.getElementById("green");
 let yellowDiv = document.getElementById("yellow");
 let startButton = document.getElementById("strBtn");
 let resetButton = document.getElementById("resBtn");
 let pName = document.getElementById("playName")
 
 pName.innerHTML = prompt("What is your name");
 
 startButton.addEventListener('click', begin);
 
 resetButton.addEventListener('click', restart);
 
 
 function begin() {
   computerChoices = [];
   playerChoices = [];
   win = false;
   signal = 0;
   round = 1;
   counterId = 0;
   correct = true;
   for (let i = 0; i < 10; i++) {
   computerChoices.push(Math.floor(Math.random() * 4) + 1);
 }
 compPick = true;
 
 counterId = setInterval(playerTurn, 800);
 }
 
 function restart()
 {
   clearColor();
   clearInterval();
 
   alert("click on start to begin the game");
 }
 
 function playerTurn() 
 {
   if (signal == round) 
   {
     clearInterval(counterId);
     compPick = false;
     clearColor();
   }
 
   if (compPick) 
   {
     clearColor();
     setTimeout(() => {
       if (computerChoices[signal] == 1) first();
       if (computerChoices[signal] == 2) second();
       if (computerChoices[signal] == 3) third();
       if (computerChoices[signal] == 4) fourth();
       signal++;
     }, 200);
   }
 }
 
 function first() {
   if (noise) {
     let audio = document.getElementById("clip1");
     audio.play();
   }
   noise = true;
   yellowDiv.style.backgroundColor = "lightyellow";
 }
 
 function second() {
   if (noise) {
     let audio = document.getElementById("clip2");
     audio.play();
   }
   noise = true;
   blueDiv.style.backgroundColor = "skyblue";
 }
 
 function third() {
   if (noise) {
     let audio = document.getElementById("clip3");
     audio.play();
   }
   noise = true;
   redDiv.style.backgroundColor = "maroon";
 }
 
 function fourth() {
   if (noise) {
     let audio = document.getElementById("clip4");
     audio.play();
   }
   noise = true;
   greenDiv.style.backgroundColor = "lightgreen";
 }
 
 
 
 function clearColor() 
 {
   yellowDiv.style.backgroundColor = "yellow";
   blueDiv.style.backgroundColor = "blue";
   redDiv.style.backgroundColor = "red";
   greenDiv.style.backgroundColor = "green";
  }
 
 function signalColor() {
   yellowDiv.style.backgroundColor = "lightyellow";
   blueDiv.style.backgroundColor = "skyblue";
   redDiv.style.backgroundColor = "maroon";
   greenDiv.style.backgroundColor = "lightgreen";
 }
 
 yellowDiv.addEventListener('click', (event) => {
   playerChoices.push(1);
   check();
   first();
   if(!win) 
   {
     setTimeout(()=> {
       clearColor();
     }, 300);
   }
 
 })
 
 blueDiv.addEventListener('click', (event) => {
   playerChoices.push(2);
   check();
   second();
   if(!win) 
   {
     setTimeout(()=> {
       clearColor();
     }, 300);
   }
 
 })
 
 redDiv.addEventListener('click', (event) => {
   playerChoices.push(3);
   check();
   third();
   if(!win) 
   {
     setTimeout(()=> {
       clearColor();
     }, 300);
   }
 
 })
 
 greenDiv.addEventListener('click', (event) => {
   playerChoices.push(4);
   check();
   fourth();
   if(!win) 
   {
     setTimeout(()=> {
       clearColor();
     }, 300);
   }
 
 })
 
 function check() 
 {
   if (playerChoices[playerChoices.length - 1] !== computerChoices[playerChoices.length - 1])
 
   correct = false;
 
   if (playerChoices.length == 3 && correct == true) 
   {
     winGame();
   }
 
   if (correct == false) 
   {
     signalColor();
     setTimeout(() => {
       clearColor();
       compPick = true;
       signal = 0;
       playerChoices = [];
       correct = true;
       counterId = setInterval(playerTurn, 800);
     }, 800)
 
     noise = false;
   }
 
   if (round == playerChoices.length && correct && !win) 
   {
     round++;
     playerChoices = [];
     compPick = true;
     signal = 0;
     counterId = setInterval(playerTurn, 800);
   }
 }
 
 function winGame() 
 {
   signalColor();
   win = true;
   pName.innerHTML = "You Won!!!!!";
   
 }