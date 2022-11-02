//[Google] -> (https://www.google.com/)

//removing alternative languages from the collection 

// 1st method:
let lang = document.querySelector("#SIvCob").children;
for (let i = lang.length - 1; i >= 0; i--) {
  if (i % 2 == 0) {
    lang[i].remove();
  }
}

// or 

// 2nd method:
// let lang = document.querySelector("#SIvCob").children;
// Array.from(lang).forEach(
//   (element, index, arr) => index % 2 === 0 && element.remove()
// );


