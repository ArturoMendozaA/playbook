class Spiderman {
    constructor (name, age, actor, movies, studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio 
    }
    getInfo(){
        return "Hey, I'm "+this.actor+" from "+this.studio+" studio"
    }
}
//Probando cambios de commit2
module.exports = Spiderman