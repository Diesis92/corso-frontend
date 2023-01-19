function emit(text, color, back) {
    //    var text = "Primo paragrafo"
    //    var color = "red"
    //    var back = "black"
    
    // se non è definito il testo
    // oppure (||)
    // non è definito il colore
    // oppure (||)
    // non è definito il back
    if (text === undefined || color === undefined || back === undefined) {
        return // esce immediatamente dalla funzione
     }

    document.write("<p style='")
    document.write(getCssColor(color))
    document.write(getBackColor(back))
    document.write("'><span style='font-family: monospace;font-size: 2em'>")
    document.write(text[0] + "</span>")
    document.write(text.substring(1))
    document.write("</p>")
}

function getCssColor(c) {
    return "color: " + c + ";"
}

var getBackColor = function (b, f) { 
    if (f === undefined) f = "white"
    return "background: linear-gradient(" + f + ", " + b + ");" 
}