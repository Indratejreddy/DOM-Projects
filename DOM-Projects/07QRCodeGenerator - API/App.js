//appending the CDN script to link QR in our code.
let cdnLinkScriptElement = document.createElement("script");
cdnLinkScriptElement.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
cdnLinkScriptElement.integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==";
cdnLinkScriptElement.crossOrigin="anonymous";
cdnLinkScriptElement.referrerPolicy="no-referrer";
document.querySelector("head").append(cdnLinkScriptElement);

//selecting button element.
const button = document.querySelector("#submit");

function QrGenerator(url){
   const p = document.getElementById("qrcode");
   if(p){ 
    p.remove(); 
    }

    const qrDivElement = document.createElement("div");
    qrDivElement.id = "qrcode";
    document.querySelector('#main').append(qrDivElement);

    if(url.value){
    new QRCode(document.getElementById("qrcode"),{
        text: url.value,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    }else{
        alert("Please enter data to generate QR ");
    }
}

button.addEventListener("click",()=>{
    let url = document.querySelector("#input");
    QrGenerator(url);
})