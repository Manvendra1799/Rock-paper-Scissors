//intial userScore and computeScore
let userScore = 0;
let computerScore = 0;

//const choices to store the array of choice
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


userUpdatedScore = document.querySelector("#user-score h4");
computerUpdatedScore = document.querySelector("#computer h4");









//Module to show Winner.
const showWinner = (userWin, userChoice, compChoice) =>{

    if(userWin === true){
       userUpdatedScore.innerText =  ++userScore;
        msg.innerText= `You Win ! Your  ${userChoice}  beats  ${compChoice}`;
        msg.style.backgroundColor = "#A0C878";
      
}

    else{
        console.log("you lost.");
        computerUpdatedScore.innerText = ++computerScore;;
        msg.innerText = `You lost . ${compChoice}  beats  your ${userChoice}`;
        msg.style.backgroundColor = "#E52020";
    }

    }



const drawGame = () => {
    console.log("draw !");
    msg.innerText = "Game is draw . Play again ";
    msg.style.backgroundColor = "black";
}




//PlayGame ->
const playGame = (userChoice) => {
    //userChoice received!
    console.log("user choice = " +userChoice);

    const compChoice = genChoice();
    console.log("computer choice = " +compChoice);


    //Actual game logic!!
    if(userChoice === compChoice){
       //draw();
       drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissor"? false : true;
        }

        else{
            //paper, rock
            userWin = compChoice === "rock"? false : true;
        }
        //show winner!
        showWinner(userWin, userChoice, compChoice);
    }
   
}
//identify the starting point of code->>>>

/*How to Select the userChoice ?

s1: select div associated with that image.

s2: add event listener to each div->click // keydown

s3: see How to use getAttribute() -> it should give unique ID eg:@Rock @Paper @Scissor

s4: use console.log-> for debugging 

*/

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

    const userChoice = choice.getAttribute("id");    
    playGame(userChoice);
    });
   
});


/*How to generate the computer choice?

Approach 1: mapping random number with choice
 1->rock
 2->paper
 3->Scissor

 Approach 2: fetch out from the array;

*/

const genChoice = () =>{
    let randomChoice = Math.floor(Math.random()*3)+1;
    
    //Mapping random number -> choice
   let choice;
    switch(randomChoice){
        case 1:
        choice = "rock";
        break;
        case 2:
        choice = "paper";
        break;
        case 3:
        choice = "scissor";
        break;
        default:
        choice = "invalid";
        break;
    }

   return choice;

   
}
