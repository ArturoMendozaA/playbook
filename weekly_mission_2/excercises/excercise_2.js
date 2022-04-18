const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   //Ejercicio 1
   console.log('\n Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
   explorers.forEach(element => { console.log(element.name)   
   })
   //Ejercicio 2
   console.log('\n Imprime el stack de cada explorer, usa FOR EACH')
   explorers.forEach(element => {console.log(element.stack)   });
// Ejercicio 3
   console.log('\n Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
   const myNewArray = explorers.map(function(element){return element.stack})
   console.log('myNewArray: ', myNewArray)
// Ejercicio 4
   console.log('\n Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
   const containsJs = explorers.filter((element) => element.stack.includes('js'))
   console.log('Contains js: ', containsJs)
   //Ejercicio 5
   console.log('Busca el primer explorer que sea de la CDMX, usa FIND')
   const firstCDMX = explorers.find((cities) => cities.city === 'CDMX')
   console.log('EL primer valor que contiene CDMX es:', firstCDMX)
//ejercicio 6
    console.log('\n Obtén la suma de todos los exercises_completed, usa REDUCE')
    const reduceExcercise = explorers.reduce((acc, {exercises_completed})=>acc + exercises_completed,0)
    console.log(reduceExcercise)
    const total= Object.values(explorers).reduce((acc,{exercises_completed}) => acc + exercises_completed,0)
    console.log(total)