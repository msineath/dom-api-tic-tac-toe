//First declare global variables...

//...character markers, move counter and winning states.
const x = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
let xWins = false;  
const o = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
let oWins = false;
let tie = false;
let moveCounter = 0;

//...x goes first...
let currentPlayer = x;

//...array for each character's moves...
const xArray = [];
const oArray = [];

//...winning combinations as 2d array...
let divs = document.querySelectorAll('div');
const winningArrays = [
    [document.querySelector('[id*="0"]').id, document.querySelector('[id*="1"]').id, document.querySelector('[id*="2"]').id],
    [document.querySelector('[id*="3"]').id, document.querySelector('[id*="4"]').id, document.querySelector('[id*="5"]').id],
    [document.querySelector('[id*="6"]').id, document.querySelector('[id*="7"]').id, document.querySelector('[id*="8"]').id],
    [document.querySelector('[id*="1"]').id, document.querySelector('[id*="4"]').id, document.querySelector('[id*="7"]').id],
    [document.querySelector('[id*="0"]').id, document.querySelector('[id*="3"]').id, document.querySelector('[id*="6"]').id],
    [document.querySelector('[id*="0"]').id, document.querySelector('[id*="4"]').id, document.querySelector('[id*="8"]').id],
    [document.querySelector('[id*="2"]').id, document.querySelector('[id*="5"]').id, document.querySelector('[id*="8"]').id],
    [document.querySelector('[id*="2"]').id, document.querySelector('[id*="4"]').id, document.querySelector('[id*="6"]').id]
];

//...disabled newgame button...
const reset = document.getElementById('reset');
reset.disabled = true; 

window.addEventListener('DOMContentLoaded', () => {
    
    //Add a listener for click events.
    document.addEventListener('click', event => {
        const clicked = event.target.id;
        
        //Prevent square theft, make sure characters are only placed in squares, disable game when someone wins or a tie occurs.
        if (event.target.className === 'taken' || !clicked.startsWith('square-') || xWins === true || oWins === true || tie === true) {
            return;
        }
        
        //Set image source to each character's marker.
        let move = document.createElement('img');
        move.src = currentPlayer;
        
        //Mark a square as taken once clicked.
        if (!event.target.classList.contains('taken')) {
            event.target.classList.add('taken');
        };
        
        //Add move to character array, increment counter and then switch characters.
        if (currentPlayer === x) {
            xArray.push(clicked); 
            moveCounter++;    
            currentPlayer = o;
        } else {
            oArray.push(clicked);
            moveCounter++;
            currentPlayer = x;
        }

        //Add move to gameboard.
        event.target.appendChild(move);
        
        //Check for win.
        let header = document.getElementById('game-status');
        for (i = 0; i < winningArrays.length; i++) {
            let subArr = winningArrays[i];
            let checker = (playerScore, requirements) => requirements.every(el => playerScore.includes(el));
            if(checker(xArray, subArr)) {
                xWins = true;
                header.innerText = 'X WINS!'                
            } else if (checker(oArray, subArr)) {
                oWins = true;
                header.innerText = 'O WINS!'
            }
        }
        
        //Check for tie.
        if (moveCounter === 9) {
            tie = true;
            header.innerText = "TIE!"
        }

        //Enable newgame after game ends.
        if (xWins || oWins || tie ) {
            reset.disabled = false;
        }
    })
    
    
    //Start new game.    
    reset.addEventListener('click', event => {
        window.location.reload();
    })

})
