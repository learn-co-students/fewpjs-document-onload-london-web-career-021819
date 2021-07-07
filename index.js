// Your code goes here
document.addEventListener("DOMContentLoaded", function(){ 
    console.log("The load event");
    document.querySelector('#text').textContent = "This is really cool!";
});

console.log("This console.log() fires when index loads - before DOMContent");