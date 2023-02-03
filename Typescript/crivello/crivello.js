// creare una funzione che prenda input un numero e ristuisca come risultato un arry contenente
//tutti i numeri primi da 2 fino a quel numero
function crivello(n) {
    // si scrivono tutti i numeri naturali a partire da 2 fino a n in elenco detto setaccio
    var setaccio = [];
    for (var i = 0; i <= n; i++) {
        setaccio.push(i);
    }
    // poi si mettono a zero tutti i multipli del primo numero del setaccio (escluso lui stesso)
    /*
    if (setaccio[2] != 0) {

        let altro: number = setaccio[2] // 2 -> i = (2-2) * 2 = 4
        for (let i: number = altro * 2; i <= n; i += altro) {
            setaccio[i] = 0
        }
    }
    // Si prende poi il primo numero diverso di 0 maggiore di 2 e si ripete l'operazione con i numeri che seguono
    if (setaccio[3] != 0) {
        let altro: number = setaccio[3] // 3 è il primo diverso di 0
        for (let i: number = altro * 2; i <= n; i += altro) {
            setaccio[i] = 0
        }

    }

    if (setaccio[4] != 0) {
        let altro: number = setaccio[4]
        for (let i: number = altro * 2; i <= n; i += altro) {
            setaccio[i] = 0
        }
    }
*/
    for (var x = 2; x <= n; x++) {
        if (setaccio[x] != 0) {
            var altro = setaccio[x];
            for (var i = altro * 2; i <= n; i += altro) {
                setaccio[i] = 0;
            }
        }
    }
    setaccio.shift();
    setaccio.shift();
    return setaccio;
}
console.log(crivello(120));
