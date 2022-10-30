//[Youtube Support] ->(https://support.google.com/youtube/)

let nav = document.querySelector(".accordion-homepage");
let sec = document.createElement("section");
sec.classList.add("parent");
let h3 = document.createElement("h3");
h3.textContent = "My New FAQ";
sec.appendChild(h3);
nav.appendChild(sec);
