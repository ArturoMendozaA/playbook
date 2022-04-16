// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toLocaleLowerCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)


//pruebas
console.log('\n Prueba de  replica');

//creando un objeto
const miArray = ["uno", "dos", "tres", "cuatro"]
console.log("Arreglo de prueba original", miArray)
//convertir todos lo nombre en mayusculas

const miMayusculeArray = miArray.map(doMin => doMin.toLocaleUpperCase())
console.log('\n Arreglo convertido a arreglo con Mayúsculas')
console.log(miMayusculeArray)
console.log('\ Arreglo convertido a arreglo con Minúsculas')

const miMinuscculasArray = miArray.map(domin => domin.toLocaleLowerCase())
console.log(miMinuscculasArray);