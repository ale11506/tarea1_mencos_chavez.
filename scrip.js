// Ejemplo de string
console.log("Ejemplo de string-----------------------------");

console.log("Convertir una cadena a mayúsculas--------------------");

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

// Ejemplo de uso:
let texto = "hola mundo";
let textoMayusculas = convertirAMayusculas(texto);
console.log(textoMayusculas); // "HOLA MUNDO"


console.log("Revertir una cadena-----------------------------");

function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Ejemplo de uso:
let textoRevertido = revertirCadena("hola");
console.log(textoRevertido); // "aloh"

console.log("Contar el número de palabras de una cadena--------------------------");

function contarPalabras(cadena) {
    let palabras = cadena.trim().split(/\s+/);
    return palabras.length;
}

// Ejemplo de uso:
let numeroDePalabras = contarPalabras("Ejemplo de cadena");
console.log(numeroDePalabras); // 3



// Ejemplo de number
console.log("Ejemplo de number---------------------------------------------");

console.log("Convertir un número a una cadena con un número fijo de decimales--------------------------------");

function convertirANumeroFijo(num, decimales) {
    return num.toFixed(decimales);
}

// Ejemplo de uso:
let numeroFijo = convertirANumeroFijo(123.456789, 2);
console.log(numeroFijo); // "123.46"

console.log("Obtener el valor absoluto de un número-----------------------------------");

function obtenerValorAbsoluto(num) {
    return Math.abs(num);
}

// Ejemplo de uso:
let valorAbsoluto = obtenerValorAbsoluto(-123.45);
console.log(valorAbsoluto); // 123.45

console.log("Generar un número aleatorio entre un rango específico--------------------");

function generarNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

// Ejemplo de uso:
let numeroAleatorio = generarNumeroAleatorio(1, 10);
console.log(numeroAleatorio); // Ejemplo: 4.5678 (valor aleatorio entre 1 y 10)

// Ejemplo de bool
console.log("Ejemplo de bool-----------------------------------");

console.log("Verificar si un valor es verdadero o falso----------------------------");

function esVerdadero(valor) {
    return Boolean(valor);
}

// Ejemplo de uso:
console.log(esVerdadero(1)); // true
console.log(esVerdadero(0)); // false

console.log("Negar un valor booleano----------------------------------");

function negarValor(valor) {
    return !valor;
}

// Ejemplo de uso:
console.log(negarValor(true)); // false
console.log(negarValor(false)); // true

console.log("Verificar si dos valores booleanos son ambos verdaderos---------------------");

function ambosVerdaderos(valor1, valor2) {
    return valor1 && valor2;
}

// Ejemplo de uso:
console.log(ambosVerdaderos(true, false)); // false
console.log(ambosVerdaderos(true, true)); // true

// Ejemplo de object
console.log("Ejemplo de object------------------------");

console.log("Clonar un objeto------------------------------------");

function clonarObjeto(obj) {
    return { ...obj };
}

// Ejemplo de uso:
let original = { nombre: "Juan", edad: 30 };
let copia = clonarObjeto(original);
console.log(copia); // { nombre: "Juan", edad: 30 }

console.log("Obtener las claves de un objeto-----------------------------");

function obtenerClaves(obj) {
    return Object.keys(obj);
}

// Ejemplo de uso:
let objeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
let claves = obtenerClaves(objeto);
console.log(claves); // ["nombre", "edad", "ciudad"]

console.log("Fusionar dos objetos-------------------------");

function fusionarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Ejemplo de uso:
let objeto1 = { nombre: "Juan", edad: 30 };
let objeto2 = { ciudad: "Madrid", pais: "España" };
let objetoFusionado = fusionarObjetos(objeto1, objeto2);
console.log(objetoFusionado); // { nombre: "Juan", edad: 30, ciudad: "Madrid", pais: "España" }

// Ejemplo de array
console.log("Ejemplo de array--------------------------------------------");

console.log("Filtrar elementos de un array------------------------------------");

function filtrarArray(array, criterio) {
    return array.filter(criterio);
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = filtrarArray(numeros, num => num % 2 === 0);
console.log(numerosPares); // [2, 4, 6]

console.log("Encontrar el primer elemento que cumpla con una condición--------------------");

function encontrarElemento(array, criterio) {
    return array.find(criterio);
}

// Ejemplo de uso:
let primerPar = encontrarElemento(numeros, num => num % 2 === 0);
console.log(primerPar); // 2

console.log("Ordenar un array de números");

function ordenarArrayNumeros(array) {
    return array.sort((a, b) => a - b);
}

// Ejemplo de uso:
let numerosOrdenados = ordenarArrayNumeros([5, 3, 8, 1, 2]);
console.log(numerosOrdenados); // [1, 2, 3, 5, 8]
