// OOP

abstract class User{ // only extands from other classes , it's impossible create a new instance with abstract class
  constructor(
    protected firstName:string,
    protected lastName:string, // private property can't accessable at outside of the instance and any other child classes
    protected nickName:string,
  ) {}
  abstract getNickName():void // abstract method : only we can write the call signature not implementations
  getrFullname(){ // method
    return `${this.firstName}.${this.lastName} `
  }
}

class Player extends User {
  getNickName(){ // in abstract class we have to implement all of the abstract method
    console.log(this.nickName)
  }
}

const nico = new Player("nico","las","nicolas")
// nico.firstname -> private property so i can't access to this
nico.getrFullname()