let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// function urlify(string) {
//     return string.toLowerCase().split(/\s+/).join("-");
// }
// function imperative_urls(elements) {
//     let urls = [];
//     for (let element of elements) {
//         urls.push(urlify(element));
//     };
//     return urls;
// }
// console.log(imperative_urls(states));

// function functional_urls(elements) {
//     return elements.map(element => urlify(element));
// }
// console.log(functional_urls(states));

// function full_urls(elements) {
//     return elements.map(
//         element => `https//example.com/<${urlify(element)}>`
//     );
// }
// console.log(full_urls(states));

// function imperative_singles(elements) {
//     let singles = [];
//     for (let element of elements) {
//         if (element.split(/\s+/).length === 1) {
//             singles.push(element);
//         }
//     }
//     return singles;
// }
// console.log(imperative_singles(states));

// function functional_singles(elements) {
//     return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functional_singles(states));

// function find_dakota(elements) {
//     let dakotas = [];
//     for (let element of elements) {
//         if (element.includes("Dakota")) {
//             dakotas.push(element);
//         }
//     }
//     return dakotas;
// }
// console.log(find_dakota(states));

// function find_dakota_regex(elements) {
//     return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(find_dakota_regex(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function imperative_sum(elements) {
//     let total = 0;
//     for (let element of elements) {
//         total += element;
//     }
//     return total;
// }
// console.log(imperative_sum(numbers));

// function functional_sum(elements) {
//     return elements.reduce((total, element) => total += element);
// }
// console.log(functional_sum(numbers));

// function imperative_length(elements) {
//     let lengths = {};
//     for (let element of elements) {
//         lengths[element] = element.length;
//     }
//     return lengths;
// }
// console.log(imperative_length(states));

// function functional_length(elements) {
//     return elements.reduce((lengths, element) => {
//         lengths[element] = element.length;
//         return lengths;
//     }, {});
// }
// console.log(functional_length(states));

// function functional_multitimes(elements) {
//     return elements.reduce((product, element) => {
//         return product *= element;
//     }, 1);
// }
// console.log(functional_multitimes(numbers));

function functional_length_shorten(elements) {
    return elements.reduce((lengths, element) => 
        lengths[element] = element.length);
}
console.log(functional_length_shorten(states));

function functional_multitimes_shorten(elements) {
    return elements.reduce((product, element) => product *= element, 1);
}
console.log(functional_multitimes_shorten(numbers));
