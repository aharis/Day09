// Only change code below this line

function comparisonToEqual(a) {

    if(a < 5) {

    return '“Les than 5“';}

     if(a < 12) {

  return '“Less then 10“';}

     if(a >= 10) {

        return '"10 or over"';}
    

    if(a > 16) {

        return '“More then 20“';

    }
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

// Only change code above this line

    module.exports = comparisonToEqual;