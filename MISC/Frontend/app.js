//FACTORY FUNCTION
//   


class Person{
    constructor(name,age){
      this.name=name;
      this.age=age
    }
    talk(){
      console.log(`Hii i am ${this.name}`);  
    }
}

let p1=new Person("Sarthak",23)


class Student extends Person{
     
}