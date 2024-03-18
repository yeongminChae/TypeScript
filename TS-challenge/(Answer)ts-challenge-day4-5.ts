type Word = {
  term:string;
  definition:string;
}

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.get(term)) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.get(term)) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    let output = "\n--- Dictionary Content ---\n"
    Object.keys(this.words).forEach((term) =>
      output += `${term}: ${this.words[term]}\n`
    );
    output += "--- End of Dictionary ---\n"
    console.log(output);
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert(term:string, definition:string){
    if(this.get(term)){
      this.update(term, definition);
    } else {
      this.add(term, definition);
    }
  }
  exists(term:string){
    return this.get(term) ? true : false;
  }
  bulkAdd(words: Word[]){
    words.forEach(word => this.add(word.term, word.definition))
  }
  bulkDelete(terms: string[]){
    terms.forEach(term => this.delete(term));
  }
}

const dictionary = new Dict();

const KIMCHI = "김치"


// Add
dictionary.add(KIMCHI, "밋있는 한국 음식");
dictionary.showAll();

// Count
console.log(dictionary.count());

// Update
dictionary.update(KIMCHI, "밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI));

// Delete
dictionary.delete(KIMCHI);
console.log(dictionary.count());

// Upsert
dictionary.upsert(KIMCHI, "밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI))
dictionary.upsert(KIMCHI, "진짜 밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI))

// Exists
console.log(dictionary.exists(KIMCHI))

// Bulk Add
dictionary.bulkAdd([{term:"A", definition:"B"}, {term:"X", definition:"Y"}]);
dictionary.showAll();

// Bulk Delete
dictionary.bulkDelete(["A", "X"])
dictionary.showAll();
