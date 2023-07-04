// CLASSES

// Constructor funkcija za kreiranje na objekti

// function Human(age, name) {
//   this.age = age;
//   this.name = name;
// }

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`The human ${this.name} is sleeping`);
  }
}

let petko = new Human("Petko", 55);

console.log(petko.name);
petko.sleep();

class Employee extends Human {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  work() {
    console.log(`The human ${this.name} is working`);
  }
}

let stanko = new Employee("Stanko", 45, 800);

stanko.sleep();
stanko.work();

// petko.work(); ova dava greska

class Senior extends Employee {
  constructor(name, age, salary, workExperience) {
    super(name, age, salary);
    this.workExperience = workExperience;
  }

  teaching() {
    console.log("This employee is a mentor for other employees");
  }
}

let jasna = new Senior("Jasna", 40, 1000, 16);

jasna.teaching();

class Programmer extends Employee {
  constructor(name, age, salary, tasks) {
    super(name, age, salary);
    this.tasks = tasks;
  }

  workingOnAProject() {
    console.log("The programmer is working on a project");
  }
}

// Prevrtuvanje na niza bez koristenje na metodi i bez koristenje na druga niza

let niza = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < parseInt(niza.length / 2); i++) {
  let pom = niza[i];
  console.log(`Pomosna: ${pom}`);
  let posledenElement = niza[niza.length - i - 1];
  console.log(`Posleden element : ${posledenElement}`);
  niza[i] = posledenElement; // vrednost 7 vo prva iteracija
  console.log(`Prv element po promena: ${niza[i]}`);
  niza[niza.length - i - 1] = pom;
  console.log(`Posleden element po promena: ${niza[niza.length - i - 1]}`);
  console.log(niza);
}
