//objeto con funcion
const myObject={
    name: "Cachi",
    myFunction: function(){
        console.log(`${this.name}, says hello`)
    }
}
console.log('Ejemplo 4:objeto con métodos')
myObject.myFunction()