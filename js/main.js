var firstName = "Dzidedi"; //firstname is a word
var lastName = "Senaya";
var age = 105; //age is a number
const freezingWaterTemperature = 0;
let youAreHappy = true;
let phone = { colour: 'blue', makeCalls: null }

//let fullName = firstName + ' ' + lastName; open single quotes leave a space in the results
let fullName = `${firstName} ${lastName}`; //string interpolation

console.log(fullName);

let a = 56;
let b = 43;

let result = `${a} + ${b} = ${a + b}`;
console.log(result)

if (age >= 18) {
    console.log("Welcome");
} else {
    console.log("This page is not for you")
};

for (let i = 1; 1 <= 8; i++) {
    console.log("The value of i is", i)
};


function isEligible() {
    if (age >= 18){
        return "welcome";
    } else {
        return "This page is not for you"
    }
    }
    alert(isEligible());

    //console.log(isEligible())
    //document.body.innerHTML = isEligible

    console.log("We're using GIT!");