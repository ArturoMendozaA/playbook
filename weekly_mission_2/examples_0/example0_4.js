//Objeto con métodos o funciones
const pet={
    name:"Cachi",
    sayHello: function(){
        //this name hace referencia a la propiedad del objeto
        console.log(`${this.name} says Hello!`)
    },
    where:"Where are you Cachi?"
}

console.log("Ejemplo 4 funcion dentro de un objeto")
pet.sayHello()