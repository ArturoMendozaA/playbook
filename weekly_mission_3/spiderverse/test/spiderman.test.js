const Spiderman = require('./../app/spiderman')

describe("Test suite dummy description",()=>{
test('Case 1 Dummy', () =>{
const resultOfsomething = 1 + 2
expect(resultOfsomething).toBe(3)
})
})

describe("Unit Test for Spiderman class", ()=>{
    test('2) Create an spiderman object', ()=>{
        //aquí escribitemos el código que queremos usar tal cuál
        //Quiero poder instaciar un objeto Spiderman con esta información 

        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        //Validamos que el código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })

})
// Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.

// Ejemplo:

// tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"

describe("Unit test for Spiderman function", ()=>{
    test("2) Create spiderman function", ()=>{
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 3, "Marvel")
        expect(tomHolland.name).toBe("Spiderman Marvel")
        expect(tomHolland.age).toBe(25)
        expect(tomHolland.actor).toBe("Tom Holland")
        expect(tomHolland.movies).toBe(3)
        expect(tomHolland.studio).toBe("Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
        
    })
})