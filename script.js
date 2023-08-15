var number = document.getElementsByClassName("number")[0];
let counter = 0;
setInterval(()=>{
    if (counter == 80) {
        clearInterval();
    }else{
    //    counter+= 1;
       counter = counter + 1;
       number.innerHTML = counter + "%"; 
    }
},23);

var number_2 = document.getElementsByClassName("number_2")[0];
let counter_2 = 0;
setInterval(()=>{
    if (counter_2 == 50) {
        clearInterval();
    }else{
       counter_2+= 1;
       number_2.innerHTML = counter_2 + "%"; 
    }
},38);

var number_3 = document.getElementsByClassName("number_3")[0];
let counter_3 = 0;
setInterval(()=>{
    if (counter_3 == 95) {
        clearInterval();
    }else{
       counter_3+= 1;
       number_3.innerHTML = counter_3 + "%"; 
    }
},20);