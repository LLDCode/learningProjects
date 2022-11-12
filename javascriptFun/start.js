// Example of rent equation using unchangable constants
const monthRent = 500;
const yearRent = monthRent * 12;
console.log("your rent is" , yearRent);

// Example of how to add my name together without having to break quotes
let myFName = "Levi";
let myMName = "Lorenzo";
let myLName= "Diaz";
console.log(`Hello ${myFName} ${myMName} ${myLName} how are you?`);

// Example of adding a name/sentence together using double quotes
console.log("Hello", myFName, myLName, "I hope you have a good day!")

// You can log something simple such as this
console.log(myLName);

// Example of a boolean
const isTheSkyBlue = true;
console.log(isTheSkyBlue);

//Simple mathematics
let ejemplo = .5;
let ejemplo2 = .5;
console.log(ejemplo + ejemplo2);

// If Else statement with math
if (ejemplo + ejemplo2 === 1) {
    console.log("okay, cool!");
}
else {console.log("Is it nighttime?");
}

// Using an elseif statement
const friendsAtParty = 0;
if (friendsAtParty === 0) {
    console.log("All the nachos are for me now");
} else if (friendsAtParty <= 4) {
    console.log("Perfect amount for Mario Kart!");
} else {
    console.log("Whooo! play some music and get the party started!");
}

// Example of adding numbers to a variable
let friendsInParty = 0;
friendsInParty = friendsInParty + 1;
console.log(friendsInParty);

// Making a loop
while (friendsInParty < 10) {
    friendsInParty= friendsInParty + 1;
    console.log(friendsInParty);
}

/* Example
of 
large 
comments
*/

// Different way of adding
while (friendsInParty < 20) {
    friendsInParty++;
    console.log(friendsInParty, "helo");
}

// A way to make a loop without while
for (let i = 0; i < 10; i++) {
    friendsInParty++;
}
console.log(friendsInParty);

// way to repeat f 5 times
const f = "f";
const timesToRepeat = 5;
let string = "";
let i = 0;

while (i < timesToRepeat) {
  i++;
  string = string + f;
}

console.log(string);

//way to repeat f 5 times
const fi = "f";
let cinco = 5;
let inicio = 0;
let blanco = "";
while (inicio < cinco){ inicio++;
  console.log("El numero es", inicio);
  blanco = blanco + fi;
  }

  console.log(blanco);

//Way to repeat f 5 times using for loop
const fs = "f";
let five = 5;
let start = 0;
let blank = "";

for (let i = 0; i < five; i++) {
    console.log("inside for loop");
 blank = blank + fs;
}
console.log(i)

//Example of a function (something you can call in later in the code)
function addTwo(number) {
    return number + 2;
}

let buenNumero = addTwo(32);
console.log(buenNumero);

//calling a more complicated function
function greet(firstName, lastName, honorTitle) {
    return console.log(`Hello ${honorTitle} ${lastName} I hope you enjoy your visit today, is it okay if I call you ${firstName}?`);
}
greet("Levi", "Diaz", "Mr");

//other way to call more complicated function
function greet2(firstName2, lastName2, honorTitle2) {
    return `Hello ${honorTitle2} ${lastName2} I hope you enjoy your visit today, is it okay if I call you ${firstName2}?`;
}
console.log(greet2("Levi", "Diaz", "Mr."));

//pre-set ways to make code
let videoGame = "Doom 2016";
let movie = "topgun the new one";
function whatILike(videoGame, movie) {
   return console.log(`Hello, my favorite video game is ${videoGame} and my favorite movie is ${movie}`);
}
whatILike(videoGame, movie);

//This should come out as a reference error, this should not work, this is an example of how scope works
/* function foodFun(food) {
    let pizza = "pizza";
}
console.log(pizza); */

//example of objects
const nombre = {
    firstName: "Levi", 
    jacket: "orange",
};
console.log(nombre);
console.log(nombre.firstName);
console.log(nombre["firstName"]);


//Example of objects being used in a function for an if/ elseif statement
const persona1 = {
    comidaPreferida: "Mexicana",
    altura: 5.8, 
    novia: "si",
};

const persona2 = {
    comidaPreferida: "China",
    altura: 5.5,
    novia: "si",
};

function foodFavorita(person) {
 if (person.comidaPreferida === "Mexicana") {
    console.log("Creemos que te gustaria un burrito :)");
 } else if (person.comidaPreferida === "China") { 
    console.log("creemos que te gustaria arroz con tofu :)");
 } else {console.log("idk hombre");}
};

foodFavorita(persona1);
foodFavorita(persona2);

//Can have functions inside of objects
const dog = {
    name: "Dexter",
    speak() {
        console.log("Woof! Woof!");
    }
};
dog.speak();

//se puede tener objectos adentro de objectos
const me = {
    Levi: {
        favComida: "Mexicana",
        favChica: "Dominicana",
        novia: "Dominicana",
    },
    Lorenzo: {
        favComida: "Tambien Mexicana",
        FavChica: "Dominicana",
        novia: "Dominicana",
    }
}
console.log(me);

// Shows where you are scrolled on the page
console.log(window.scrollY);

// the word "this" is actually something very complicated and should be looked into further, I paid attention to the class and I didn't understand it, do more research later

// Objects don't have an order, if you want an order use arrays


//example of an array going on, using the length to show the length out starting from 1 and join with a space to join together the array with spaces between the numbers
const unoADos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(unoADos.length);
console.log(unoADos.join(" "));
console.log(unoADos);

// Adding in the array using push and also doing pop to take out the last piece
let comidaGood = [
    {tipo: "Mexicano", comida: "Burrito" },
    {tipo: "China", comida: "Chaka Chaka"},
    {tipo: "China", comida: "Spicy beancurd"},
];
//console.log(comidaGood.pop());
popMethod = comidaGood.pop();
console.log(popMethod); //Example of pop
comidaGood.push({tipo: "Mexicano", comida: "Taco"});
console.log(comidaGood); //Example of push


// Example of forEach instead of using a loop as well as a normal for loop
const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
  ];
// normal for loop to get the cities listed
for (let i = 0; i < cities.length; i++ ) {
    console.log(cities[i]);
}

console.log("--------");
//forEach which achiees the same thing as the for loop above but with less code
  cities.forEach(function(city) {
    console.log(city);
  });



  /* const someFunction = function() {return 5};
const someOtherFunction = function(fn) {return fn() };
someOtherFunction(someFunction); 
I do not know what this is and how it works ^ */


//This crap right here is confusing and honestly I don't know how to fully explain it, but basically we want to sort these numbers, however, becuase of how the .sort function (it sorts by alphabetical so it only looks at the first number then displays it by that, not looking at the whole number). Basically we have to make a function that checks two numbers and checks which one is larger, if the first number is larger then it displays 1 to make it go last, if it is smaller then we output a negative number to make it go first, and if they are equal it equals 0 to show it doesn't matter 
const primeNumbers = [20, 1, 12, 10, 2, 7, 7, 3, 4 , 7, 8, 9];
console.log(primeNumbers.sort(function(num1, num2)
{ if (num1 > num2) {
    return 1;
} else if ( num1 < num2) {
    return -1;
}
return 0;

}));


// Example of order of operations and signs and how they work
let x = 5;
let y = 5;
let z = 22;

const isTrue = true;
// not equal to sign
if ( x !== y ) {
    console.log("x does not equal y");
}
// and logic sign
if (x === y && z === 22) {
    console.log("Both of these statements are true");
}
// or logic sign
if (x === z || z === 22) {
    console.log("At least one of these statements is true");
}
// using parenthesis for order of operations
if ((x === z || z === 22) && x === y) {
    console.log("This is an example of using parenthesis for setting order of operations");
}