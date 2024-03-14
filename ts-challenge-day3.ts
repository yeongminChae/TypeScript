const a = [1,2,3,4]
const b = ['a','b','c','d']
const c = [true,false, 1, 2, 'a']

const last = <T>(arr: T[]):T => {
  const index = arr.length
  return arr[index - 1];
};

const prepend = <T, U>(arr: T[], item: U): (T | U)[] => {
  return [item, ...arr]
};

const mix = <T, U>(arr1: T[], arr2: U[]): (T | U)[] => {
  return [...arr1, ...arr2]
};

const count = <T>(arr: T[]):number => {
  const index = arr.length
  return index
};

const findIndex = <T>(arr: T[], item: T): number | null => {
  const index = arr.indexOf(item);
  return index !== -1 ? index : null;
};

const slice = <T>(arr: T[], startIndex: number, endIndex?: number): T[] => {
  const newArr = arr.slice(startIndex, endIndex)
  return newArr
};

// last 함수의 호출 시그니처
// function last<T>(arr: T[]): T;

// prepend 함수의 호출 시그니처
// function prepend<T, U>(arr: T[], item: U): (T | U)[];

// mix 함수의 호출 시그니처
// function mix<T, U>(arr1: T[], arr2: U[]): (T | U)[];

// count 함수의 호출 시그니처
// function count<T>(arr: T[]): number;

// findIndex 함수의 호출 시그니처
// function findIndex<T>(arr: T[], item: T): number | null;

// slice 함수의 호출 시그니처
// function slice<T>(arr: T[], startIndex: number, endIndex?: number): T[];


console.log(last(a))
console.log(prepend(b, 'new'))
console.log(prepend(b, 1))
console.log(mix(a, b))
console.log(mix(b, c))
console.log(count(c))
console.log(findIndex(a, 8))
console.log(findIndex(b, 'b'))
console.log(findIndex(c, true))
console.log(findIndex(c, 'this'))
console.log(slice(c, 1))
console.log(slice(c, 1, 4))
console.log(slice(a, 0, 3))
