window.addEventListener('DOMContentLoaded', () => {



    const x = document.createElement('id', 'x');
    x.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"

    const o = document.createElement('id', 'o');
    o.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"

    let marker = ''

    if(player1){
        marker = x
        document.addEventListener('click', event => {
            const clicked = event.target.id
            clicked.innerHTML = marker
            clicked.setAttribute('class', 'taken');

     })
    }else{
        marker = o

        document.addEventListener('click', event => {
            const clicked = event.target.id
            clicked.innerHTML = marker
            clicked.setAttribute('class', 'taken');

     })
    }
})