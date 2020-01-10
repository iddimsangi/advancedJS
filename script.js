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
































































