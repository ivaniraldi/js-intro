//let nombre = prompt("Ingrese su nombre") // Prompt sirve para pedirle un dato a un usuario

//const saludo = "Hola " 

//console.log(saludo + nombre)

//let num1 = Number(prompt("Ingrese el numero 1"))
//let num2 = Number(prompt("Ingrese el numero 2"))

//console.log(num1 + num2)
console.log(document)

const elementoAModificar = 'h2'

console.log(document.querySelector('h1'))
console.log(document.querySelector(elementoAModificar))
console.log(document.querySelector('.titulo'))


let titulo = document.querySelector('#idTitulo') //aca nos queda el h1 guardado

titulo.innerHTML = "Titulo injectado desde JS"

titulo.style.color = "red"

console.log(titulo)

let texto = document.querySelector("h4")

texto.style.fontSize = "50px" // todas las propiedades que en css estan separadas por un guion en js, se sepanar en camelCase 
let edad
//let edad = Number(prompt("ingrese su edad"))
/*
= asignacion
< menor a
> mayo a 
<= menor o igual a
>= mayor o igual a
|| or
&& and
!= diferente a
== igualidad
=== igualidad estricta
!== diferencia estricta 
*/

if(edad == 18 ){
    texto.innerHTML = "No puedes entrar"
}else{
    texto.innerHTML = "Bienvenido a la web"
}


// funciones
// funcion declarativa (se declara con la palabra clave function)
function suma(num1, num2){
    console.log(num1+num2)
    return num1+num2
}

//funcion de expresion
const pintar = function(color){
    document.querySelector("body").style.backgroundColor = color
}

pintar("green")
//funcion flecha
let pintarTitulo = ()=>{
    document.querySelector("h1").style.color= "blue"
}

//funcion anonima
()=>{console.log("Funcion anonima")}

let botonDePintar = document.querySelector("#colorBtn")

botonDePintar.addEventListener("click", ()=>{
    let color = document.querySelector("#colorInput").value
    console.log(color)
    document.querySelector("body").style.backgroundColor = color
})

document.querySelector("#nameBtn").addEventListener("click", ()=>{
    let nombreEscrito = document.querySelector("#nameInput").value
    console.log(nombreEscrito)
    document.querySelector('h5').innerHTML = "Hola de nuevo " + nombreEscrito
})