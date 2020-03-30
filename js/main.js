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
emailButton.addEventListener('click',
    function () {
        // Creazione array con liste email ricevute  dal cliente
        var emailVip = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

        // Raccolta dato email dall'utente
        var emailUser;

        // Flag per memorizzare in una variabile la presenza dell'email dell'utente  nella lista Vip
        var emailFound = false;

        var emailUser = document.getElementById('emailUser').value;
        console.log('Siamo dentro! Con l\'email: ' + emailUser);

        // Controllo accessi
        for( var i=0; i < emailVip.length; i++) {
            if (emailVip[i] == emailUser) {
                emailFound = true;
                console.log('Sei un Vip');
            }
        }

        // Se l'utente ha superato il controllo dell'accesso, può giocare
        if ( emailFound == true ) {
            // Generazione numeri random per il gioco dei dadi
            console.log('Sei un grande, puoi giocare!');
            var userDice = Math.ceil(Math.random() * 12);
            console.log('Hai tirato il tuo dado, hai fatto: ' + userDice);
            var computerDice = Math.ceil(Math.random() * 12);
            console.log('Il computer risponde con: ' + computerDice);
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
);