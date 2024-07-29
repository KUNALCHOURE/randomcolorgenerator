let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let p=document.querySelector("p");
    let randomcolor=getrandomcolor();
    p.innerHTML=`<p>YOUR COLOR IS : ${randomcolor}</p>`;

    let div=document.querySelector(".color");
    div.style.backgroundColor=randomcolor;
    console.log("color updated");

    

})

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
    

}

 