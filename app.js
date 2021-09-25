const thermometer=document.getElementById("thermometer");
let arr=["&#xf2cb;","&#xf2ca;","&#xf2c9;","&#xf2c8;","&#xf2c7;"];
let count=0;
thermometer.innerHTML=arr[0];
thermometer.style.color="yellow";
setInterval(()=>{
    count++;
    if(count==5){
        count=0;
        thermometer.style.color="yellow";
    }
    if(count==4)
        thermometer.style.color="red";
    thermometer.innerHTML=arr[count];
},1000);