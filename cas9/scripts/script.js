// AJAX (Asynchronous Javascript And XML)
// XML(eXtensible Markup Language) format so koj komuniciraat front-endot i back-endot od aplikacijata
// JSON(Javascript Object Notation)

//XML FILE - poseben fajl se pravi so ekstenzija .xml

{
  /* 
  <note>
    <to>Filip</to>
    <from>Nikola</from>
    <heading>Domasna</heading>
    Domasna za Javascript
</note> 
*/
}

// example for object literal notation

// let human = {
//   ime: "Ime",
//   prezime: "Prezime",
//   email: "Email",
// };

//Example for JSON FILE - poseben fajl se pravi so ekstenzija .json

// {
//     "ime": "Ime",
//     "prezime": "Prezime",
//     "nekakvaNiza":["Eden", "Dva", "Tri"]
// }

// API - Application Programming Interface

// Tri nacini za AJAX povici

// I NACIN : Promise

// let promise = new Promise((resolve, reject)=>{
//     if(uslov){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })

// PRIMER 1

// let hasPizza = false;

// let promiseToBringPizza = new Promise((resolve, reject) => {
//   if (hasPizza) {
//     // ova e isto so if(hasPizza === true)
//     resolve("I'm bringing pizza");
//   } else {
//     reject("I am not bringing the pizza");
//   }
// });

// promiseToBringPizza.then((rezultat) => console.log(rezultat));
// promiseToBringPizza.catch((err) => console.log(err));

console.log("Hello"); // sinhron kod, koj sto ke se izvrsi vo istiot moment koga
//ke ja pustime aplikacijata i ke se
// izvrsi pred bilo koj asinhron kod
//bez razlika na koja linija se naogja (pred ili posle asinhroniot kod)

// PRIMER 2

// function pecati() {
//   console.log("uspesno izvrseno vetuvanje");
// }

// let p = new Promise((resolve, reject) => {
//   let a = 11;
//   if (a == 10) {
//     resolve();
//   } else {
//     reject("Failed!");
//   }
// });

// p.then(pecati).catch((a) => {
//   console.log(a);
// });

// PRIMER 3

// let p1 = new Promise((resolve, reject) => {
//   resolve("p1");
// });

// let p2 = new Promise((resolve, reject) => {
//   resolve("p2");
// });

// let p3 = new Promise((resolve, reject) => {
//   resolve("p3");
// });

// Promise.all([p1, p2, p3]).then((message) => console.log(message));

// PRIMER 4

function get(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();

    req.addEventListener("load", () => {
      if (req.status < 400) {
        resolve(req.responseText);
      } else {
        reject("Failed!");
      }
    });
    req.addEventListener("error", () => {
      reject(new Error("network error"));
    });
  });
}

get("https://randomuser.me/api/?results=10")
  .then((data) => {
    console.log("we got the data!");
    console.log(JSON.parse(data));
  })
  .catch((error) => {
    console.log(error.message);
  });

// II NACIN : fetch
// PRIMER 5

fetch("https://randomuser.e/api/?results=10")
  .then((response) => response.json())
  .then((json) => {
    let users = json.results;
    console.log(users);
    for (user of users) {
      console.log(user.name.first);
    }
  })
  .catch((error) => console.log(error.message))
  .finally(() =>
    console.log("Ova ke se izvrsi bez razlika dali povikot e dobar ili ne")
  );

// III Nacin => async/await

//PRIMER 6

async function getDataFromFetch(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Ova ke se izvrsi bez razlika dali povikot e dobar ili ne");
  }
}
getDataFromFetch("https://randomuser.e/api/?results=10");
