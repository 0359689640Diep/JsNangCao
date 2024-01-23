const runOnce = function () {
    console.log("This will never run again");
}

runOnce();

// IIFE
(function() {
    console.log("This will never run again");
    const idPrivate = 23;
})();

(() => console.log("This will never run again"))();

{
    const isPrivate = 23;
    
}