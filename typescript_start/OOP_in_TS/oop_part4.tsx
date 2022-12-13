// OOP

// polymorphism is how we can write a code that takes different shapes -> by using generic we can accomplish the polymorphism
// generic allow us to write placeholder types and typescript will change that as concrete type.

interface SStorage<T> {
  // [key:string]  this allows us to define objects which is unlimited , we don't know how many but we knew what type is it
  [key:string]:T
}

class LocalStorage<T> {
  private storage:SStorage<T> = {}
  set(key:string, value:T){
    this.storage[key] = value; // code challenge : catch the error
  }
  remove(key:string){
    delete this.storage[key]
  }
  get(key:string):T {
    return this.storage[key]
  }
  clear(){
    this.storage={}
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.get("ket")
stringsStorage.set("hello","how r u") // set(key:string, value:T) -> typescript is changing <T> into string bc we created localStorage as <string>
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("xxx")