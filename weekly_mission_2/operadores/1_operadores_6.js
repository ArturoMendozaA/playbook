// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

//pruebas de Slice
console.log('\n Pruebas extra de arreglos y slice')
let colorsArray = ["red","blue","green","yellow"]
//obtener sólo los 3 primeros, despues convertir los dos primeros a mayusculas

let onlyCol= colorsArray.map(arre => arre.slice(0,3))
console.log('Primeras Tres')
console.log(onlyCol)
console.log('\n primeras 2 mayus')
let onlyCO = onlyCol.map(arre => arre.toLocaleUpperCase().slice(0,2))
console.log(onlyCO)


