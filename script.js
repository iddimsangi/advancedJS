//FUNCTIONAL CONSTRUCTOR
//by using a functional constructor we can creates many objects
var Person = function(name,birthYear,education,email,calcAge){
    this.name = name;
    this.birthYear = birthYear;
    this.education = education;
    this.email = email;
//method within a functional constructor
    // this.calcAge = function(){
    //     this.age = 2020 - this.birthYear;
    // }

    }
    console.log(Person);
    //we can also create a method in a constructor's prototype
    Person.prototype.calcAge = function(){
        this.age = 2020 - this.birthYear;
    }
    //add a property to a prototype
    Person.prototype.lastName = 'msangi';

var iddi = new Person('IDDI',1993,'DEGREE','adammsangi@gmail.com');
iddi.calcAge();
var adam = new Person('ADAM',1963,'DEGREE','adi@gmail.com');
adam.calcAge();
var waridi = new Person('WARIDI',2000,'HIGH SCHOOL','waridi@webpage');
console.log(iddi,adam,waridi);
console.log(iddi.lastName);
Date();

// document.querySelector('.btn').addEventListener('click',function(){
//     window.print();
// })

//create object using OBJECT constructor
var myproto = {
    name:'msangi',
    lastName:'iddi',
    calcAge:function(){
        this.yearOfexpiirience = 2020 - this.age;
    }
}
 
var idd = new Object(myproto);
idd.age = 19;
idd.tribe = 'pare',
idd.movies = 'series'
idd.calcAge();
console.log(idd);
console.log(myproto);

//you can also use Object.create
//you can choose to use a prototype
var waridi = Object.create(myproto,{
    age:{ value: 55},
    tribe:{value:'chaga'},
    movies:{value:'power'}
})
waridi.calcAge();
console.log(waridi);
console.log(waridi.lastName);
//ADVANCED FUNCTIONS===========================================================
var years = [1990,1978,1956,1993,1999];
function calcAges(arr,fn){
    var arrResult = [];
    for(var i=0; i<arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}
function calcAge(el){
return 2020 - el;

}
function ifFullAge(el){
    return el >= 30;
}
function heartRateCalc(el){
    if(el >= 18 && el <= 81){
        return 206.5-(.65*el);
    }else{
        return -1;
    }
}
var ages = calcAges(years,calcAge);
console.log(ages);
var rates = calcAges(ages,heartRateCalc);
console.log(rates);
var fullAges = calcAges(ages,ifFullAge);
console.log(fullAges);

//FUNCTION THAT RETURNS FUNCTION
var interview = function(job){
    if(job === 'doctor'){
        return function(name){
            console.log(name +' which kind of doctor are you??');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('which lesson do you teach '+name);
        }
    }else if(job === 'developer'){
        return function(name){
            console.log('what are you developing so far? '+name);
        }
    }else{
        return function(name){
            console.log(name+' tell us your job tittle..');
        }
    }
}

var developerIntervw = interview('developer');
developerIntervw('iddimsangi');

var designerIntervw = interview('designer');
designerIntervw('harouni');

//========================simple call===========================
interview('doctor')('edocumwembe');
interview('teacher')('waridi');
//=============================IIFE(immediately invocked function)=================================

(function(){
var dice = Math.floor(Math.random()*10)+1;
console.log(dice);
})();

(function(namba){
    var yr = 206 - namba;
    console.log('your result namba is '+yr);
})(190);

(function(birthYear){
    var age = 2020 - birthYear;
    console.log('your age is '+age);
})(1993);
//========================================POWER OF CLOSURES====================

/*
var interview = function(job){
    if(job === 'doctor'){
        return function(name){
            console.log(name +' which kind of doctor are you??');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('which lesson do you teach '+name);
        }
    }else if(job === 'developer'){
        return function(name){
            console.log('what are you developing so far? '+name);
        }
    }else{
        return function(name){
            console.log(name+' tell us your job tittle..');
        }
    }
}

var developerIntervw = interview('developer');
developerIntervw('iddimsangi');

var designerIntervw = interview('designer');
designerIntervw('harouni');

//========================simple call===========================
interview('doctor')('edocumwembe');
interview('teacher')('waridi');

*/

function interviewByClosure(yourJob){
var teacherQsn = 'what lesson do you teach?';
var developerQsn = 'which system are you developing?';
var designerQsn = 'what are you daily designing at home?';
// if(yourJob === 'designer'){
//     return function(name){
//         console.log(name+' '+designerQsn);
//     }
// }else if(yourJob === 'teacher'){
//     return function(name){
//         console.log(teacherQsn+', '+name);
//     }
// }else if(yourJob === 'developer'){
//     return function(name){
//         console.log(developerQsn);
//     }
// }else{
//     return function(name){
//         console.log('your job is currently not available '+name);
//     }
return function(name){

    if(yourJob === 'designer'){
            
                console.log(name+' '+designerQsn);

        }else if(yourJob === 'teacher'){
            
                console.log(teacherQsn+', '+name);
            
        }else if(yourJob === 'developer'){
           
                console.log(developerQsn);
            
        }else{
           
                console.log('your job is currently not available '+name);
            }

}
}

var teachIntv = interviewByClosure('teacher');
teachIntv('jamaly');
teachIntv('bennet');
teachIntv('alby');

//==================using simple closures calls===================
interviewByClosure('developer')('idriss');
interviewByClosure('teacher')('idriss');
interviewByClosure('engineer')('Nurdin');
//==========================More examples in call(),apply() and bind()===

//Demo with javascript .call()

// var obj = {name:"Niladri"};

// var greeting = function(a,b,c){
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c;
// };

// console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// // returns output as welcome Niladri to Newtown KOLKATA in WB

// // array of arguments to the actual function
// var args = ["Newtown","KOLKATA","WB"];  
// console.log("Output using .apply() below ")
// console.log(greeting.apply(obj,args));


// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   }
  
//   const unboundGetX = module.getX;
//   console.log(unboundGetX); // The function gets invoked at the global scope
//   // expected output: undefined
  
//   const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());
//   // expected output: 42


function interviewQuestion(job) {

    if (job == 'designer') {
    
    var a = ', can you explain what UX design is?';
    
    } else if (job == 'teacher') {
    
    var a = ', what subject do you teach?';
    
    } else {
    
    var a = ', what do you do?';
    
    }
    
    
    
    return function(name) {
    
    console.log(name + a);
    
    }
      
    }

   //===========================APPLY()======================================
    var designerQsn = interviewQuestion('designer');
    designerQsn('adam msangi');

    var teacherQsn = interviewQuestion('teacher');
    teacherQsn('harith');

var myArry = [1,9,'ten','wali'];
var arr = ['edmund','flowers',1990,'juice'];
// myArry.push(myArry);
// console.log(myArry);

myArry.push.apply(myArry,arr);
console.log(myArry);
























































































































































