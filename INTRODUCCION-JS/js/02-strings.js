const producto = 'Monitor de 20"' || "Monitor de 20\""; 
const producto2 = String('Monitor de 20 Pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');

/*console.log( producto.length);
console.log(typeof producto2);
console.log(typeof producto3);*/


/*Metodos de Strings*/
/* IndexOf  retorna la posicion*/ 
console.log(producto.indexOf('de'));
console.log(producto.indexOf('21'));

// Includes (retorna true o false)
console.log(producto.includes('de'));
console.log(producto.includes('21'));