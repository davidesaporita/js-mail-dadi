/**
 * CERCA IN UN ARRAY
 * 1) Chiedi all’utente la sua email,
 * 2) controlla che sia nella lista di chi può accedere,
 * 3) stampa un messaggio appropriato sull’esito dell controllo
 * (Lista email: michele@boolean.careers, fabio@boolean.careers, roberto@boolean.careers)
 * 
 * GIOCO DEI DADI
 * 1) generare un numero random da 1  a 6, sia per il giocatore sia per il computer
 * 2) Stabilire il vincitore, in base a chi fa il punteggio più alto
 * 
 */

// Creazione array con liste email ricevute  dal cliente
var emailVip = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
// Raccolta dato email dall'utente
var emailUser = prompt('Digita la tua email come fai sempre (es. peppino@google.it) e premi OK:');
// Flag per memorizzare in una variabile la presenza dell'email dell'utente  nella lista Vip
var emailFound = false;

// Controllo accessi
for( var i=0; i < emailVip.length; i++) {
    if (emailVip[i] == emailUser) {
        emailFound = true;
        console.log('Sei un Vip');
    }
}