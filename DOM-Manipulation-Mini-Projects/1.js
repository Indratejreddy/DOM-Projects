//[devto] ->(https://dev.to/)

let elem = document.querySelectorAll(".c-link--branded");
elem[1].innerHTML = "Indratej Reddy"; //changing to my name.
elem[1].nextSibling.textContent = ""; // remove the string which is in textnode
let p = document.querySelectorAll(".color-base-70");
p[1].innerHTML =
  `Passionate developer who want to bring impact in this
   world by sloving real world problems by developing amazing apps.`;
