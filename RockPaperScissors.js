
    function computerPlay(){
        let choices = ["rock", "paper", "scissors"];
        let x = Math.floor( Math.random() * 3 );
        return choices[x];        

    }

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if(computerSelection!==playerSelection){
            if(computerSelection==="paper" && playerSelection==="rock"){
                result = "You lose. Paper beats Rock.";
            }
            else if(computerSelection==="rock" && playerSelection==="paper"){
                result = "You win! Paper beats Rock.";
            }
            else if(computerSelection==="rock" && playerSelection==="scissors"){
                result = "You lose. Rock beats Scissors";
            }
            else if(computerSelection==="scissors" && playerSelection==="rock"){
                result = "You win! Rock beats Scissors.";
            }
            else if(computerSelection==="scissors" && playerSelection==="paper"){
                result = "You lose. Scissors beats Paper.";
            }
            else if(computerSelection==="paper" && playerSelection==="scissors"){
                result = "You win! Scissors beats Paper.";
            }
        }
        else{ 
            result = "Tie game!";
        }
        if(result[6]==="n"){
                userScore++;
            } 
        else if(result[6]==="s"){
                computerScore++;
            }
        else if(result=== "Tie game!"){
                userScore++;
                computerScore++;
            }
            console.log(result);
            console.log("Your Score: "+userScore);
            console.log("Computer's Score: "+computerScore);
    }

    let computerScore = 0;
    let userScore = 0;

    function gameEndCheck(){
      
        console.log('Game end');
  
        if (userScore>computerScore){
          gameEnd.textContent = 'You win! This 5 match series has ended.';
        } else if (userScore === computerScore){
          gameEnd.textContent='Its a draw! This 5 match series has ended.';
        } else {
          gameEnd.textContent= "You lose. This 5 match series has ended.";
        }
  
      }
  
      let roundNumber = 1;
  
      function game2(e){
  
        round.textContent = 'Round ' + roundNumber;
        
  
        console.log(e.target.textContent);
  
        userStatus.textContent = e.target.textContent.toLowerCase();
  
        pcStatus.textContent = computerPlay();
  
        roundResult.textContent = playRound(userStatus.textContent,pcStatus.textContent);
  
        userPoints.textContent = userScore;
        pcPoints.textContent = computerScore;
  
        console.log("round number: " + roundNumber);
        gameEnd.textContent = '';
        roundNumber += 1;
  
        if (roundNumber==6){
          gameEndCheck();
          roundNumber = 1;
          playerPoints = 0;
          computerPoints = 0;
          return;
        }
  
        
      }
  
  
      let round = document.querySelector('.round');
      round.textContent = "Start";
  
      let userStatus = document.querySelector('#userStatus.gameMessage');
      userStatus.textContent = "User";
  
      let pcStatus = document.querySelector('#pcStatus.gameMessage');
      pcStatus.textContent = "PC";
  
      let userPoints = document.querySelector('#userPoints.gameMessage');
      userPoints.textContent = userScore;
  
      let pcPoints = document.querySelector('#pcPoints.gameMessage');
      pcPoints.textContent = computerScore;
  
      let roundResult = document.querySelector('#roundResult.gameMessage');
      roundResult.textContent = "";
  
      let gameEnd = document.querySelector('#game.gameMessage');
      gameEnd.textContent = "";
  
      const buttons = Array.from(document.querySelectorAll('.button'));
      buttons.forEach(button => button.addEventListener('click', game2));
  