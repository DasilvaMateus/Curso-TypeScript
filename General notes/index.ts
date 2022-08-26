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

//Interface x alias
interface Person{
    name:string
}

interface Person{
    age:number  //During this move the interface content was not overwritten
}

//Literal types
function showDirection(direction: 'left'|'right'|'center'){
    console.log(`The direction is :${direction}`)
}
showDirection('left')

//Non  null assertion operators
const p = document.getElementById('element')
console.log(p!.innerText)

//Big int (ES2020)
let n :bigint
n = 1000n
console.log(n + 100n)

//Symbol (ES2020)
let symbolA:symbol = Symbol('a')

//Type guard
function guardSum(a:number | string, b:number |string){
    if(typeof a === 'string' && typeof b ==="string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === 'number' && typeof b ==="number"){
        console.log(a+b)
    }
}

//Instance of
class User{
    name

    constructor(name:string){
        this.name = name
    }
}
class SuperUser extends User{
     constructor(name:string){
         super(name)
     }
}

const jhon = new User('jonh')
const paul = new SuperUser('paul')

function userGreeting(user:object){
    if(user instanceof SuperUser){
        console.log(`Hello ${user.name},start the self destruction sequence?`)
    }else if(user instanceof User){
        console.log(`Hello ${user.name},start the ice cream machine?`)
    }
}

//In operator
class Dog{
    name
    breed

    constructor(name:string, breed?:string){
        this.name=name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob','Poodle')

function showDogDetails(dog:Dog){
    if('breed' in dog){
        console.log(`The dog breed is ${dog.breed}`)
    }
}

//Void
function withoutReturn():void {
    console.log('no return')
}

//Callback as args
function otherGreeting(name:string) {
    return `Hello ${name}`
    
}
function greetingAgain(f:(name:string)=>string,userName:string) {
    console.log("Greeting again")
}
greetingAgain(greeting,"Matesus")

//Generic function
function firstElement<T>(arr: T[]):T {
    return arr[0]
}
console.log(firstElement([1,2,3]))
console.log(firstElement(["a","b","c"]))
console.log(firstElement('Hello')) //Not allowed, in view of the typing

//Constraints
function biggestNumber<T extends number | string>(a:T, b:T) {
    let biggest:T

    if (+a > +b) {
        biggest=a
    } else {
        biggest=b
    }
    return biggest
}

//Destructuring as param
function showProductDetails({name, price}: {name:string, price:number}){
    console.log(`The product name is ${name} and the price is ${price}`)
}

//Interfaces...
interface Product{
    name:string
    price:number
    isAvaliable:true
}
function showProductDetailsII(product:Product){
    console.log(`The product name is ${product.name} and the price is ${product.price}`)
    if(product.isAvaliable){
        console.log(`The product is available`)
    }
}

//Optional properties
interface User{
    email:string
    role?:string
}
function showUserDetailsIII(user:User){
    console.log(`The user email is ${user.email}`)
    if(user.role){
        console.log(`The user role is ${user.role}`)
    }
}

//Type parameters
function getSomeKey<T, K extends keyof T>(object: T, key: K){
    return `The key ${key} its in object and his value is ${object[key]}`;
}
const sever={
    hd:'2TB',
    ram:'32GB'
}

console.log(getSomeKey(sever,'ram'))

//Keyof type operator
type Character = {name:string, age:number, hasDriverLicense:boolean}
type X = keyof Character

function showCarName(obj:Character,name:X):string{
    return `${obj[name]}`
}

const myChar:Character ={
    name:"Mateus",
    age:30,
    hasDriverLicense:true
}

console.log(showCarName(myChar,'name'))

//Class fields
class Cat{
    name!:string
    age!:number
}

const garfield= new Cat()
garfield.name='Garfield'
garfield.job='Sleep' //Not allowed, in view of type

//Class readonly
class Doggy {
    name!:string
    readonly age = 12
}

//Heritage and super
class Machine{
    name!:string
    constructor(name:string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns:string

    constructor(name:string, guns:string) {
        super(name)
        this.guns = guns
    }
}

//Decorators

function myDecorator(){
    return function(
        target:any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        console.log('Executing decorator')
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClass{
    @myDecorator()
    testing(){
        console.log('Method execution')
    }
}