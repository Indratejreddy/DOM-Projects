//[Apple] ->(https://support.apple.com/en-in)

let arr = document.querySelectorAll(".as-imagegrid-item-title");
arr = Array.from(arr).map((elem) => elem.firstChild.textContent);
console.log(arr);
