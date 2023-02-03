// OPERAZIONI DA IMPLEMENTARE:
// - ad ogni click su una cifra 
//         il simbolo sul pulsante va aggiunto al display
//                                            IMPLEMENTATA IN aggiugiCifra()
// - la gestione dello zero è da fare a parte
//         perché lo 0 va aggiunto solo se sul display ci sono altri numeri
// - la gestione della virgola è particolare
//         innanzitutto la virgola può essere inserita solo una volta
//         se nel display non c'è nulla, prima della virgola devo mettere 
//                                       uno zero
// - i pulsanti operazione:
//         quando premo su un pulsante
//         devo memorizzare da qualche parte il valore attuale
//         e devo memorizzare quale operazione ho richiesto
//         questa operazione sarà poi eseguita alla prossima pressione
//                            di un pulsante operazione!

// contiene l'operazione che sarà eseguita la prossima volta
// che sarà richiamata la funzione eseguiOperazione()
var operazioneDaEseguire = '='
// memorizza il valore corrente dell'espressione che sto calcolando
var accumulatore = 0
// indica se devo cancellare il display prima di aggiungervi qualcosa
var cancellaDisplay = true

// la cancellazione del display è un'altra operazione
function controllaCancellaDisplay() {
    if (cancellaDisplay) {
        // accedo al display
        var campoDisplay = document.getElementById("display")
        // cancello il contenuto attuale del display
        campoDisplay.value = ""
        // a questo punto il display è cancellato
        // quindi la variabile di controllo sarà a false
        cancellaDisplay = false;
    }
}

function eseguiOperazione(operazione) {
    // accedo al display
    var campoDisplay = document.getElementById("display")
    // leggo il contenuto attuale del display
    var attuale = campoDisplay.value

    // devo pure controllare se esiste una operazione in sospeso
    if (operazioneDaEseguire == '+') {
        // dovevo eseguire un'addizione
        accumulatore += 1 * attuale
    }
    else if (operazioneDaEseguire == '-') {
        // dovevo eseguire una sottrazione
        accumulatore -= 1 * attuale
    }
    else if (operazioneDaEseguire == '*') {
        // dovevo eseguire una moltiplicazione
        accumulatore *= 1 * attuale
    }
    else if (operazioneDaEseguire == '/') {
        // dovevo eseguire una divisione
        accumulatore /= 1 * attuale
    } else {
        // è stato premuto su =
        accumulatore = 1 * attuale
    }

    // devo memorizzare il valore attuale
    attuale = accumulatore
    campoDisplay.value = attuale

    // devo memorizzare l'operazione da effettuare
    operazioneDaEseguire = operazione

    // la prossima volta occorre cancellare il display
    cancellaDisplay = true
}
function aggiungiVirgola() {
    // controllo se è necessario cancellare il display
    controllaCancellaDisplay()
    // accedo al display
    var campoDisplay = document.getElementById("display")
    // leggo il contenuto attuale del display
    var attuale = campoDisplay.value
    // come faccio a sapere se nel display c'è una virgola?
    // cerco la virgola nel valore attuale
    var pos = attuale.indexOf('.')
    if (pos == -1) { // se pos == -1 significa che la virgola non c'è
        // a questo punto controllo se il display è vuoto
        // perché in tal caso devo mettere prima uno 0
        if (attuale.length == 0) {
            attuale += '0' // attuale = attuale + '0'
        }
        // infine posso aggiungere la virgola
        attuale += '.'
        // e scrivere il nuovo valore nel campodel display
        campoDisplay.value = attuale
    }
}
function aggiungiZero() {
    // controllo se è necessario cancellare il display
    controllaCancellaDisplay()
    // devo aggiungere lo 0 solo se il display contiene altro
    var campoDisplay = document.getElementById("display")
    // leggo il contenuto attuale del display
    var attuale = campoDisplay.value
    // controllo se c'è qualcosa al suo interno
    //      => se la lunghezza di quanto scritto nel display è > 0
    if (attuale.length > 0) {
        aggiungiCifra('0') // aggiungo la cifra '0'
    }
}

// aggiungere una cifra al display
function aggiungiCifra(cifra) { // "cifra" è la cifra da aggiungere
    // controllo se è necessario cancellare il display
    controllaCancellaDisplay()
    // deve prendere il valore attuale del display
    // per prendere il valore del display devo accedere 
    //   all'albero dell'HTML
    var campoDisplay = document.getElementById("display")
    // leggo il valore attualmente presente sul display
    var attuale = campoDisplay.value
    // deve accodare la cifra da scrivere
    attuale = attuale + cifra // accodo la cifra al valore attuale
    // adesso ho il valore con la nuova cifra alla fine
    // devo scrivere questo valore nel campo
    campoDisplay.value = attuale
}