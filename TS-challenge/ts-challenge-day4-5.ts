type Words = {
    [key: string] : string
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ) {}
}

class Dict {
    private words: Words 

    constructor() {
        this.words = {}
    }

    private getWords(): string[] {
        return Object.keys(this.words)
    }

    private wordDetector(word: Word): boolean {
        return this.words[word.term] !== undefined
    }

    private insert(str1: string, str2: string) {
        this.words[str1] = str2
    }

    private defMaker(str: string): string {
        if (str.length === 0 ) {
            return 'No Deficition'
        } else {
            return str
        }
    }

    add(word: Word): void | string {
        if (!this.wordDetector(word)) {
            this.insert(word.term, this.defMaker(word.def))
        } else {
            return `This ${word.term} is already exists.`
        }
    }

    get(word: Word): string {
        return this.words[word.term]
    }

    delete(word: Word): void {
        delete this.words[word.term]
    }

    update(word: Word, newWord: string): void {
        if (this.wordDetector(word)) {
            this.insert(newWord, word.def)
            this.delete(word)
        } 
    }

    showAll(): void {
        const arr = this.getWords()
        arr.forEach((i) => console.log(i))
    }

    count(): number {
        const arr = this.getWords()
        return arr.length
    }

    upsert(word: Word, newWord?: string): void | string {
        if (this.wordDetector(word)) {

            if (newWord) {
                this.insert(newWord, word.def)
                this.delete(word)
            } else {
                return '수정할 값을 설정해주세요.'
            }

        } else {
            this.insert(word.term, this.defMaker(word.def))
        }
    }

    exists(word: Word): string {
        if (this.wordDetector(word)) {
            return '존재합니다.'
        } else {
            return '존재하지 않습니다.'
        }
    }

    bulkAdd(...words: Word[]): void | string {
        for (const i of words) {
            if (!this.wordDetector(i)) {
                this.insert(i.term, this.defMaker(i.def));
            } else {
                return `This ${i.term} is already exists.`; 
            }
        }
    }

    bulkDelete(...words: Word[]): void | string {
        for (const i of words) {
            if (this.wordDetector(i)) {
                this.delete(i)
            } else {
                return `This ${i.term} is not exists in dictionary.`; 
            }
        }
    }
}

const kimchi = new Word('kimchi', 'korean food');
const orange = new Word('orange', 'korean orange');
const kiwi = new Word('kiwi', 'kiwi food');
const choco = new Word('choco', 'update experiment');
const late = new Word('late', 'update experiment');
const noDef = new Word('noDef', '');
const candy = new Word('candy', '');

const dict = new Dict();

