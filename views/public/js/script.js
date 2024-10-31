function Persona(nombre,edad, estatura,color){
    this.nombre = nombre
    this.edad =  edad
    this.estatura =  estatura
    this.color =  color
    this.moverse = function(nombre){
        this.nombre = nombre
        console.log(nombre + ' se está moviendo')
    }
    this.expresarse = function(){
        console.log('se expresó...')
    }
}

let PersonaUno = new Persona('Laura',18,1.55,'Blanco')
let personaDos = new Persona('Daniel',18,1.74,'Blanco')
let personaTres = new Persona('Anyis',18,1.60,'Blanco')

PersonaUno.moverse()
personaDos.moverse()
personaTres.moverse()

console.log(PersonaUno,personaDos,personaTres)