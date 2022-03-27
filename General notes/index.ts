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

//Validating optional argument
function advancedGreeting(firstName:string, lastName?:string ){
    if(lastName !== undefined){
       return console.log(`Hello ${firstName} ${lastName} how is it going?`)
    }
   return console.log(`Hello ${firstName}  how is it going?`)
}

//Union types
function showBalance(balance:string | number){
    console.log(`The account balance is $ ${balance}`)
}

//Validating using union types
function showUserRole(role:boolean | string){
    if(typeof role === 'boolean'){
        return 'Unapproved user'
    }
    return `The user role is: ${role}`
}

//Type alias
function showId(id: string | number){
    console.log(`The id is ${id}`)
}

//Interface
interface Point{
    x:number
    y:number
    z:number
}

function showCords(obj:Point){
    console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`)
}