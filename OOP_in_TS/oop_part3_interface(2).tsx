// OOP

// absract class User { //  class doesn't allow u to create instance object , it words for to let us how to behave the inherited class
//   cnstructor(
//     firstName:string,
//     lastName:string
//   ) {}
//    sayHi(name:string):string
//    fullName():string
// }

// class Player extends User {
//   fullName(){
//     return `${this.firstName} ${this.lastName} `
//   }
//   sayHi(name:string){
//     return `Hello ${name}. my name is ${this.fullName} `
//   }
// }

interface User { // we can't use private property
  firstName:string,
  lastName:string,
  sayHi(name:string):string
  fullName():string
}
interface Human {
  health:number
}

class Player implements User, Human { // interface is not compile as a js code while it's providing a shape of class 
  constructor(
    public firstName:string,
    public lastName:string,
    public health:number
  ){}
  fullName(){
    return `${this.firstName} ${this.lastName} `
  }
  sayHi(name:string){
    return `Hello ${name}. my name is ${this.fullName} `
  }
}

function makeUser(user:User){ // using the interface as a arguments we can force the shape of object
  return "hi"
}
makeUser({
  firstName:"nico",
  lastName:"las",
  fullName: () => "xx",
  sayHi: (name) => "string"
})

// no need to write new User in interface