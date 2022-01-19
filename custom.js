let days1 = document.getElementById('days') ;
let hours1 = document.getElementById('hours') ;
let min1 = document.getElementById('minutes') ;
let sec1 = document.getElementById('sec') ;
let months1 = document.getElementById('months') ;
let years1 = document.getElementById('years') ;
let btn = document.getElementById('btn') ;
let input1 = document.querySelector('.input1')
console.log(input1);

btn.addEventListener('click',function ( ) {
    

setInterval(() => {
   
    
let input2 = input1.value ;
// if (input2 === '') {
//     alert('please enter date and time');
// }
console.log(input2);
let date1 = new Date(input2).getTime();
let todayDate = new Date().getTime() ;

let currDate = todayDate - date1  ;

//console.log(currDate);
var seconds = Math.floor(currDate / 1000) ,
   minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    months  = Math.floor(days / 30),
    years   = Math.floor(days / 365);
    // console.log(months);
    // console.log(years);

// let days = Math.floor(currDate / (1000 * 60 * 60 * 24));
// let hours =Math.floor((currDate / (1000*60*60)) % 24);
// let minutes = Math.floor((currDate / (1000*60)) % 60);
// let seconds = Math.floor((currDate / 1000) % 60 );
days1.innerText = days ;
hours1.innerText = hours ;
min1.innerText = minutes ;
sec1.innerText = seconds ;
months1.innerText = months ;
years1.innerText = years ;
// console.log(days);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

}, 1000);
})
// let  years =  Math.floor(currDate * 8760);
// console.log(years);
// console.log(date1);

// var seconds = Math.floor(diff / 1000),
//     minutes = Math.floor(seconds / 60),
//     hours   = Math.floor(minutes / 60),
//     days    = Math.floor(hours / 24),
//     months  = Math.floor(days / 30),
//     years   = Math.floor(days / 365);