

function switchCase(letter) {

    // Only change code below this line
    
    switch(letter) {

    case "a": animals = '"antilope"';
        break;
 
    case "b": animals = '"bird"';
        break;

    case "c": animals = '"cat"';
    break;
    
    case "d": animals = '"staff"';
        default:  
    case 4: animals ='"staff"';
    
}
    // Only change code above this line
    return animals;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exsports = switchCase;

