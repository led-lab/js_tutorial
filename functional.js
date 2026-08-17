let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}
function imperative_urls(elements) {
    let urls = [];
    for (let element of elements) {
        urls.push(urlify(element));
    };
    return urls;
}
console.log(imperative_urls(states));

function functional_urls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functional_urls(states));

function full_urls(elements) {
    return elements.map(
        element => `https//example.com/<${urlify(element)}>`
    );
}
console.log(full_urls(states));

function imperative_singles(elements) {
    let singles = [];
    for (let element of elements) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    }
    return singles;
}
console.log(imperative_singles(states));