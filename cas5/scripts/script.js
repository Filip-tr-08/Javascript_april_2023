//Prodolzenie za objekti

//zadaca1

// Create a car object with some properties
// model, color, year, fuel, fuelConsumption(used fuel per km)
// and a method that calculates how much fuel you will need to pass some distance.

// II nacin za kreiranje na objekti -> Constructor notation

let hotel = new Object(); // let hotel = {};

hotel.name = "Hilton";
hotel.rooms = 40;
hotel.booked = 25;
hotel.employees = ["Petko", "Stanko", "Marija"];
hotel.owner = {
  ime: "Petar", // ime e key na propertito, "Petar" e value (vrednost) na propertito
  prezime: "Stefanovski",
  god: 56,
};

hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

console.log(hotel.name);
console.log(hotel.owner.ime);
console.log(hotel.employees[1]);

// let petko = {
//   ime: "Petko",
//   prezime: "Prezime",
//   god: 30,
// };

// console.log(petko);
// petko.height = 180;
// petko.god = 45;
// console.log(petko);

delete hotel.name;
console.log(hotel);

//zadaca2
//Write a JavaScript program to delete the lecture property from the following object.
//Add a property age to the object. Add a method getFullName that returns the full name
// ( First Name and Last name )

// III nacin za kreiranje na objekti -> Constructor notation template

// let petko = {
//   ime: "Petko",
//   prezime: "Prezime",
//   god: 30,
// };

// let marija = {
//   ime: "Petko",
//   prezime: "Prezime",
//   god: 30,
// };

// let stanko = {
//   ime: "Petko",
//   prezime: "Prezime",
//   god: 30,
// };

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let hilton = new Hotel("Hilton", 40, 25);
let meriot = new Hotel("Meriot", 100, 56);

let slobodniSobiNaHilton = hilton.checkAvailability();
console.log(slobodniSobiNaHilton);

function Human(ime, prezime, god) {
  this.ime = ime;
  this.prezime = prezime;
  this.god = god;
}

let stanko = new Human("Stanko", "Stankovski", 55);
let marija = new Human("Marija", "Stefanovska", 40);
marija.mominskoPrezime = "Petkovska";

//keyword this

function windowSize() {
  // ovaa funkcija e metod na window objektot
  let width = this.innerWidth; // innerWidth i innerHeight se propertija na window objektot, ovde this pokazuva kon window objektot
  let height = this.innerHeight;
  return [height, width];
}

console.log(windowSize());

// Pass by value vs Pass by reference

let a = 5;
let b = a;
console.log(a);
console.log(b);
a = 10;
console.log(a);
console.log(b);
b = 22;
console.log(a);
console.log(b);

let dog = {
  breed: "terier",
  color: "brown",
  name: "Dzeki",
};

let dog2 = dog;

console.log(dog);
console.log(dog2);

dog2.color = "white";

console.log(dog);
console.log(dog2);

let c = "Hello";
let d = c;

d = "Hi";

console.log(c);
console.log(d);

// Ciklusi

// I -> While

// while(uslov){
// naredba = > cekor
//}

// cekor1 , cekor2, cekor3, cekor4, cekor5 => zavrsen e uslovot

console.log(1);
console.log(2);
console.log(3);

console.log(10);

let brojac = 1;
while (brojac <= 5) {
  console.log(brojac);
  brojac++; // brojac = brojac+1
}

//prva iteracija => brojac =1 , (1<=5) == true, ispisuva 1, brojac+1=2
//vtora iteracija => brojac =2, (2<=5) == true, ispisuva 2, brojac+1=3
//treta iteracija => brojac =3, (3<=5) == true, ispisuva 3, brojac+1=4
//cetvrta iteracija => brojac =4, (4<=5) == true, ispisuva 4, brojac+1=5
//petta iteracija => brojac =5, (5<=5) == true, ispisuva 5, brojac+1=6
//sesta iteracija => brojac =6, (6<=5) == false, tuka zavrsuva celiot ciklus

let brojac2 = 1;

while (brojac2 < 10) {
  if (brojac2 % 2 == 0) {
    console.log(brojac2);
  }
  brojac2++;
}

// prva iteracija => brojac2 =1, (1<10) ==true znaci vleguva vo while, (1%2 == 0) == false sto znaci ne vleguva vo if, i samo se zgolemuva brojac2 (brojac2+1= 2)
// vtora iteracija => brojac2 =2, (2<10) == true znaci vleguva vo while, (2 %2 == 0) == true sto znaci deka vleguva vo if, ispisuva 2, i se zgolemuva brojac2 (brojac2+1=3)

let broj1 = Number(
  prompt("Vnesi brojac koj sto ke bide pomal broj od vtoriot")
);
let broj2 = Number(prompt("Vnesi brojka za do kade da odi ciklusot"));
let zbir = 0;
let i = broj1; // pass by value
while (i <= broj2) {
  zbir += i; // zbir = zbir + i
  i++;
}

console.log(`Zbirot na broevite megju ${broj1} i ${broj2} e ${zbir}`);
