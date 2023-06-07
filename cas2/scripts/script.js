// Uslovi

// I NACIN : IF ELSE ELSE IF
// if(uslov)
// {
//naredba
// }
/* */

var broj = 4;

if (broj >= 10) {
  console.log("Ovoj broj e pogolem ili ednakov na 10");
} else {
  console.log("Ovoj broj ne e ednakov ili pogolem od 10");
}

var novBroj = 7;

if (novBroj % 2 == 0) {
  console.log("Ovoj broj e paren");
} else {
  console.log("Ovoj broj e neparen");
}

// var vnesenBroj = prompt("Vnesi broj:");
// var parsiranBroj = parseInt(vnesenBroj);

// if (parsiranBroj == 0) {
//   console.log("Nulata ne e nitu paren nitu neparen broj");
// } else if (parsiranBroj % 2 == 0) {
//   console.log("Vneseniot broj e paren");
// } else {
//   console.log("Vneseniot broj e neparen");
// }

if (5 > 3 && 2 > 4) {
  console.log("Dvata iskazi se tocni");
} else {
  console.log("Ne se dvata iskazi tocni");
}

if ((10 > 9 && 4 > 7) || 9 > 12) {
  console.log("Tocno");
} else {
  console.log("ne e tocno");
}

// Ask the user how much money he has, and depending on the value,
//suggest to him what he should do. Example: less than 20 nothing ,
// above 20 - buy a candy, above 50 buy milk, above 200 - buy bagpack
var pari = 220;
if (pari > 200) {
  console.log("Mozes da kupis ranec");
} else if (pari < 200 && pari > 50) {
  console.log("Mozes da kupis mleko");
}

// II NACIN: Ternary operator - posle prasalnikot se pisuva naredbata za if,
//posle dvete tocki se pisuva naredbata za else

// uslov ? naredba : naredba2

//istoto se slucuva so if i else podole:
// if (uslov) {
//   naredba;
// } else {
//   naredba2;
// }

// Primer:

var brojZaTernaryOperator = 0;
var iskaz = brojZaTernaryOperator % 2 == 0 ? "Paren broj" : "Neparen broj"; // ? == if , : == else
console.log(iskaz);

var iskaz2 =
  brojZaTernaryOperator == 0
    ? "Nitu paren nitu neparen broj"
    : brojZaTernaryOperator % 2 == 0
    ? "Paren broj"
    : "Neparen broj";

console.log(iskaz2);

// Ask the user how much money he has, and depending on the value,
//suggest to him what he should do. Example: less than 20 nothing ,
// above 20 - buy a candy, above 50 buy milk, above 200 - buy bagpack
// do it with ternary operator

// III nacin : Switch

var someValue = 5;

switch (someValue) {
  case 1:
    console.log("Brojot e 1");
    break;
  case 2:
    console.log("Brojot e 2");
    break;
  case 10:
    console.log("Brojot e 10");
    break;
  default:
    console.log("Nisto od prethodnite slucai ne e pogodeno");
    break;
}

//Write a program that gets a number from 1 to 7 as input and dependent on
//the value alerts the corresponding day of the week.
// Example: 1 - Monday, 2 - Tuesday etc.
