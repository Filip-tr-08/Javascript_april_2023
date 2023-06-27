// // Prodolzenie za Higher order functions

// //forEach
// let niza = [5, 4, 1, 10, 3, 2];

// // for (let i = 0; i < niza.length; i++) {
// //   console.log(niza[i]);
// // }
// // niza.forEach((x) => console.log(x)); // najmnogu se koristi za da se izmine ili ispise edna niza

// // niza.forEach((x, i) => {
// //   console.log(x);
// //   console.log(i);
// // }); // tuka prviot parametar e vrednosta na eden element, dodeka vtoriot parametar e indeksot na eden element

// //map

// let niza2 = niza.map((x) => x * 2); // map se koristi za ako sakame da dobieme nova niza koja ke ima promeneti vrednosti od prvata niza
// console.log("Niza1");
// niza.forEach((x) => console.log(x));
// console.log("Niza2");
// niza2.forEach((x) => console.log(x));
// console.log("Niza3");
// let niza3 = niza.map((x, i) => x * 2 + i);
// niza3.forEach((x) => console.log(x));

// //filter

// let kandidati = [
//   { name: "Stojan", prezime: "Stojanovski", height: 165 },
//   { name: "David", prezime: "Davidovski", height: 175 },
//   { name: "Elena", prezime: "Elenovska", height: 180 },
// ];

// let kandidatiPovisokiOd170 = kandidati.filter((x) => x.height > 170);

// kandidatiPovisokiOd170.forEach((x) => console.log(x));

// // sort

// // niza.sort(); // ke go gleda prvoto brojce iako ima dvocifreni brojki i spored prvoto ke gi sortira od pomalo kon pogolemo
// // console.log(niza);
// // niza.sort((x1, x2) => x1 - x2); // Ascending
// // console.log(niza);
// // niza.sort((x1, x2) => x2 - x1); // Descending
// // console.log(niza);

// // reduce
// console.log(niza);
// let reducedNiza = niza.reduce((acc, curr) => {
//   // acc == acumulator, toa e sumata, a curr == current toa e momentalna vrednost vo dadena iteracija
//   console.log(acc);
//   return acc + curr;
// }, 0);

// console.log(reducedNiza);

// let proizvod = niza.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);

// console.log(proizvod);

// Manipulacija so DOM (Document Object Model)

// window.onload = function () { // tret nacin za postavuvanje na javascript so window.onload() i celiot kod vo ovaa funkcija se pisuva
//   let idElement = document.getElementById("title");
//   console.log(idElement);
// };

let idElement = document.getElementById("title");
console.log(idElement);
console.dir(idElement);

let blockElements = document.getElementsByClassName("block");
let firstElement = blockElements[0];
console.log(blockElements);
console.log(firstElement);

let links = document.getElementsByTagName("a");
// console.log(document.getElementsByTagNameNS("a")); da proveram
console.log(links);
let link = links[0];
console.log(link);

let title = document.querySelector("#title");
let blockElement = document.querySelector(".block");
let blockElements2 = document.querySelectorAll(".block");
let links2 = document.querySelectorAll("a");
console.log(title);
console.log(blockElement);
console.log(blockElements2);
console.log(links2);

let tekstOdNaslov = idElement.innerText; // so innerText go zema stringot bez prazni mesta, so textContent ke go zeme stringot so prazni mesta
console.log(tekstOdNaslov);

// idElement.innerText = "Zdravo"; // so innerText se menuva tekstot na nekoj element od dokumentot
console.log(link.attributes[0].value);
// link.attributes[0].value = "https://www.google.com";  prv nacin za menuvanje vrednost na atribut, a i za dodavanje na atribut

// vtor nacin za dodavanje na atribut ili menuvanje na atribut
link.setAttribute("href", "https://www.google.com"); // prv argument na setAtribute e key na atributot, a vtoriot e value na atributot
link.removeAttribute("href");

function lightOn() {
  document
    .getElementById("light")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
}

document.getElementById("light_on").addEventListener("click", lightOn);
document.getElementById("light_off").addEventListener("click", () => {
  document
    .getElementById("light")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
});

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("result").innerHTML = `<p>${new Date()}</p>`;
});
