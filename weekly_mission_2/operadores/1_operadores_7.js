
// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)

//ejemplos extra
console.log('\n ejemplos exptra de filter array')
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

let seaFiltered= seas.filter(arre=> arre.includes("i"))
console.log('Filtrado incluye i')
console.log(seaFiltered)

console.log('\n Start with b')

const seaStart = seas.filter(arre => arre.startsWith("B"))
console.log(seaStart)