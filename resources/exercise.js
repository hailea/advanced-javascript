/*
// Function Declarations 
someFunctionDeclarations(); //hoisting
function someFunctionDeclarations(){
    console.log("Some Dec. Function is Running");
}
someFunctionDeclarations();

// Function Expressions 
//someFunctionExpressions(); //hoisting doesn't work for function expressions
const someFunctionExpressions=function(){
    console.log("Some Expr. Function is Running");
};
someFunctionExpressions();

 //arguments, parameters and passing default values
 const greet = function(param1 = "Hi", param2 = "John", param3 = "Happy Birthday!!!"){
     console.log(param1, param2, param3);
 }

 greet("Hello", "Darius");
 
//Returning a value

const someMath = function(x,y){
return x**2 + y**2;
console.log("some text"); //The return statement stops the execution of a function and returns a value from that function.
};

const someCalc = someMath(3,4);
console.log(someCalc); 
//Functions and methods

const someFunction = function(name){
return (`Hello ${name}`)
}

let resultOne = someFunction("Darius");
console.log (resultOne);
//methods
let resultTwo = resultOne.toUpperCase();
console.log(resultTwo);
//ForEach 

const food = ["Buritos", "Kitfo", "Buffalo Wings", "Steak", "chilaquiles"];

food.forEach(element => {
    console.log(`I love ${element}`);
});

//accessing properties
let count= 10;
const user = {
    name: "Thomas",
    email: "them@aol.com",
    courses: ['Bio', 'Chem', 'Math'],
    scores:{ 
        exam: "A",
        homework: "B",
        extra_credit: "C"
    },
    login: function(){
        count++;
        console.log("The keyword this refers to: ");
        console.log(this);
        console.log(`${this.name} are logged in ${count} times.`)
    }
}
console.log(user['name']);
console.log(user.courses[1]);
console.log(user.scores.exam);
console.log(user.login());
console.log("The keyword this refers to: ");
console.log(this);*/
 // primitive vs reference types
//primitives
 let userOne = "Dandi";
 let userTwo = userOne;
 console.log(`UserOne: ${userOne}, UserTwo: ${userTwo}`);
 userOne = "Bambu";
 console.log(`UserOne: ${userOne}, UserTwo: ${userTwo}`);
//References
 let userThree = {name: "Darius", age:40};
 let userFour = userThree;
 console.log(`UserThree: ${userThree.name}, UserFour: ${userFour.name}`);
 userThree.name = "Oscar";
 console.log(`UserThree: ${userThree.name}, UserFour: ${userFour.name}`);
 


