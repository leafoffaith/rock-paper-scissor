const play      = ["rock", "paper", "scissor"];
const rock      = document.querySelector("#rock");
const paper     = document.querySelector("#paper");
const scissor   = document.querySelector("#scissor");
const start     = document.querySelector("#start");
var   buttons   = document.querySelectorAll(".play");
var   comp      = document.getElementById("comp");
// console.log(comp)
let check;
let rounds;
let score;

//================================
start.addEventListener("click", game);
document.getElementById("reset").addEventListener("click", reset);
//================================


//Disabled Buttons
buttons.forEach(function(item){
    item.setAttribute("disabled", "");
})


// EVENT LISTENERS
rock.addEventListener("click", function(){
    score += playRound("rock", computerPlay());
    document.getElementById("trackScore").innerHTML = score;
    check++;
    checkWin();            
});
paper.addEventListener("click", function(){
    score += playRound("paper", computerPlay());
    document.getElementById("trackScore").innerHTML = score;
    check++;
    checkWin();
});
scissor.addEventListener("click", function(){
    score += playRound("scissor", computerPlay());
    document.getElementById("trackScore").innerHTML = score;
    check++;
    checkWin();
});


//Main
    function game()
        {
            score = 0;
            check = 0;
            rounds = Number(prompt("Number of rounds: "));
            if(rounds == 0)
            {
                return 1;
            }
            console.log(rounds);
            buttons.forEach(function(item){
            item.removeAttribute("disabled", "");
            })
        }

//Helper Functions
    function reset() 
        {
            document.getElementById("trackScore").innerHTML = 0;
            game();
            comp.innerHTML = " ";
        }

    function checkWin(){
        if(check == rounds)
        {
            if(score > rounds / 2) 
            {
                alert("You're good");
                reset();
            }
            else
            {
                alert("You sleep with the fishes");
                reset();
            }
        }
    }

    function computerPlay() {
    return play[Math.floor(Math.random() * play.length)];
    }

    function playRound(playerSelection, computerSelection){

        let round = playerSelection + computerSelection;

        if(playerSelection === computerSelection)
        {   
            comp.innerHTML = `Tied.`
            console.log("It's a tie");
            return 0;
        }
        else 
        {
            switch (round) 
            {
                case 'rockpaper':
                case 'paperscissor': 
                case 'scissorrock':
                    console.log("You were beaten");
                    comp.innerHTML = `Oof.`
                    return 0;
                case 'paperrock':
                case 'scissorpaper':
                case 'rockscissor':
                    console.log("Radical");
                    comp.innerHTML = `Radical.`
                    return 1;
            }
        } 
    }


