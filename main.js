let Phrase = require("mhartl-palindrome");

function palindrome_tester(event) {
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindrome_result = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindrome_result.innerHTML = `"${phrase.content} is a palindrome."`;
    } else {
        palindrome_result.innerHTML = `"${phrase.content} is not a palindrome."`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindrome_tester(event);
    });
});