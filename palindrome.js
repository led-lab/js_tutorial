function reverse(str) {
    return Array.from(str).reverse().join("");
}

function palindrome(str) {
    let processed_content = str.toLowerCase();
    return processed_content === reverse(processed_content);
}

function emailParts(email) {
    let [local, domain] = email.split("@");
    return [local, domain];
}