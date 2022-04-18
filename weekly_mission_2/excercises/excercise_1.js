const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   // Ejercicio 1.1 github
   console.log('\n Github Issue')

   const issueGithub = {
       name: "ArturoMendozaA",
       repositorio: "vuex_pasteleria",
       watch: 1,
       fork: 0,
       star: 0,
       issuesOpen: 1,
       issuesClosed: 1,
       getIssuesCount: function(){
           return this.issuesOpen + this.issuesClosed
       },

   }
   console.log('Nombre del repo: ' + issueGithub.repositorio)
   console.log('Issues totales: ' + issueGithub.getIssuesCount())
   // Ejercicio 1.2
   console.log('\n Ejercicio 1.2 Twitter')

   const userT={
       nombre:"L",
       biografía: "I am who I am",
       ubicación: "Añade tu ubicación",
       sitio_web: "Añade tu sitio web",
       fecha_de_nacimiento: "Añade tu fecha de nacimiento"
   }
   console.log(userT)

   //Ejercicio 1.3
   console.log('Ejercicio 1.3 Uber')
   const user= {
       
   }