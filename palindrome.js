function reverse(str) {
    return Array.from(str).reverse().join("");
}

// function palindrome(str) {
//     let processed_content = str.toLowerCase();
//     return processed_content === reverse(processed_content);
// }

function emailParts(email) {
    let [local, domain] = email.split("@");
    return [local, domain];
}

class Phrase {
    constructor(content) {
        this.content = content;
    }

    processor(string) {
        return string.toLowerCase();
    }

    processed_content() {
        return this.processor(this.content);
    }

    palindrome() {
        let processed_content = this.processed_content();
        return processed_content === reverse(processed_content);
    }

    louder() {
        return this.content.toUpperCase();
    }
}

class TranslatedPhrase extends Phrase {
    constructor(content, translation) {
        super(content);
        this.translation = translation;
    }

    processed_content() {
        return this.processor(this.translation);
    }
}

let phrase = new Phrase("Racecar");
console.log(phrase.content);
console.log(phrase.palindrome());
console.log(phrase.louder());

let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());