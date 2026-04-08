// FOR loop - looping using a set number

for (let i = 0; i < 5; i ++) { // counter, condition, iteration
    console.log(i);
}

// you want to add 5 dollars every month for 16 months to your balance
let balance = 100;
let months = 12;

for (let x = 1; x <= months; x++) {
    balance += 5;
    console.log("Month", x, "Balance", balance);
}

//WHILE loop - looping over and over as long as condition is true
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let savings = 0;
let goal = 100;
let weeklyDeposit = 18;
let weeks = 0;

while (savings < goal) {
    savings += weeklyDeposit;
    weeks++;
    console.log("Week", weeks, "- Total savings:", savings);
}
console.log("Goal reached in", weeks, "weeks!");

//More array methods you will see
// .includes() - returns true or false

let text = "Hello World, welcome to WDD131";
let result = text.includes('World'); //try 'Hi' or 'world' lowercase
// try text.toLowerCase().includes('world');
console.log(result);


const pets = [
    {id: 1,
     type: "cat", 
     isFurry: true
    },
    {id: 2,
     type: "dog",
     isFurry: true
    },
    {id: 3,
     type: "lizard",
     isFurry: false
    }
];

// .find() method returns the value (or object) of the first element that passes a test

let idResult = pets.find(function(item){
    return item.id === 2; //try item.isFurry === true; and you will only get the first one.
});

console.log(idResult);

// remember .filter creates a new array with elements that pass a test

let furryResult = pets.filter(function(item){
    return item.isFurry === true; 
});

console.log(furryResult);