//[Freecodecamp] ->(https://www.freecodecamp.org/)

//method 1 :
let k = document.querySelectorAll(".login-btn-text");
k[1].addEventListener('mouseover', (e) => k[1].style.backgroundColor = "red");

//or;

// method 2:
// let k = document.querySelectorAll(".login-btn-text");
// k[1].addEventListener(
//   "mouseover",
//   (e) => (e.target.style.backgroundColor = "blue")
// );
