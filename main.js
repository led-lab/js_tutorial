let Phrase = require("mhartl-palindrome");

let input = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(input);


if (phrase.palindrome()) {
    alert(`"${phrase.content} is a palindrome."`);
} else {
    alert(`"${phrase.content} is not a palindrome."`);
}