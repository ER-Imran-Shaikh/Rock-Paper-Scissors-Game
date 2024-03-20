let mys = document.querySelector("#my-score");
let comps = document.querySelector("#compi-score");
const choices = document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userCount = 0;
let compCount = 0;

const counterWin = (userCount) => {
    mys.innerText = userCount;
}

const counterLoss = (compCount) => {
    comps.innerText = compCount;
}

const drawGame = () => {
              msg.innerText = "It's a Draw";
              msg.style.backgroundColor = "white";
              msg.style.color = "black";
              msg.style.borderColor = "aqua";
}

const victory = () => {
    msg.innerText = "You Won !";
    msg.style.backgroundColor = "green";
    msg.style.borderColor = "black";
    msg.style.color = "white";
    userCount++;
    counterWin(userCount);
}

const defeat = () => {
    msg.innerText = "You Lost!";
    msg.style.backgroundColor = "red";
    msg.style.borderColor = "black";
    msg.style.color = "white";
    compCount++;
    counterLoss(compCount);
}


const genCompChoice = () => {
    //rock,paper,scissors
    const arr = ["rock","paper","scissors"];
    const randNum = Math.floor(Math.random()*3);
    return arr[randNum];
}

const results = (userWin) => {
    if(userWin == true){
        victory();
    } 
    else {
        defeat();
    }
}

const playGame = (userChoice) => {
            console.log("Your choice is",userChoice);
           const compChoice = genCompChoice();
           console.log("Computer choice is ",compChoice);
           if (userChoice === compChoice){
            drawGame();
           }
           else {
           let  userWin = true;
                if (userChoice==="rock") {
                    userWin = compChoice === "paper" ? false : true;
                   }
                else if (userChoice === "paper"){
                    userWin = compChoice === "scissors" ? false : true;
                }
                else if (userChoice === "scissors") {
                    userWin = compChoice === "rock" ? false : true;
                }
                results(userWin);
           }
       
};

choices.forEach ((choice) => {
    const userChoice = choice.getAttribute("id");
        choice.addEventListener("click" ,()=> {
            playGame(userChoice);
        }) 

})


