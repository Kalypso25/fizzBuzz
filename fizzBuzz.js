for (let i = 1; i <= 20; i++) { // loop control expression for 1-20
    if (i % 3 === 0 && i % 5 === 0) { //condition checks if multiples of 3 and 5
        console.log(i + "FizzBuzz"); //output
    } else if (i % 3 === 0) { // condition checks if value is multiple of 3
        console.log(i + "Fizz");
    } else if (i % 5 === 0) { // condition checks if value is multiple of 5 
        console.log(i + "Buzz");
    } else { // No match print just the number
        console.log(i);
    }
}