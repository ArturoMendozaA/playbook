//Ejemplo con objeto que recibe parámetros
const pet = {
    name:"Wooper",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} says hello to`, yourPet )
    }
}
console.log("Ejemplo 5 onjeto con método que recibe parámetros")
pet.sayHelloToMyPet("Cachi")