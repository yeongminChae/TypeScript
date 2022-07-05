// OOP

type Words = {
  [key:string]: string // the way how we put unlimited amount of key values , i can use this when i need to declare the object type especially i know bout the type even i don;t know bout properties
}

class Dict {
  private words:Words
  constructor(){
    this.words = {}
  }
  add(word:Word){ // use the class as a type parameter
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def
    }
  }
  def(term:string){
    return this.words[term]
  }
}

class Word {
  constructor(
    public term:string,
    public def:string
  ) {}
}

const kimchi = new Word("kimchi","k-food")

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")

// code challenge
// dict class : delete and update the word method, 
// word class : modify or add the definition of the words , print words method