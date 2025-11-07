// let age = 10;
// if(age >= 12){
//     console.log ( 'adult');

// }
// else{
//     console.log ('minor');

// }
let marks = prompt("Please enter your marks");
if (marks < 0 || marks > 100){
    alert("Invalid Marks")
}

else if(marks >= 90){
    console.log("Congratulations! You got A+ grade")
}
else if(marks >= 80){
    console.log("Hurray! You got A garde")
}
else if(marks >= 70){
    console.log('You got B garde')
}
else if(marks >= 50){
    console.log('You got C garde')
}
else console.log('fail');
