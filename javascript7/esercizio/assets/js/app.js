function ball() {
    return document.getElementById("ball")
}

function board() {
    // ottengo il primo elemento con la classe game-board
    var ballClass = document.querySelector(".game-board")
    return ballClass
}

var _top = 0
var _left = 0

function move(dx, dy) {
    // prendo il tavolo di gioco
    var t = board()
    // prendo la pallina
    var b = ball()
    // larghezza del tavolo - larghezza della pallina
    var w = t.clientWidth - b.clientWidth
    // altezza del tavolo - altezza della pallina
    var h = t.clientHeight - b.clientHeight
    console.log(_top, _left, w, h)
    // se la pallina uscisse fuori dall'area di gioco
    if (_top + dy > h || _top + dy < 0 || _left + dx > w || _left + dx < 0)
        // esco dalla funzione
        return
    // modifico i valori di top e left
    _top += dy
    _left += dx
    // e li scrivo nella pallina
    b.style.top = _top + "px"
    b.style.left = _left + "px"
}
