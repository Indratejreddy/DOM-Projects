function pascalCase(input){
    const arr = input.split(" ");
    let str="";
    arr.forEach(element => {
        str+=element[0].toUpperCase()+element.slice(1);
    });
    return str;
  }

  function camelCase(input){
    const arr = input.split(" ");
    let str=arr[0];
    for(let i=1;i<=arr.length-1;i++){
        str+=arr[i][0].toUpperCase()+arr[i].slice(1);
    }
   return str;
  }

function snakeCase(input){
    const arr = input.split(" ");
    let str="";
    for(let i=0;i<=arr.length-1;i++){
        str+=arr[i][0].toLowerCase()+arr[i].slice(1)+"_";
    }
   return str.slice(0,str.length-1);
  }

function screamingSnakeCase(input){
    const arr = input.split(" ");
    let str="";
    for(let i=0;i<=arr.length-1;i++){
        str+=arr[i].toUpperCase()+"_";
    }
   return str.slice(0,str.length-1);
  }

function kebabCase(input){
        const arr = input.split(" ");
        let str="";
        for(let i=0;i<=arr.length-1;i++){
            str+=arr[i][0].toLowerCase()+arr[i].slice(1)+"-";
        }
       return str.slice(0,str.length-1);
      }

function screamingKebabCase(input){
    const arr = input.split(" ");
    let str="";
    for(let i=0;i<=arr.length-1;i++){
        str+=arr[i].toUpperCase()+"-";
    }
    return str.slice(0,str.length-1);
    }

let button = document.getElementById('convert-btn');
button.addEventListener("click",()=>{
    let text = document.getElementById("text").value;
    console.log(text);
    document.getElementById("camel-case").textContent = pascalCase(text);
    document.getElementById('pascal-case').textContent = camelCase(text);
    document.getElementById('snake-case').textContent = snakeCase(text);
    document.getElementById('screaming-snake-case').textContent = screamingSnakeCase(text);
    document.getElementById('kebab-case').textContent = kebabCase(text);
    document.getElementById('screaming-kebab-case').textContent = screamingKebabCase(text);

});