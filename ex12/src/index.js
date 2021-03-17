function switchCaseSeqvential(num) {

    // Only change code below this line

    switch(num) {

        case 1:
        case 2:
        case 3:
            answer = "Low"; 
            break;

        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;

        case 7:
        case 8:
        case 9:
            default: answer = "High";               
    }


    // Only change code above this line
    
    return answer;
}
console.log(switchCaseSeqvential(1));
console.log(switchCaseSeqvential(2));
console.log(switchCaseSeqvential(3));
console.log(switchCaseSeqvential(4));
console.log(switchCaseSeqvential(5));
console.log(switchCaseSeqvential(6));
console.log(switchCaseSeqvential(7));
console.log(switchCaseSeqvential(8));
console.log(switchCaseSeqvential(9));

module.exsports = switchCaseSeqvential;