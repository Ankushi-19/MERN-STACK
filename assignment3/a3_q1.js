// 1. Class Creation and Object Instantiation:
//  Create a Person class with properties name, age, and gender.
//  Add a method describe that returns a string with all the person&#39;s details.
//  Instantiate three objects of the Person class and log their details using the
// describe method.

class person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getdetails(){
        return`Name : ${this.name}, Age : ${this.age}, Gender : ${this.gender}`;
    }
}
const p1=new person("Ankushi",22,"Female")
const p2=new person("Dipta",23,"Male")
const p3=new person("Ram",40,"Male")
console.log(p1.getdetails())
console.log(p2.getdetails())
console.log(p3.getdetails())

