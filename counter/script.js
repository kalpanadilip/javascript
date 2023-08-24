const counter= document.querySelector(".number");
const increament = document.querySelector(".increament");
const decreament = document.querySelector(".decreament");

let count=0
increament.addEventListener("click", ()=>{
  count=count+1;counter.innerHTML=count;
});


decreament.addEventListener("click",()=>{
count=count-1;counter.innerHTML=count;
});

