// 1. Creación de un objeto con propiedades
let myCar = new Object(); //creacion de un objeto
myCar.make = 'Ford'; //guardando un valor dentro de un objeto
myCar.model = 'Mustang';
myCar.year = 1969;

console.log("Objeto myCar: ", myCar) // imprimiendo un objeto

// 1. Declaración de un objeto con varibles locales y públicas

const myModule = (() =>{

    //Variables de contexto local
    const privateFoo = "Soy un valor privado, sólo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "soy un valor que va a ser expuesto"

    //Variable para guardar las variables locales **¿Públicas?**
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
// exposición de variables locales
return exported
}) ()

console.log("Objeto myModule: ", myModule)
