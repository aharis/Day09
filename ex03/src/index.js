// Only change code below this line

function myEqualFunction(num) {

    if(num === 23) {
        
        return '"Equal"';
    }else {

        return '"Not equal"';
    }
} 
 // Only change code above this line

console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));

// Only change cose above this line

module.exports = myEqualFunction;