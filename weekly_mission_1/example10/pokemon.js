
export default class MyPokemon{
    constructor(name){
        this.name= name
       }
    sayHello(){
        console.log(`${this.name}, says: Hello!!!`)
    }
    sayMessage(msg){
        console.log(`Mi pokemon ${this.name} dice: ${msg}`)
      }
}
