const rock = document.querySelector(".rock button");
const paper = document.querySelector(".paper button");
const scissors = document.querySelector(".scissors button");
const users_score = document.querySelector(".user_score");
const computer_score = document.querySelector(".computer_score");
const round = document.querySelector(".round");
const feedback = document.querySelector(".feedback")


let playerScore = 0;
let computerScore = 0;
let roundScore = 0


function computerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];

    let randomComputerChoice = Math.floor(Math.random() * computerChoices.length);

    let computer = computerChoices[randomComputerChoice]

   return computer     
}


let scoreForUser = document.createElement("p");
let scoreForComputer = document.createElement("p");
let round_num = document.createElement("p");
let feed = document.createElement("h3")


scoreForUser.textContent = "Your score: " +  playerScore;
scoreForComputer.textContent = "Computer score: " + computerScore;


function playRound(){}

rock.addEventListener('click', () => {
    roundScore = roundScore + 1 
    round.textContent = "Round: " + roundScore

    users_score.textContent = "Your score: " + playerScore;
    computer_score.textContent = "Computer score: " + computerScore;

    computerChoice();

        if (computerChoice() === "scissors"){
            playerScore = playerScore + 1;
        
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Scissors - You Win!";
            
        }else if (computerChoice() === "paper"){
            computerScore = computerScore + 1;

            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Paper - You Lose!";
        
        }else{
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Rock - You Draw!";
        }

        if (roundScore === 5){
          
            if (playerScore > computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Player wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;
                
            }else if (playerScore < computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Computer wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;

            }else if (playerScore === computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
            feedback.textContent = "It's a Draw";
            round.textContent = "Round: " + roundScore;
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            }
        }
});


paper.addEventListener('click', () => {
    roundScore = roundScore + 1 
    round.textContent = "Round: " + roundScore

    users_score.textContent = "Your score: " + playerScore;
    computer_score.textContent = "Computer score: " + computerScore;

    computerChoice();

        if (computerChoice() === "scissors"){
            computerScore = computerScore + 1;
        
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Scissors - You Lose!";
            
        }else if (computerChoice() === "rock"){
            playerScore = playerScore + 1;

            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Paper - You Win!";
        
        }else{
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Paper - You Draw!";
        }
        if (roundScore === 5){
          
            if (playerScore > computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Player wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;
                
            }else if (playerScore < computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Computer wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;

            }else if (playerScore === computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
            feedback.textContent = "It's a Draw";
            round.textContent = "Round: " + roundScore;
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;
            }
        }
});


scissors.addEventListener('click', () => {
    roundScore = roundScore + 1 
    round.textContent = "Round: " + roundScore

    users_score.textContent = "Your score: " + playerScore;
    computer_score.textContent = "Computer score: " + computerScore;

    computerChoice();

        if (computerChoice() === "scissors"){

            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Scissors - You Draw!";
            
        }else if (computerChoice() === "rock"){
            computerScore = computerScore + 1;

            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Rock - You Lose!";
        
        }else{
            playerScore = playerScore + 1;
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;

            feedback.textContent = "Computer chose Paper - You Win!";
        }
        if (roundScore === 5){
          
            if (playerScore > computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Player wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;
                
            }else if (playerScore < computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
                feedback.textContent = "Computer wins the Round!";
                round.textContent = "Round: " + roundScore;
                users_score.textContent = "Your score: " + playerScore;
                computer_score.textContent = "Computer score: " + computerScore;

            }else if (playerScore === computerScore){
                roundScore = 0;
                playerScore = 0;
                computerScore = 0;
            feedback.textContent = "It's a Draw";
            round.textContent = "Round: " + roundScore;
            users_score.textContent = "Your score: " + playerScore;
            computer_score.textContent = "Computer score: " + computerScore;
            }
        }
});
