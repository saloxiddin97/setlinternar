let soatlar=()=>{
    let clock=new Date()
    let secund=clock.getSeconds();
    let minute=clock.getMinutes();
    let hour=clock.getHours();

     h1.textContent=`${hour}:${minute}:${secund}`
     if(minute==59){
h1.style.color="red"
     }
}
let h1=document.querySelector('h1');


setInterval(()=>{
    soatlar()
},1000)