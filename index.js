document.addEventListener("DOMContentLoaded", function(){
  console.log("The DOM has loaded")
  text = document.querySelector("p#text")
  text.textContent = "This is really cool!"
})
