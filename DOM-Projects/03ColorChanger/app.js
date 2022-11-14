function backgroundColorGenerator(){
const k = "0123456789ABCDEF";
let color = "#";
let i = 0;
while(i < 6){
    color += k[Math.floor(Math.random()*16)];
    i++;
}
return color;
}
const button = document.getElementById("button");
button.addEventListener("click",()=>{
document.getElementById("canvas").style.background = backgroundColorGenerator();
});