//Ejemplo 2: for each para calcular la suma de todos los elementos de una lista
let sum = 0;
const list =[1, 2, 3, 4, 5]

console.log("Hace la suma de cada valor de la lista")
list.forEach(element => sum += element)
console.log(sum)