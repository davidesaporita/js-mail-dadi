/**
 * CERCA IN UN ARRAY
 * 1) Chiedi all’utente la sua email,
 * 2) controlla che sia nella lista di chi può accedere,
 * 3) stampa un messaggio appropriato sull’esito dell controllo
 * (Lista email: michele@boolean.careers, fabio@boolean.careers, roberto@boolean.careers)
 * 
 * GIOCO DEI DADI
 * 1) generare un numero random da 1 a 6, sia per il giocatore sia per il computer
 * 2) Stabilire il vincitore, in base a chi fa il punteggio più alto
 * 
 */


// All'azione click sul bottone "Clicca qui" raccogliamo in una variabile l'email inserita
var emailButton = document.getElementById('emailButton');
emailButton.addEventListener('click', play);

var dontclickButton = document.getElementById('dontclick');
dontclickButton.addEventListener('click',
    function () {
        document.getElementById('emailButton').classList.add('btn--decadent');
        document.getElementById('title').innerHTML = 'Ecco fatto,<br>ora non puoi giuocare più';
        document.getElementById('explosion').classList.remove('hidden');
        document.getElementById('explosion').classList.add('showWithDelay');
        setTimeout(function(){ document.getElementById('explosion').classList.add('destroyShow'); }, 4400);
    }
);

var playAgain = document.getElementById('playAgain');
playAgain.addEventListener('mousedown', infiniteRotation);
playAgain.addEventListener('mouseup', () => { play(); stopRotation(); });

document.getElementById('backtoMenu').addEventListener('click', backtoMenu);


function play() {
    // Creazione array con liste email ricevute  dal cliente
    var emailVip = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
    // Raccolta dato email dall'utente
    var emailUser = document.getElementById('emailUser').value;
    // Flag per memorizzare in una variabile la presenza dell'email dell'utente  nella lista Vip
    var emailFound = false;

    // Controllo accessi
    for ( var i=0; i < emailVip.length; i++ ) {
        if (emailVip[i] == emailUser) {
            emailFound = true;
            console.log('Sei un Vip');
        }
    }

    // Se l'utente ha superato il controllo dell'accesso, può giocare
    if ( emailFound == true ) {
        var checkSection = document.getElementById('check');
        var gameSection = document.getElementById('game');
        checkSection.classList.remove('show');
        checkSection.classList.add('hidden');
        gameSection.classList.add('show');
        gameSection.classList.remove('hidden');

        var arrayDice = [ '<i class="fas fa-dice-one"></i>', 
                          '<i class="fas fa-dice-two"></i>', 
                          '<i class="fas fa-dice-three"></i>', 
                          '<i class="fas fa-dice-four"></i>', 
                          '<i class="fas fa-dice-five"></i>', 
                          '<i class="fas fa-dice-six"></i>' ];

        // Generazione numeri random per il gioco dei dadi
        var userDice = Math.ceil(Math.random() * 6);
        var userDiceFont = arrayDice[userDice-1];
        console.log('Hai tirato il tuo dado, hai fatto: ' + userDice);

        var computerDice = Math.ceil(Math.random() * 6);
        var computerDiceFont = arrayDice[computerDice-1];
        console.log('Il computer risponde con: ' + computerDice);

        document.getElementById('userDice').innerHTML = userDiceFont;
        document.getElementById('computerDice').innerHTML = computerDiceFont;

        var checkSection = document.getElementById('userDice').classList.add('rotate');
        var checkSection = document.getElementById('computerDice').classList.add('rotate');
        
        // Verifica dei risultati e feedback all'utente
        if ( userDice > computerDice ) {
            console.log('Complimenti! Hai vinto un buono di 5.000 lire per l\'acquisto della torre Eiffel');
        } else if ( userDice < computerDice ) {
            console.log('Ci dispiace tantissimo, ma con questa sconfitta hai perso tutto: casa, fortuna, denaro, moglie, marito, etc.');
        } else {
            console.log('Hai pareggiato, sei forte quanto un computer!');
        }
    } else {
        console.log('Non vali niente, non puoi giocare. Ciaaaaoooo!');
    }
}

function infiniteRotation() {
    document.getElementById('userDice').classList.add('rotate--infinite');
    document.getElementById('computerDice').classList.add('rotate--infinite');
}

function stopRotation() {
    document.getElementById('userDice').classList.remove('rotate--infinite');
    document.getElementById('computerDice').classList.remove('rotate--infinite');
}

function backtoMenu() {
    var checkSection = document.getElementById('check');
    var gameSection = document.getElementById('game');
    checkSection.classList.remove('hidden');
    checkSection.classList.add('show');
    gameSection.classList.add('hidden');
    gameSection.classList.remove('show');
} 