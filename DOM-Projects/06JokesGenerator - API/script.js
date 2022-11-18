async function jokeGenerator(url){
    let res = await  fetch(url,{
        headers:{
            Accept:"application/json"
        }
    });
    if(res.ok){
        return await res.json();
    }
    throw new Error();
}
let button = document.getElementById("jokeBtn");
let showJoke = document.getElementById("joke");
button.addEventListener("click",()=>{
    jokeGenerator('https://icanhazdadjoke.com').then((e)=>showJoke.textContent = e.joke
    ).catch(()=>showJoke.textContent="Sorry something went wrong! no joke for you");
}
);

