//js for printing current time with the following outpt:
//Today is : Tuesday.
//Current Time : 10 PM  : 30 : 38

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if ((hour===0 && prepand===' PM ') && (minute===0 && second===0)) { 
    hour=12;
    prepand=' Noon';

//   if (minute===0 && second===0){ 
//   hour=12;
//   prepand=' Noon';
// } 
//   else { 
//   hour=12;
//   prepand=' PM';
// } 
} else{
    hour=12;
    prepand=' PM';
}

  if ((hour===0 && prepand===' AM ') && (minute===0 && second===0)) { 
    hour=12;
    prepand=' Midnight';
//   if (minute===0 && second===0) { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
  } 
  else{ 
  hour=12;
  prepand=' AM';
  }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

document.querySelector('.btn').addEventListener('click',function(){
    window.print();
})

// Write a JavaScript program where the program takes a random integer
// between 1 to 10, the user is then prompted to input a guess number. 
//If the user input matches with guess number, the program will display a 
//message "Good Work" otherwise display a message "Not matched".

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt('enter a number between 1 - 10');
if(userInput == randomNumber){
    console.log('Good Work');
}else{
    console.log('Not matched');
    console.log('the chosen number is '+randomNumber);
}