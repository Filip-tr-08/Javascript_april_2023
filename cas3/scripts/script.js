var prvProduct = "kaskaval";
var vtorProduct = "meso";
var tretProduct = "leb";

var praznaNiza = []; // prazna niza
var productiPrvNacin = ["kaskaval", "meso", "leb"]; // po upotreubav nacin za kreiranje niza
var productiVtorNacin = new Array("kaskaval", "meso", "leb");

console.log(productiPrvNacin);
console.log(productiVtorNacin);

console.log(productiPrvNacin[0]);
console.log(productiPrvNacin[2]);
console.log(productiPrvNacin[3]); // undefined bidejki ne postoi

productiPrvNacin[1] = "jabolko";

console.log(productiPrvNacin);

console.log(productiPrvNacin.length);

var novaNiza = [
  "orange",
  "ananas",
  "lime",
  "banana",
  "melon",
  "apple",
  "pear",
  "cherry",
  "strawberry",
  "blueberry",
  "bread",
];

var nizaSoRazlicniElementi = ["string", 1, 4.5, false, [1, 2, 3, 4]]; // kaj javascript nizite moze da
// imaat elementi od razlicen podatocen tip
console.log(novaNiza);
console.log(nizaSoRazlicniElementi[4][1]); // za da dojdeme do element od niza sto se naogja vo druga niza
var nizaNaIzbrisaniElementi = [];

// pop -> brisenje na posledniot element od nizata
var izbrisanElement = novaNiza.pop();
console.log(novaNiza);
console.log(izbrisanElement);

// shift -> brisenje na prviot element od nizata

var izbrisanPrvElement = novaNiza.shift();
console.log(novaNiza);
console.log(izbrisanPrvElement);

// push -> dodavanje na element na kraj od nizata

novaNiza.push("kiwi");
console.log(novaNiza);

nizaNaIzbrisaniElementi.push(izbrisanElement);
console.log(nizaNaIzbrisaniElementi);
nizaNaIzbrisaniElementi.push(izbrisanPrvElement);
console.log(nizaNaIzbrisaniElementi);

// unshift -> dodavanje na element na pocetok od nizata

novaNiza.unshift("mango");
console.log(novaNiza);

var kiwi = novaNiza.pop();

nizaNaIzbrisaniElementi.unshift(kiwi);
console.log(nizaNaIzbrisaniElementi);

// toString
console.log("Elementi od nizata novaNiza: " + novaNiza.toString());

//slice -> prikaz na del od nizata, prviot parametar e pocetokot,
// a vtoriot parametar e krajot na delot od nizata (bez toj element)
console.log(novaNiza);
console.log(novaNiza.slice(2, 5)); // ke se prikazat elementite so indeksi 2, 3 i 4

//splice -> so 2 parametri, prviot parametar e od koj element da pocne so brisenje,
// a vtoriot parametar e kolku elementi od nizata da izbrise
console.log(novaNiza);
novaNiza.splice(5, 4);
console.log(novaNiza);

//splice -> so 3 parametri, prviot parametar e od koj element,
//vtor parametar ke bide nula za da ne brise nisto, tret parametar e elementot sto ke se dodade

console.log(novaNiza);
novaNiza.splice(2, 0, "praska");
console.log(novaNiza);

// includes -> proveruva dali elementot postoi vo nizata

console.log(novaNiza.includes("banana"));
console.log(novaNiza.includes("orevi"));

// sort -> gi sortira elementite po brojki ili bukvi zavisno od toa kakvi se elementite na nizata

console.log(novaNiza);
console.log(novaNiza.sort());

// join ->gi pecati elementite od nizata oddeleni so separator koj nie go zadavame

console.log(novaNiza.join("-"));

// concat-> spojuvanje na povekje nizi

var nizaOdBrojki = [1, 2, 3, 4];

var spoenaNiza = novaNiza.concat(
  nizaNaIzbrisaniElementi,
  nizaOdBrojki,
  nizaSoRazlicniElementi
);
console.log(spoenaNiza);

//indexOf -> go naogja indeksot na elementot od nizata

console.log(spoenaNiza.indexOf("bread"));

// funkcii za stringovi

console.log("Filip: 'Ke vi predavam javascript'");
var tekst = "Ke vi predavam javascript";
console.log("Filip:" + tekst);
console.log(`Filip: ${tekst}! I ja iskreira slednava niza ${spoenaNiza}`);

var example = " Hello semos world world ";

//substring -> isto kako slice samo za stringovi
console.log(example.substring(2, 6)); // ke gi prikaze karakterite so indeksi 2, 3, 4 i 5

//substr -> 2 parametri, prviot za od kade da pocne, vtoriot e za kolku karakteri da zeme

console.log(example.substr(2, 6));

// replace -> promena na karakter od stringot (go promenuva prviot sto ke go najde)
console.log(example);
example = example.replace("world", "World");
console.log(example);
// example = example.replace(" ", "-");
// console.log(example);
// example = example.replace(" ", "-");
// console.log(example);

// trim -> gi brise praznite mesta na pocetokot i na krajot od stringot

example = example.trim();
console.log(example);

// split -> go deli stringot po daden spltter i kreira niza od stringovi

var nizaOdStringovi = example.split(" ");
console.log(nizaOdStringovi);

// ispisuvanje na karakter od niza spored indeksot (isto kako kaj nizite)
console.log(example[1]);

console.log(typeof nizaOdStringovi);
