const numbers: number[] = [1, 2, 3, "test"] //Due to typing of 'numbers' the array will not allow a string

numbers.push(5) //Movement allowed, in view of the typing

const names: string[] = ['Rycard', 'fia']

names.push(4) //Movement not allowed, in view of the typing

const nums: Array<number> = [100, 200] //Other sintax, interface

const arr1: any = [1, 'teste', true, []] //Avoid this approach as much as possible

//Function parameters being typed, before typing the typescript infers that the types are any
function sum(a: number, b: number) {
}
sum(4, 5)

//The return of a function being typed
function greeting(name: string): string {
    return `Hello ${name}`
}

//Anonymous function
setTimeout(function () {
    const salllary: number = 1000
    parseFloat(salllary)//Not allowed
}, 2000)

//Optional props
function showNumbers(a: number, b: number, c?:number){
    console.log("A" + a)
    console.log("B" + b)
    console.log("C" + c)
}
showNumbers(4,5) //This was made possible by the optional em type of 'C'