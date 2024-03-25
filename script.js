let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
         playGame(userChoice);
    });
});



const playGame=(userChoice)=>{
      //generate computer choice
      const compChoice=genCompChoice();

      if(userChoice === compChoice){
         drawGame();
      }
      else {
        let userWin=true;
          if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="rock"?true:false;
        }
        else if(userChoice==="scissors"){
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
      }

};

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rdmIdx=Math.floor(Math.random ()*3);
    return options[rdmIdx];
}

const drawGame=()=>{
    msg.innerText="It's Draw!";
    msg.style.backgroundColor= "#081b31" ;
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you won!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
