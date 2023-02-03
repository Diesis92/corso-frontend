/*
Operazioni da eseguire
- lettura del nome
- lettura del cognome
- lettura del sesso
- lettura della data di nascita
- lettura del comune di nascita
- verifica dei valori inseriti (con evidenziazione di errori)
- calcolo del codice fiscale
*/

// lettura del nome
function getName() {
    return document.getElementById("name").value
}
// lettura del cognome
function getSurname() {
    return document.getElementById("surname").value
}
// lettura del sesso (restituisce true se è selezionato M)
function isMale() {
    return document.getElementById("gender_m").checked
}
// lettura della data di nascita
function getBirthday() {
    var day = document.getElementById("birthdate").value
    var month = document.getElementById("birthmonth").value + 1
    var year = document.getElementById("birthyear").value
    console.log(day, month, year)
    var validDate = Date.parse(year + "-" + month + "-" + day)
    console.log(validDate)
    return validDate
    // nel caso di casella di testo di tipo date
    // return new Date(document.getElementById("id").value)
}
// lettura del comune di nascita
function getBirthCity() {
    return document.getElementById("city").value
}
// validazione dell'input
function validate() {
    var name = getName()
    var surname = getSurname()
    var birthday = getBirthday()
    var city = getBirthCity()
    var result = Boolean(name) && Boolean(surname) &&
        Boolean(birthday) && Boolean(city)
    console.log(result)
    return result
}
// calcolo del codice fiscale
function calculate() {
    // dobbiamo essere sicuri che i dati siano validi
    if (validate()) {
        // mi leggo i dati
        //         prendo il nome
        //            |    cancello gli spazi a sinistra e destra
        //            |        |    metto in maiuscolo
        //            |        |        |
        //            V        V        V 
        var name = getName().trim().toUpperCase()
        var surname = getSurname().trim().toUpperCase()
        var birthday = getBirthday()
        var city = getBirthCity().trim().toUpperCase()
        var male = isMale()

        // è tutto pronto per implementare l'algoritmo

        /*
        è composto dai seguenti blocchi:
        - 3 lettere per il cognome
            => mi serve una funzione per gestire il cognome
        - 3 lettere per il nome
            => mi serve una funzione per gestire il nome
        - l'anno di nascita (numero)
        - il mese della data di nascita (lettera)
        - il giorno della data di nascita (numero)
            => mi serve una funzione per gestire la data di nascita
        - il codice del comune di nascita
            => mi serve una funzione per gestire il comune di nascita
        - il carattere di controllo
            => mi serve una funzione per calcolare il codice di controllo
        */
        // gestione del cognome (con una inner-function / funzione innestata)
        function handleSurname() {
            /*
            Sono necessari 3 caratteri per rappresentare il cognome, 
            e sono la prima la seconda e la terza consonante.
            E' possibile che le consonanti siano meno di tre, 
            in questo caso è possibile aggiungere le vocali 
            nell'ordine in cui compaiono nel cognome.
            Per cognomi più corti di 3 caratteri, è possibile 
            sostituire il carattere mancante con la lettera X.
            Chiaramente se ci sono cognomi con più parti, 
            è necessario rimuovere gli spazi e considerare 
            tutto come un cognome unico.
            */
            /*
             Operazioni:
             - ottenimento di consonanti e vocali, scartando altri caratteri
            */
            var cv = getConsonantsAndVowels(surname)
            //  le consonanti
            //        |     le vocali
            //        |       |    un po' di X nel caso di nomi corti
            //        |       |       |  tanto poi prendo i primi 3 car
            //        |       |       |        |
            //        V       V       V        V 
            return (cv[0] + cv[1] + "XXX").substring(0, 3)
        }
        // gestione del nome
        function handleName() {
            /*
            Per il nome il discorso è analogo con la particolarità 
            che se il nome è composto da 4 o più consonanti vengono 
            prese nell'ordine la prima, la terza e la quarta.
            Anche qui potremmo trovarci nella situazione di un numero 
            di consonanti minore di 3 e allo stesso modo si aggiungo le vocali.
            Ripetiamo anche qui che se il nome è più corto di 3 lettere 
            è possibile sostituire i caratteri mancanti con delle X.
            Se il nome fosse composto da più nomi, bisogna considerarlo 
            tutto assieme.
            */
           var cv = getConsonantsAndVowels(name)
           // se ci sono più di tre consonanti (cv[0])
           if (cv[0].length > 3) {
                //   prendo la prima
                //              |   e quelle che vanno dalla 3^ in poi
                //              |                 |
                //              V                 V
                cv[0] = cv[0].charAt(0) + cv[0].substring(2)
           }
           // vedi gestione del cognome
           return (cv[0] + cv[1] + "XXX").substring(0, 3)
        }
        // questa funzione recupera le consonanti e le vocali
        // contenute in un testo
        function getConsonantsAndVowels(text) {
            var cons = "" // qui metterò le consonanti
            var vow = "" // qui metterò le vocali
            // questo for percorre tutti i caratteri di text
            // e li mette dentro l uno alla volta
            for (var l of text) {
                // se è un carattere alfabetico (scarto spazi e altri)
                if (l >= "A" && l <= "Z") {
                    // se si tratta di una vocale
                    if (l == "A" || l == "E" || l == "I" || l == "O" || l == "U") {
                        vow += l // la aggiungo alle vocali
                    }
                    else { // altrimenti
                        cons += l // la aggiungo alle consonanti
                    }
                }
            }
            // creo un array in cui metto come primo elemento le
            // consonanti e poi le vocali, quindi lo rendo disponibile
            // esternamente alla funzione come suo risultato
            return [cons, vow]
        }
        var fc = handleSurname() + 
            handleName() + "00X00X000X"
        // scrivo il risultato nell'apposito div
        document.getElementById("fiscal-code").innerText = fc
        // tolgo la classe hidden dal pannello del risultato
        document.getElementById("results").classList.remove("hidden")
    } else {
        // devo mostrare gli errori
    }
}