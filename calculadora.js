const operaciones = require('./prototipo');
const operaciones1 = require('./prototipoRestar');
const operacionMultiplicar = require('./operacionMultiplicar');
const operacionDividir = require('./division');

console.log(operaciones.sumar(12,6));
console.log(operaciones1.restar(23,5));
console.log(operacionMultiplicar.multiplicar(3,3));
console.log(operacionDividir.dividir(4,2));

