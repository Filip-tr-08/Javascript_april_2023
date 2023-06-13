//FUNKCII

// deklariranje (kreiranje) na funkcija
//function imeNaFunkcija(){
//  komandi
//}

// povikuvanje (izvrsuvanje na funkcija)
//imeNaFunkcija();
//imeNaFunkcija();

// function greeting() {
//   alert("Hello i am Filip");
// }

// greeting();
// greeting();
// greeting();

function printSum(broj1, broj2) {
  console.log(broj1 + broj2);
}

printSum(1, 3);
printSum(2, 4);

//zadaca1
//Write 4 functions
// All functions take 2 parameters and return a result. Then print that result.
// Function that sums 2 numbers
// Function that subtracts 2 numbers
// Function that multiplies 2 numbers
// Function that divides 2 numbers

function printanje(ime, prezime, godini, isWorking) {
  console.log(`${ime} ${prezime} ima ${godini} godini. Vraboten: ${isWorking}`);
}

printanje("Filip", "Trajanovski", 27, true);

function zbir(broj1, broj2, broj3) {
  var zbirNaTriBroja = broj1 + broj2 + broj3;
  return zbirNaTriBroja;
}

var zbirPromenliva = zbir(1, 4, 5);
console.log(zbirPromenliva);

var zbirPromenliva2 = zbir(2, 4, 6);
console.log(zbirPromenliva2);

var novaBrojka = 12 - zbir(1, 4, 5);
console.log(novaBrojka);

//zadaca2
//Celsius to Fahrenheit formula: X°C x 1.8 + 32
//Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
//Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result.
//Formula: (5/9) * (Fahrenheit-32);

// Globalna i lokalna promenliva

// var promenlivaNadvorOdFunkcija = "Globalna promenliva"; => ova e globalna promenliva
var brojka = 14;

function nekojaFunkcija() {
  brojka = 15;
  //   var promenlivaVoFunkcija = "lokalna promenliva";  => Ova e lokalna promenliva
  //   promenlivaVoFunkcija = 18; => poradi toa sto nema var koga se kreira promenlivata pod default se kreira globalna promenliva (Ova ne treba da se slucuva i se smeta za greska)
  return brojka;
}

console.log(brojka);
console.log(nekojaFunkcija());
console.log(brojka);
var novaBrojka = nekojaFunkcija();
console.log(novaBrojka);
// console.log(promenlivaVoFunkcija);

// var, let, const
// var => function scope
// let => block scope
// const => block scope (ne mozeme da ja menuvame vrednosta na promenliva koja e const)
const konstanta = "konstanta vrednost";
const PI = 3.14;

// function nesto() {
//   if (true) {
//     let color = "red";
//   }
//   console.log(color); // ova ke dade greska bidejki color promenlivata postoi samo vo if blokot
// }
// nesto();

//Built in functions
// - parseInt()
// - parseFloat()
// - Number()
// - String() -> obratno od Number dobiva brojka kako parametar a vrakja string
// - site funkcii za nizi i stringovi

//Objects

//I nacin kreiranje na objekti : Literal notation
let human = {
  ime: "Petko",
  prezime: "Petkovski",
  age: 35,
  height: 190,
  isWorking: false,

  sleep: function () {
    console.log(`${this.ime} ${this.prezime} is sleeping`);
  },
};

console.log(human.ime);
console.log(`${human.ime} ${human.prezime} ima ${human.age} godini`);
console.log(human["ime"]); // vtor nacin na pristapuvanje na property
human.sleep();

//zadaca3
//Create a JavaScript object that will describe you.
//Include at least 5 properties, including a string, a number and a boolean
//and one method
