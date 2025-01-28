/* que son los callbacks */
// Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.
// En otras palabras, un callback es una función que se ejecuta después de que otra función haya terminado de ejecutarse.
// Ejemplo:
/*function miFuncion(callback) {
      Hacer algo aquí ...
     callback();
}*/

console.warn(document.querySelector('title').innerText);
//----------------------------------------------
var uno = () => {
  console.log('Soy la función uno');
};

var dos = () => {
    console.log('Soy la función 2');
};

uno();
dos();

function prueba(item, callback) {
    console.log(item);
    //comprobar si hay o n callback
    //comprobacion de si es una funcion o no
    if (typeof callback === 'function')
    callback();
}

prueba(1,uno);
prueba(2,dos);
prueba(3)

//-----------------------------------------------------------------
const suma = (a,b) => a+b
const resta = (a,b) => a-b
const mult = (a,b) => a*b
const mod = (a,b) => a%b
const div = (a,b) => a/b

function operacion(a,b,cb){
  return cb(a,b)
}

let n1 = 15,n2 = 6

console.log(`la suma de ${n1} y ${n2} da ${operacion(n1,n2,suma)}`)
console.log(`la resta de ${n1} y ${n2} da ${operacion(n1,n2,resta)}`)
console.log(`la multiplicacion de ${n1} y ${n2} da ${operacion(n1,n2,mult)}`)
console.log(`la divicion de ${n1} y ${n2} da ${operacion(n1,n2,div)}`)
console.log(`el modulo de de ${n1} y ${n2} da ${operacion(n1,n2,mod)}`)


//----------------------------------------
console.log('\n/* EVENTOS */')

//onclick
var btn = document.getElementById('btn')
//console.log(btn)

/* function click(){
  console.log('Click me!')
}

btn.onclick = click */

//------------------------------------------
console.log('\n EVENTOS con multiples callbacks ')

//solucion uno (statica)
/* btn.onclick = () => {
  uno()
  dos()
} */

//solucion dos (dinamica) (sacar y poner funciones)
btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function(){
  console.log('soy otra funcion')
})
btn.addEventListener('click', () => {
  console.log('soy otra funcion 2')
})

// con setTimeout remuevo la funcion dos del listener despues de 3 segundos
//sintaxixs de la funcion setTimeout


/* setTimeout(() =>{
  btn.removeEventListener('click', dos)
},3000) */

//------------------------------------------
console.log('\n /* event object (e) (event) (evt)')

btn.addEventListener('click',function(e){
  console.log(e)
})
btn.addEventListener('click', e =>{
  console.log(e)
})

function procesarEventoClick(e){
  console.log(e)
}

btn.addEventListener('click', procesarEventoClick)


//--------------------------------------------
console.log('\n eventos con conportamientos auromaticos')
const link = document.querySelector('#link')
link.addEventListener('click', function(e) {
  e.preventDefault() // cancela ele evento con corportamiento automatico

  console.log('click en link')
  setTimeout(() =>{
    window.location.href = 'https://www.google.com'
  },3000)
})


//--------------------------------------------
console.log('\n propagacion de eventos(bubbling y capturing)')

var UNO = document.getElementById('uno')
var DOS = document.getElementById('dos')
var TRES = document.getElementById('tres')

/* TRES.addEventListener('click',function(){
  console.log('click en tres')
},false) // tercer parametro: direccion de propagacion de evento, false bubbling, true capturing */
DOS.addEventListener('click',function(){
  console.log('click en dos')
})
UNO.addEventListener('click',function(){
  console.log('click en uno')
})

//detener propagacion
TRES.addEventListener('click',function(e){
  e.stopPropagation('tres')
  console.log('click en tres')
},false) 


//------------------------------------------
console.log('\n aplicacion avanzada de propagacion de eventos')

var botonCreado = false

var estatico = document.getElementById('estatico')
estatico.addEventListener('click',function(){
  console.log('click en estatico')
  if(!botonCreado){
    var dinamico = document.createElement('button')
    dinamico.innerText = 'dinamico'
    dinamico.id = 'dinamico'
    document.body.appendChild(dinamico)

    botonCreado = true
  }
})

