const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value; 
    const upper = uppercaseEl.checked;
    const lower = lowercaseEl.checked;
    const number = numbersEl.checked;
    const symbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(length,upper,lower,number,symbol);
})

function generatePassword(length,upper,lower,number,symbol) {
    let generatedPassword = "";
    const selected = [{upper},{lower},{number},{symbol}].filter(
        (elem) => Object.values(elem)[0]
    );
    selectedLength = selected.length;
    if(selectedLength === 0){
        return "";
    }
    for(let i = 0; i<length; i+=selectedLength){
        selected.forEach((elem)=>{
           generatedPassword += randomFunc[Object.keys(elem)[0]]();
        })
    }
    return generatedPassword.slice(0,length);
    
    
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26+65));
}

function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random()*26+97));
}

function getRandomNumber(){
    return Math.floor(Math.random()*10);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//copy to clip board
clipboardEl.addEventListener("click",()=>{
    let password = resultEl.innerText;
    let textarea = document.createElement("textarea");
    if(password){
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("copied success");
    }
    return;
})