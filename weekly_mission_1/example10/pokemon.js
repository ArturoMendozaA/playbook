
export default class Pokemon{
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
