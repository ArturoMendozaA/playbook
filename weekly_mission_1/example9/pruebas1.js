let miObjeto = new Object();
miObjeto.nombre = 'pluma';
miObjeto.color = 'azul';
miObjeto.tinta = 'Frixion'

console.log(miObjeto)

const miOtroObjeto = {
    variable:1,
    variable2:2
}
console.log(miOtroObjeto)

// 2. Declaración de un objeto con variables locales y públicas
const myModule = (() => {

    // Variables de contexto local
     const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
     const privateBar = [1,2,3,4]
     const baz = "Soy un valor que va a ser expuesto"
    
    // Variable para guardar las variables locales
     const exported = {
       publicFoo: "Valor público, pueden verme desde donde me llamen",
       publicBar: "Otro valor público",
           publicBaz: baz
     }
    
    // Exposición de variables locales
     return exported
    })()
    
    console.log(myModule)

    //prueba de módulo