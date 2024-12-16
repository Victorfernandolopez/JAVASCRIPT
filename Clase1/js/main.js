console.log('bienvenidos al curso de java script avanzado')
console.warn('bienvenidos al curso de java script avanzado')
console.error('bienvenidos al curso de java script avanzado')

/* ---------------------- */
/* nuevos constructores de variables en ES6(Ecmascript2015) */
console.log('\n *js5 - var*')

var numero = 5
console.log(numero)

/* ---------------------------- */
console.log('\n *es6 - let / const*')

let numero2 = 5
const numero3 = 5 

/* templates str */

console.log(`el numero es ${numero2}`)/* otro metodo de concatenacion */

/* arrow funcion 1 linea y mas lineas de codigo */
const sumar = (a,b) => a + b
console.log(sumar(5,5))

const sumar2 = (a,b) => {
    return a + b
}
console.log(sumar2(5,5))

/* con un solo argumento de entrada */
const cuadrado = a => a * a

/* sin argumento */
const hola = () => 'hola mundo'


/* ---------------------------- */

/* BOM browser object model --> windows*/

/* DOM document object model --> document*/

//acceso al bom
console.log(window.innerWidth)//ancho
console.log(window.innerHeight)//alto

//acceso al dom
console.log(window.document.getElementById('titulo'))