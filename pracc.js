let felter = document.querySelectorAll(".felt")
let winnerText = document.querySelector("#winnerText")
let restartknap = document.getElementById("knap")


let spillerX = true;
let locked = [false,false,false,false,false,false,false,false,false,]







function restart(){
restartknap.addEventListener("click",function(){
spillerX = true;
locked = [false,false,false,false,false,false,false,false,false,]
winnerText.textContent = "";

for (let index = 0; index < felter.length; index++) {
  felter[index].textContent = ""
}

for (let index = 0; index < felter.length; index++) {
  felter[index].style.backgroundColor = "white";
}


})
}
restart()




function tjekX(){

  if (
    (felter[0].textContent === "X" && felter[1].textContent === "X" && felter[2].textContent === "X") ||
    (felter[3].textContent === "X" && felter[4].textContent === "X" && felter[5].textContent === "X") ||
    (felter[6].textContent === "X" && felter[7].textContent === "X" && felter[8].textContent === "X")
  ) {
    winnerText.textContent = "X won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "red";
    }
  }
  
  else if (
    (felter[0].textContent === "X" && felter[3].textContent === "X" && felter[6].textContent === "X") ||
    (felter[1].textContent === "X" && felter[4].textContent === "X" && felter[7].textContent === "X") ||
    (felter[2].textContent === "X" && felter[5].textContent === "X" && felter[8].textContent === "X")
  ) {
    winnerText.textContent = "X won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "red";
    }
  }
  
  else if (
    (felter[0].textContent === "X" && felter[4].textContent === "X" && felter[8].textContent === "X") ||
    (felter[2].textContent === "X" && felter[4].textContent === "X" && felter[6].textContent === "X")
  ) {
    winnerText.textContent = "X won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "red";
    }
  }
}


function tjekO(){

  if (
    (felter[0].textContent === "O" && felter[1].textContent === "O" && felter[2].textContent === "O") ||
    (felter[3].textContent === "O" && felter[4].textContent === "O" && felter[5].textContent === "O") ||
    (felter[6].textContent === "O" && felter[7].textContent === "O" && felter[8].textContent === "O")
  ) {
    winnerText.textContent = "O won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "green";
    }
  }
  
  else if (
    (felter[0].textContent === "O" && felter[3].textContent === "O" && felter[6].textContent === "O") ||
    (felter[1].textContent === "O" && felter[4].textContent === "O" && felter[7].textContent === "O") ||
    (felter[2].textContent === "O" && felter[5].textContent === "O" && felter[8].textContent === "O")
  ) {
    winnerText.textContent = "O won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "green";
    }
  }
  
  else if (
    (felter[0].textContent === "O" && felter[4].textContent === "O" && felter[8].textContent === "O") ||
    (felter[2].textContent === "O" && felter[4].textContent === "O" && felter[6].textContent === "O")
  ) {
    winnerText.textContent = "O won!";
    for (let index = 0; index < felter.length; index++) {
      felter[index].style.backgroundColor = "green";
    }
  }
}



function spille(){
  for (let index = 0; index < felter.length; index++) {
    felter[index].addEventListener("click", function(){
      if(spillerX && !locked[index]){
        felter[index].textContent = "X";
        spillerX = false;
        locked[index] = true; 
        tjekO();
        tjekX();
        draw();
        
      } if(!spillerX && !locked[index]) {
        felter[index].textContent = "O";
        spillerX = true;
        locked[index] = true; 
        tjekO();
        tjekX();
        draw();
      }
     
    })
  }
}
spille();

 function draw(){
  if (locked.every((value) => value === true)) {
    winnerText.textContent = "ITS A DRAW!";
  }
 }
