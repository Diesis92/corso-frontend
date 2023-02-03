var target // il numero "pensato" dal computer
var nome // il nome del giocatore
var partita_in_corso // lo stato del gioco (true = gioco avviato)
var tentativi // il numero di tentativi ancora a disposizione
var numero // il numero digitato dall'utente

// Quali sono le operazioni che sono chiamato a implementare?
// - devo far "pensare" ad un numero
function pensa() {
    target = Math.floor(Math.random() * 1000) + 1
    document.getElementById("target").innerText = target
}
// - devo poter leggere ciò che l'utente ha scritto nel campo del nome
function leggiNome() {
    // leggo il valore scritto nel campo di input dedicato al nome
    nome = document.getElementById("input_nome").value
    // scrivo il nome nell'HTML di pagina
    document.getElementById("nome").innerText = nome
}
// - devo poter cambiare lo stato del gioco
function inizia() {
    partita_in_corso = true // cambio lo stato della partita
    // all'inizio devo inizializzare il numero di tentativi
    tentativi = 10
    // poi devo pensare ad un nuovo numero
    pensa()
    // leggo il nome del giocatore
    leggiNome()
}
function termina() { partita_in_corso = false }
// - devo poter leggere ciò che l'utente ha scritto nel campo del numero
function leggiNumero() {
    numero = 1 * document.getElementById("input_numero").value
}
// - devo mostrare i messaggi informativi sul gioco
function aggiornaUI() {
    document.getElementById("tentativi").innerText = tentativi
}
// - devo fornire un feedback a seguito di un nuovo tentativo
function feedback() {
    // leggo il numero digitato dall'utente
    // => richiamo la funzione leggiNumero che mette 
    //    il numero digitato nella variabile "numero"
    leggiNumero()
    var messaggio // qui sarà contenuto il messaggio per il giocatore
    // se è maggiore del numero pensato
    if (numero > target) {
        // scrivo maggiore
        messaggio = "Il numero inserito è maggiore del target"
    }
    // se è minore
    else if (numero < target) {
        // scrivo minore
        messaggio = "Il numero inserito è minore del target"
    }
    // se è uguale
    else {
        // il giocatore ha vinto
        messaggio = "Hai indovinato, utilizzando " + (10 - tentativi)
            + " tentativi!"
    }
    // decremento il numero di tentativi a disposizione
    tentativi--
    // e lo mostro nella UI
    aggiornaUI()
    // se i tentativi sono terminati
    if (tentativi == 0) {
        // il giocatore ha perso
    }
    // aggiorno il messaggio per il giocatore
    document.getElementById("messaggio").innerText = messaggio
}