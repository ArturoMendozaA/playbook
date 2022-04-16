let journal =[]
console.log(journal);
function addEntry(events, squirrel){
    journal.push({events, squirrel});
}
console.log('Llamamos a la funcion');
//con braces se crea un arreglo,
//sin braces un objeto

addEntry(["work", "touched tree", "pizza", "running", "television"], false, true)
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

//agrega un valor fuera del objeto?
//journal.fish= "not a fish"
console.log(journal);
