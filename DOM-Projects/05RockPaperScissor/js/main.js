let computerArr = ["Rock","Paper","Scissor"];
let rock = document.getElementById('r').children[0];
let paper = document.getElementById('p').children[0];
let scissor = document.getElementById('s').children[0];
let userStatus = document.getElementById('result-user-stat');
let compStatus = document.getElementById('result-comp-stat');
let winner = document.getElementById('result-final-stat');
let userScore = document.getElementById('userScoreVal');
let computerScore = document.getElementById('compScoreVal');
let count = 0;
let computercount = 0;
let usercount = 0;

rock.addEventListener("click",()=>{
    game("Rock");
})

paper.addEventListener("click",()=>{
    game("Paper");
})

scissor.addEventListener("click",()=>{
    game("Scissor");
})


function game(userInput){
    let computer = Math.floor(Math.random()*3);
    let computerInput = computerArr[computer];
    userStatus.textContent=`User: ${userInput}`;
    compStatus.textContent=`Computer: ${computerInput}`;
    function resetScores(){
        count=0;
        usercount=0;
        computercount=0;
        winner.textContent="Winner: ";
        userScore.textContent="0";
        computerScore.textContent="0";
        userStatus.textContent=`User: `;
        compStatus.textContent=`Computer: `;
    }

    if(userInput===computerInput){
        count+=1;
        console.log("same Input");

    }else if (userInput==="Rock" && computerInput==="Paper"){
        computercount+=1;
        count+=1

    }else if (userInput==="Paper" && computerInput==="Scissor"){
        computercount+=1;
        count+=1;

    }else if (userInput==="Scissor" && computerInput==="Rock"){
        computercount+=1;
        count+=1;

    }else if (userInput==="Rock" && computerInput==="Scissor"){
        usercount+=1;
        count+=1;
    }else if (userInput==="Paper" && computerInput==="Rock"){
        usercount+=1;
        count+=1;

    }else if (userInput==="Scissor" && computerInput==="Paper"){
        usercount+=1;
        count+=1;
    }

    userScore.textContent=`${usercount}`;
    computerScore.textContent= `${computercount}`;

    if(count===2 && usercount===2){
        winner.textContent="Winner: User";
        setTimeout(resetScores,2800);

    }else if(count===2 && computercount===2){
        winner.textContent="Winner: Computer";
        setTimeout(resetScores,2800);

    }

    if(count>2 && usercount>computercount){
            winner.textContent="Winner: User";
            setTimeout(resetScores,2800);

        }else if(count>2 && computercount>usercount){
            winner.textContent="Winner: Computer";
            setTimeout(resetScores,2800);

        }

}

