var getusername = prompt("hello, who are you ?"); 

console.log(getusername); 

document.getElementById("username").innerText = getusername;

//tooltip example
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })