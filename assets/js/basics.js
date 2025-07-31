// comentarios de una sola linea

/*
comentarios de varias lineas
*/

/*
variables
*/

var nombre = "Juan" // var es una variable global hoy en dia se usa let y const
let edad = 20  // let es una variable local y se puede reasignar 
const pi = 3.141 // const es una variable local y no se puede reasignar


edad = 21

//pi = 3.15 // esto da error porque const no se puede reasignar

console.log(nombre, edad, pi)

/*
Tipos de datos
- string   "comillas dobles"  'comillas simples'  `comillas invertidas`
- number   .
- boolean
- null
- undefined
- object
- array
- function
*/

let apellido = 'Iraldi'
let segundoNombre = "Yoel"

console.log(apellido, segundoNombre)

const esMayorDeEdad = true // boolean
const esMenorDeEdad = false // boolean

console.log(esMayorDeEdad, esMenorDeEdad)

/*
null
*/

let felicidad = null // null es un valor que no tiene valor
console.log(felicidad)

/*
undefined
*/

let fechaDeMuerte = undefined // undefined es un valor que no tiene valor
console.log(fechaDeMuerte)

//------------------------------------------------------------------------------//
/*
Operaciones Matematicas
*/

let numero1 = 10
let numero2 = 20

console.log(numero1 + numero2) // suma
console.log(numero1 - numero2) // resta
console.log(numero1 * numero2) // multiplicacion
console.log(numero1 / numero2) // division
console.log(numero1 % numero2) // modulo (resto de la division)
console.log(numero1 ** numero2) // potencia
let res1 = numero1++
let res2 = ++numero1
console.log(res1) // incremento (post incremento)
console.log(numero1-- ) // decremento
console.log(res2 ) // incremento (pre incremento)
console.log(--numero1 ) // decremento

const resultado = numero1 + numero2
console.log(resultado)

// Array

let arr = ["Papa", "Cebolla", "Tomate"]

let arr1 = [ "Pepe", 1, true ]

console.log(arr[1])

arr[1] = "Frutilla"

console.log(arr[1])

// Objetos 

let persona = {
    nombre: "ivan",
    edad: 27,
    colorPelo: "castaño",
    millonario: false
}

console.log(persona.nombre)

persona.edad = 28

console.log(persona.edad)

// combinacion de los dos tipos de datos

const alumnos = [
    {
        nombre: "pepe",
        id: 1,
        calificacion: 7
    },
    {
        nombre: "maria",
        id: 2,
        calificacion: 10
    }
]

console.log(alumnos[0].calificacion)

let frutas = ["Tomate", "Frutilla", "Melon"]

for(let el of frutas){
        console.log(el)
}

let numeros = [ 2, 4, 6 ]

for(n of numeros){
    console.log(n * 2)
};

numeros.forEach(element => {
    console.log(element / 2)
});

let username = "Ivan"
let fecha = Date.now()
const saludoConcat = "Hola " +  username + " hoy es " + fecha
const saludoInterpolacion = `Hola ${nombre} hoy es ${fecha}`

console.log(saludoConcat)
console.log(saludoInterpolacion)