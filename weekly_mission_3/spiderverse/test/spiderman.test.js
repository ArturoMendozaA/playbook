const Spiderman = require('./../app/spiderman')
describe("Test suite dummy description",()=>{
test('Case 1 Dummy', () =>{
const resultOfsomething = 1 + 2
expect(resultOfsomething).toBe(3)
})
})

describe("Unit Test for Spiderman class", ()=>{
    test('1) Create an spiderman object', ()=>{
        //aquí escribitemos el código que queremos usar tal cuál
        //Quiero poder instaciar un objeto Spiderman con esta información 

        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        //Validamos que el código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })

})