//step1.) Declare character markers.
const x = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
  
const o = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"

//step2.) Declare x goes first.
let currentPlayer = x;

window.addEventListener('DOMContentLoaded', () => {

    //step3.) Add listener for click event.
    document.addEventListener('click', event => {
        
        const clicked = event.target.id;

        //step4.) Prevent square theft and make sure characters only go in squares.
        if (event.target.className === 'taken' || !clicked.startsWith('square-')) {
            return;
        }

        //step5.) Set image source to each character's marker.
        let move = document.createElement('img');
        move.src = currentPlayer;
        
        //step6.) Mark a square as taken once clicked (see step4).
        if (!event.target.classList.contains('taken')) {
            event.target.classList.add('taken');
        };

        //step7.) Switch characters.
        if (currentPlayer === x) {
            currentPlayer = o;
        } else {
            currentPlayer = x;
        }
        
        //step8.) Add move to board.    
        event.target.appendChild(move);
    })

})
