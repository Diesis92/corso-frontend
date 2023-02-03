// variabile (l-value)
//    |  operatore di assegnazione
//    |  |   espressione (r-value)
//    |  |    |
//    V  V    V
var nome = "Nello" // letterale stringa (alfanumerico)
var numero = 10 // letterale numerico
var logico = true // o false - letterali booleani

var espressione = 10 * (2 + 4) - 3 / 6 + 2 ** 3
var resto = 16 % 5 // modulo - resto di una divisione tra interi

var conc = nome + " Rizzo" // concatenazione
console.log(conc)

var confronto = numero > 0
console.log(confronto)
confronto = numero >= 0
console.log(confronto)
confronto = numero < 0
console.log(confronto)
confronto = numero <= 0
console.log(confronto)
confronto = numero == 0
console.log(confronto)
confronto = numero != 0
console.log(confronto)

confronto = 14 == "14"
console.log(confronto)
confronto = 14 === "14"
console.log(confronto)
//                     OR
// restituisce true se almeno una 
// delle due espressioni booleane
// è true
//                      |
//                      V
confronto = numero < 0 || numero > 10
console.log(confronto)
//                     AND
// restituisce true se entrambe
// le espressioni booleane
// sono true
//                      |
//                      V
confronto = numero < 0 && numero > 10
console.log(confronto)
//         NOT
// operatore unario
// (lavora su un solo operando)
// inverte il risultato di una
// espressione booleana
//          |
//          V
confronto = !(numero < 0)
console.log(confronto)

if (numero >= 10) { // blocco di codice
    // istruzioni eseguite o tutte o nessuna
    console.log("ho eseguito il blocco")
}
if (numero < 10) {
    console.log("questo blocco non è eseguito")
}
else { // blocco eseguito se la condizione della if è false
    console.log("qui numero è MINORE di 10")
}
console.log("Prima del while")
while (numero > 0) {
    console.log(numero)
    numero--
}
console.log("Dopo il while")
for (var i = 0; i < 10; i += 2) {
    console.log("for i = ", i)
}
for (var i = 10; i > 0; i = i - 2) {
    console.log("for i = ", i)
}
// array
var a = ["lun", "mar", "mer", "gio", "ven", "sab", "dom"]
console.log(a[4])
console.log("accesso a array con for clasico")
for (var i = 0; i < 7; i++) {
    console.log(a[i])
}
console.log("accesso a array con for-in")
for (var i in a) {
    console.log(a[i])
}
console.log("accesso a array con for-of")
for (var i of a) {
    console.log(i)
}

var v = -10 // variabile globale (visibile dappertutto)

function esegui_blocco() {
    var v = 10 // variabile locale alla funzione
    console.log("Esecuzione del blocco di codice di una function")
    console.log("Valore di v nella function", v)
}
//{
//    console.log("Esecuzione di questo blocco di codice")
//}
esegui_blocco()
esegui_blocco()
esegui_blocco()
console.log("Valore di v fuori dalla function", v)

//               parametro della funzione
//                   |
//                   V
function raddoppia(valore) {
    //var valore = 4
    var risultato = valore * 2
    console.log(valore, " per ", 2, "uguale", risultato)
}
//       argomento della funzione
//        |
//        V
raddoppia(4)
raddoppia(8)

function potenza(base, esponente) {
    // non è stata valorizzata la base 
    // base == false, !base == true
    if (!base) base = 1
    if (!esponente) esponente = 0
    var risultato = 1
    for (var i = 0; i < esponente; i++) {
        risultato *= base
    }
    console.log(base, "^", esponente, "=", risultato)
    return risultato
}
var duealcubo = potenza(2, 3)
console.log("due al cubo = ", duealcubo)
potenza()
potenza(4)

var nome = "Pippo" // stringa (di caratteri)
console.log(nome.lastIndexOf("p"))
console.log(nome.indexOf("p"))
console.log(nome.length)

var giorni = ["l", "m", "m", "g", "v", "s", "d"]
giorni.forEach(function (giorno) { console.log(giorno) })
giorni.forEach(function (giorno, indice) { console.log(indice, giorno) })
giorni.forEach((giorno, indice) => console.log(indice, giorno))

// creo un nuovo paragrafo, distaccato dalla pagina (sospeso, detached)
var nuovoparagrafo = document.createElement("p")
// aggiungo del testo al paragrafo
nuovoparagrafo.innerText = "Che ne pensate? Vi piace?"
// cerco tutti gli elementi che hanno tag <body>
var bodies = document.getElementsByTagName("body")
// prendo il primo (E UNICO)
var body = bodies[0]
// aggiungo al body il paragrafo creato precedentemente
body.appendChild(nuovoparagrafo)

var span = document.createElement("span")
span.style.color = "red"
span.style.backgroundColor = "yellow"
span.innerText = "prova"
nuovoparagrafo.appendChild(span)

var input = document.createElement("input")
console.log(input)
input.value = "50"
input.setAttribute("type", "range")
body.appendChild(input)