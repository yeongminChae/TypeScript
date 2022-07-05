// OOP

type Words = {
  [key:string]: string 
}

// dict class : delete and update the word method, 
class Dict {
  private words:Words
  constructor(){
    this.words = {}
  }
  add(word:Word){ 
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def
    }
  }
  del(word:Word){
    if(this.words[word.term] !== undefined){
      delete this.words[word.term] 
    }
  }
  update(oldTerm: string, newTerm: string) {
     if(this.words.hasOwnProperty(oldTerm)) {
        this.words[newTerm] = this.words[oldTerm]; 
        delete this.words[oldTerm]; 
    } 
  }
  all(){
    for (let [key,value] of Object.entries(this.words)){
      console.log(`${key}:${value} `)
    }
  }
  def(term:string){
    return this.words[term]
  }
}

// word class : modify or add the definition of the words , print words method
class Word {
  constructor(
    public term:string,
    public def:string|string[]
  ) {}
}

const kimchi = new Word("kimchi","k-food")
const kimbap = new Word("kimbap","rice with kim")
const dict = new Dict()
dict.add(kimchi)
dict.add(kimbap)
dict.update("kimchi", "newKimchi")
dict.del(kimbap)

