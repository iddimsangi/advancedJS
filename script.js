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

document.querySelector('.btn').addEventListener('click',function(){
    window.print();
})