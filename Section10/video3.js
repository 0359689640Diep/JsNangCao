const oneWord = function(str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};
// higher-order function
const trasformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// trasformer("JavaScript is the best!", upperFirstWord)
// trasformer("JavaScript is the best!", oneWord);

// js uses callbacks all the time
const high5 = function() {
    console.log("Hello");
}

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);