/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(i, pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.shift();
pets.push("dog");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "n/a";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
let x;

for (i = 0; i < cars.length; i++) {
  x = cars[i].trims.shift();
  justTrims.push(x);
}

console.log(cars);
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

let findLetter = "b";

for (i = 0; i < cars.length; i++) {
  let x = cars[i].color.indexOf(findLetter);
  if (x === 0) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let findNumber = 0;

console.log(numericArray);

while (findNumber < numericArray.length) {
  console.log(numericArray[findNumber]);
  if (numericArray[findNumber] === 32) {
    break;
  }
  findNumber++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = [
  "1: a",
  " 2: b",
  " 3: c",
  " 4: d",
  " 5: e",
  " 6: f",
  " 7: g",
  " 8: h",
  " 9: i",
  " 10: l",
  " 11: m",
  " 12: n",
  " 13: o",
  " 14: p",
  " 15: q",
  " 16: r",
  " 17: t",
  " 18: u",
  " 19: v",
  " 20: z",
];
const pos = [];
let savePos;
for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      savePos = 1;
      break;
    case "b":
      savePos = 2;
      break;
    case "c":
      savePos = 3;
      break;
    case "d":
      savePos = 4;
      break;
    case "e":
      savePos = 5;
      break;
    case "f":
      savePos = 6;
      break;
    case "g":
      savePos = 7;
      break;
    case "h":
      savePos = 8;
      break;
    case "i":
      savePos = 9;
      break;
    case "l":
      savePos = 10;
      break;
    case "m":
      savePos = 11;
      break;
    case "n":
      savePos = 12;
      break;
    case "o":
      savePos = 13;
      break;
    case "p":
      savePos = 14;
      break;
    case "q":
      savePos = 15;
      break;
    case "r":
      savePos = 16;
      break;
    case "s":
      savePos = 17;
      break;
    case "t":
      savePos = 18;
      break;
    case "u":
      savePos = 19;
      break;
    case "v":
      savePos = 20;
      break;
    case "z":
      savePos = 21;
      break;
    default:
      savePos = 0;
  }
  pos.push(savePos);
}
console.log("Controllo: " + alfabeto);
console.log(charactersArray);
console.log(pos);
