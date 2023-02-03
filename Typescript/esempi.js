// algoritmo che conta a ritroso da 20 a 0 con passo di 2
var variabile = 20;
while (variabile > 0) {
    console.log(variabile);
    variabile -= 2; // variabile = variabile - 2
}
console.log("Algoritmo con FOR");
for (var indice = 20, v = "1"; indice > 0 && v.length < 7; indice -= 2, v += "#") {
    console.log(indice, v);
}
/* ciclo infinito che si blocca sul terminale solo con CTRL+C
for (let i = 0; ; i ++) {
   console.log(i)
}*/
var d = new Date();
console.log(d);
d.setFullYear(2024); // d è constante ma cambia il suo stato interno!
console.log(d);
// d = new Date() // d è const e non cambia la sua area di memoria
var GradoSoddisfazione;
(function (GradoSoddisfazione) {
    GradoSoddisfazione[GradoSoddisfazione["Scarso"] = 0] = "Scarso";
    GradoSoddisfazione[GradoSoddisfazione["Medio"] = 1] = "Medio";
    GradoSoddisfazione[GradoSoddisfazione["Alto"] = 2] = "Alto";
})(GradoSoddisfazione || (GradoSoddisfazione = {}));
var sentimento = GradoSoddisfazione;
if (sentimento = GradoSoddisfazione.Scarso)
    console.log("Non sono soddisfatto");
else if (sentimento == GradoSoddisfazione.Medio)
    console.log("Così e così");
else if (sentimento == GradoSoddisfazione.Alto)
    console.log("Sono soddisfattissimo");
var Color;
(function (Color) {
    Color[Color["Red"] = 16711680] = "Red";
    Color["Green"] = "Verde";
    Color[Color["Blue"] = 255] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color.Red + Color.Blue);
