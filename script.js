
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let inp=document.querySelector("input");
    let txt=document.querySelector("ul");
    let list=document.querySelector("li")
// function Add(){
   if(inp.value==""){
    alert("enter your task");
   }
   else{
    let newElement=document.createElement("li");
    newElement.innerHTML=`${inp.value} <i class="fa-regular fa-calendar-xmark"></i>`;
    txt.prepend(newElement);
    inp.value="";
    newElement.querySelector("i").addEventListener("click",()=>{
        newElement.remove();    
    })
   }
})
