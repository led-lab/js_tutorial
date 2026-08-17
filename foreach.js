let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
    console.log(element);
});

let soliloquy = "To be, or not to be: that is the question.";
Array.from(soliloquy).forEach(function(char) {
    console.log(char);
});

let arr = [42, 17, 8, 99];
console.log(arr.sort(function(a, b) {return a - b;}));

 function compare(a, b) {
    const result = a - b;
    console.log(`${a}, ${b}, ${result}`);
    return result;
 }
 arr.sort(compare);