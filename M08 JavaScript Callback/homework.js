/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //Al string lo tomo como un array para poder posicionarme en cada letra
   //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
   //El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
   return nombre[0].toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(); //forma de invocar el parametro recibido
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1,num2);
   return cb
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma=0;
   for (var i=0; i<arrayOfNumbers.length; i++)
   {
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for(let i=0; i<array.length; i++){
   cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let arregloNuevo = [];
   for(let i=0; i<array.length; i++){
      arregloNuevo[i] = cb(array[i])
   }
   return arregloNuevo
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   /*let nuevoArreglo = [];
   let j=0;
   for (let i=0; i<arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0] === 'a')
      {
         nuevoArreglo[j]=arrayOfStrings[i];
         j++
      }
   }
   return nuevoArreglo */
   return arrayOfStrings.filter((recorroElemetro) => recorroElemetro[0] === 'a');
   //segunda forma de filtrar un array con el metodo filter. Para tener en cuentra en el primer parentesis genero la propiedad y con la flecha utilizo dicha propiedad
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
