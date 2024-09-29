var boolType = true;
var boolType1= false;

console.log(boolType1);

// ex---------------------------
var isActive = true;

if (isActive) {
    console.log("The account is active.");  
} 
else {
    console.log("The account is inactive.");
}

// ex----------------------------

var age = 18;
var isAdult = age >= 18;  // This will be true because age is 18
console.log(isAdult);     // Output: true


// ex----------------------------

var isActive = true;
var isAdmin = false;

// AND operator
if (isActive && isAdmin) {
    console.log("User is active and an admin.");
} 
else {
    console.log("User is not an admin or not active.");
}

// OR operator
if (isActive || isAdmin) {
    console.log("User is either active or an admin.");
}

// NOT operator
if (!isAdmin) {
    console.log("User is not an admin.");
}


