declare module "lodash" {
function head<T>(array: Array<T>): T | undefined

function hasIn(
    object: object, 
    key: string
): boolean

function isBoolean<T>(value: T): boolean

function toString<T>(value: T): string

function split(
    string: string, 
    separator: RegExp | string, 
    limit?: number
): string[]

function hasPath(
    object: object, 
    path: string[] | string
): boolean

function filter<T>(
    array: Array<T>, 
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) => boolean
): Array<T>

function every<T>(
    array: Array<T>, 
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) => boolean
): boolean

function map<T, U>(
    array: Array<T>, 
    iteratee: (
        value: T,
        index: number,
        array: Array<T>
    ) => U
): Array<U>
}
