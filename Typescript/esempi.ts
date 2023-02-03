// algoritmo che conta a ritroso da 20 a 0 con passo di 2
let variabile = 20
while ( variabile > 0 ) {
   console.log(variabile);
   variabile -=2 // variabile = variabile - 2
    
}

console.log("Algoritmo con FOR")
 for (let indice: number = 20, v:string = "1"; indice > 0 && v.length < 7; indice -= 2, v += "#") {
    console.log(indice, v)
 }

 /* ciclo infinito che si blocca sul terminale solo con CTRL+C
 for (let i = 0; ; i ++) {
    console.log(i) 
 }*/

 const d = new Date ()
 console.log(d)
 d.setFullYear (2024) // d è constante ma cambia il suo stato interno!
 console.log(d)
 // d = new Date() // d è const e non cambia la sua area di memoria

 enum GradoSoddisfazione {
    Scarso, Medio, Alto
 }

 let sentimento = GradoSoddisfazione.Scarso
 if (sentimento = GradoSoddisfazione.Scarso) 
        console.log("Non sono soddisfatto")
 else if (sentimento == GradoSoddisfazione.Medio)
        console.log("Così e così")
 else if (sentimento == GradoSoddisfazione.Alto)
        console.log("Sono soddisfattissimo")

enum Color {
    Red = 0xff0000,
    Green = "Verde",
    Blue = 0x0000ff
}

console.log(Color.Red)
console.log(Color.Green)
console.log(Color.Blue)
console.log(Color.Red + Color.Blue)
    
            
   