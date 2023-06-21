// Prodolzenie za ciklusi

//Polnenje niza so brojki
// let karakter = prompt("Vnesi broj");
// let niza = [];

// if (isNaN(karakter)) {
//   // isNaN -> is not a number
//   console.log("Vnesovte karakter koj ne e broj");
// } else {
//   while (!isNaN(karakter)) {
//     niza.push(karakter);
//     karakter = prompt("Vnesi broj");
//   }
// }

// console.log(niza);

// let brojac = 0;

let primerNiza = [1, 3, 7, 8]; // primerNiza.length == 4 ova vazi za brojac <=primerNiza.length
// brojac == 0, 0 < 4, printa prv element =1, brojac++ = 1,
// brojac == 1, 1 < 4, printa vtor element =3, brojac++ = 2,
// brojac == 2, 2<4, printa tret element = 7, brojac++ =3,
// brojac == 3, 3<4, printa cetvrt element = 8, brojac++=4
// brojac == 4, 4=4, printa undefined, brojac++ =5,
// brojac == 5, 5<=4, zapira while
// while (brojac < primerNiza.length) {
//   console.log(primerNiza[brojac]);
//   brojac++;
// }

//Ispisuvanje na nizata so brojki
// while (brojac < niza.length) {
//   //   console.log(niza[brojac]);
//   document.write(niza[brojac]); // za da se ispuva na ekran element
//   brojac++;
// }

//Sobiranje na elementite(brojkite) od nizata
// let brojac2 = 0;
// let zbir = 0;

// while (brojac2 < niza.length) {
//   zbir += Number(niza[brojac2]); // zbir = zbir + niza[brojac2]
//   brojac2++;
// }
// document.write(zbir);

//Funkcija za printanje na cifrite od eden broj
function digitsInNumber(input) {
  console.log(`The number is ${input}`);

  while (input > 0) {
    console.log(input % 10);
    input = parseInt(input / 10);
  }
}
// brojot e 543
// vo uslovot od while: 543>0, znaci vleguva vo while, 543/10 = 54.3, ali modulot go dava ostatokot pri delenje, 543%10 == 3(ova se printa)
// so parseInt vikame da dobieme pri delenjeto cel broj bez decimali, 543/10 == 54, vekje trojkata ja nema, i zavrsuva ovaa iteracija
// vtora iteracija proveruva input==54 dali e pogolemo od 0 (54>0)== true, vleguva vo while i so modul 54%10== 4(ova se printa), posle so 54/10 == e 5.4 no radi parseInt dobivame cel broj 5 bez decimala,
// treta iteracija proveruva input == 5 > 0, toa e true i vleguva vo while, so 5%10== 5(ova go printa), potoa so 5/10 poradi parseInt e 0
// na kraj proveruva input == 0 >0, ova e false i tuka zapira while
digitsInNumber(543);

//Najgolemiot broj vo edna niza

let numbers = [-2, 1, 4, 5, 35, 46, 8, 10, 25];

function findLargestNumber(input) {
  let brojac = 0;
  let max = -Infinity;
  while (brojac < input.length) {
    if (input[brojac] > max) {
      max = input[brojac];
    }
    console.log(`Value of max is ${max}`);
    brojac++;
  }
  return max;
}

let maxValue = findLargestNumber(numbers);
console.log(maxValue);

// Funkcija za stepen

function sumPow(num1, num2) {
  let result = 0;
  let brojac = num1;
  while (brojac <= num2) {
    result += Math.pow(brojac, 2); // za Math proveri i drugi funkcii
    brojac++;
  }
  return result;
}

console.log(sumPow(1, 10));

// DO , WHILE

let brojac = 10;
let suma = 0;

do {
  suma += brojac;
  brojac++;
} while (brojac < 10);

console.log(suma);

// FOR
// for(inicijalizacija;uslov;brojac++){
//    naredbi;
//}

// for (let brojac = 1; brojac <= 10; brojac++) {
//   console.log(brojac);
// }

let iminja = ["Filip", "Hristo", "Riste", "Nikola", "Cedomir", "Stevica"];

for (let i = 0; i < iminja.length; i++) {
  console.log(iminja[i]);
}

let nizaOdBrojki = [
  "nula",
  "eden",
  "dva",
  "tri",
  "cetiri",
  "pet",
  "sest",
  "sedum",
  "osum",
  "devet",
];

// let broj = Number(prompt("Vnesi broj"));
// if (isNaN(broj) || broj < 10 || broj > 99) {
//   console.log("Brojot e nevaliden");
// } else {
//   let str = "";
//   for (let pom = broj; pom > 0; pom = parseInt(pom / 10)) {
//     let cifra = pom % 10; // ovde sme ja dobile cifrata od brojot
//     str = " " + nizaOdBrojki[cifra] + str;
//   }
//   console.log(str.trim());
// }

// FOR OF, FOR IN
// so for of se ispisuvaat vrednostite na elementite
for (brojkaOdNizata of nizaOdBrojki) {
  console.log(brojkaOdNizata); // nizaOdBrojki[brojac];
}
//so for in se ispisuvaat indeksite na elementite
for (brojkaOdNizata in nizaOdBrojki) {
  console.log(brojkaOdNizata);
}
