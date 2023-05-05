/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   /*1era forma de realiza el ejercicio
   
   var x = []; //creo un array vacio llamado x
   var key = Object.keys(objeto); // aca solamente obtengo la clave del objeto en forma de array  [D,B,C]
   for (var i=0; i<key.length; i++)
   {
      x.push([key[i],objeto[key[i]]]); //Importante: aca para ingresar al array x un arreglo, los pasos a seguir son:
                                       //1. Cochete (con esto genero el array), 2. En ese ejercicio me pide que el array
                                       //contenga el par clave valor, entonces primero ingreso la clave, la cual fue generada 
                                       //con anterioridad, y despues ingreso al valor que le corresponde a esa clave. Haciendo
                                       //genero genero el array. Conclucion, el esquema es: push([clave(Key),valor(objeto[key])])
                                       //de esa forma genero la primera iteriacion; esto se debe repetir para todas las claves del 
                                       //objeto. Algo para sacar de esta linea de codigo es la utilizacion del push 
   }
   return x // retorna el array generado
   */

   //2da forma de generar el ejercicio
   var array = [];   // genero el array vacio
   for(x in objeto)  //Estructura: for(variable in objeto) => variable( Asigna un nombre de propiedad diferente 
                     //a la variable en cada iteración. Puedo tomarlo como que es la clave del objeto) ; 
                     //objeto(Objeto cuyas propiedades enumerables que no son símbolos se iteran. Este seria el objeto) 
                     //For-In: El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una 
                     //representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la 
                     //iteración. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.
   {
      array.push([x,objeto[x]]); // el push se utiliza de la misma forma que en el caso 1
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   /*var caracterOrdenado = string.split("").sort(function(a,b){ 
      return a.charCodeAt(0) - b.charCodeAt(0); //El charCodeAt() método devuelve un número indicando el valor 
                                                //Unicode del carácter en el índice proporcionado. Cada letra y numero
                                                //tiene diferente Unicode(numero) y las letras se diferencia tambien en
                                                //minuscula y mayuscula. Ej.: S(Unicode:83) y s(Unicode:115)
   }).join(""); //Con el metodo Join transformo el array en string

   //Lo primero que se realiza es ordenar la palabra; para eso se utiliza "sort" (El método ordena los elementos 
   //de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente 
   //estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su 
   //valor Unicode.). Por lo tanto este metodo, lo primero que debe recibir es un array (nota: los string se puede
   //tomar como array, pero es este caso no sirve porque lo debo separar); para realiza esto se utiliza la funciona 
   //slit(este metodo puede separar segun la condicion que se coloque entre las comillas, en este caso, quiero 
   //separa los caracteres letra por letra). Una vez ordenado lo vuelvo a convertir en palabra

   var obj= {}; //Este es mi objeto el cual tendra a cada caracter con Key(clave) y la cantidad que se repite es el 
                //valuer(valor)

   for (var i=0; i<caracterOrdenado.length; i++){
      if(Object.keys(obj).includes(caracterOrdenado[i])){
         obj[caracterOrdenado[i]]++;
      } else {
         obj[caracterOrdenado[i]]=1;
      }
   }

   return obj*/

   var obj={};

   var caracterOrdenado = string.split("").sort(function(a,b){ 
      return a.localeCompare(b); // Esto objeto permite comparar dos string y retorna los siguientes resultado:
                                 // a-b=-1 entonces a esta antes; a-b=0 son iguales; a-b=1 b esta antes
   }).join("");

   for(var i=0; i<caracterOrdenado.length; i++)
   {
      if(caracterOrdenado[i] in obj)
      {
         obj[caracterOrdenado[i]]++
      } else {
         obj[caracterOrdenado[i]]=1
      }
   }
   return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var resultado="";
   var min="";
   var may="";

   for (var i=0; i<string.length; i++)
   {
      if(string[i]===string[i].toUpperCase())   //Aca se realiza la pregunta si la letra que comparo es igual 
                                                //a la letra convertida en mayuscula
      {
         may+=string[i]
      } else
      {
         min+=string[i]
      }
   }
   resultado=may+min
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabra=frase.split(" "); //Divido la frase en array, asi cada posicion tiene un palabra
   var aux=[];
   var palabraInvertida=[];
   var frasePalabraInvertida="";

   for (var i=0; i<palabra.length; i++)
   {
      aux=palabra[i].split("").reverse().join(""); //en cada posicion lo primero que hago es convertilo en 
                                                   //array con la funcion split(""), invierto el nuevo en 
                                                   //array con la funcion reverse() y vuelvo a convertir 
                                                   //el array en string 
      palabraInvertida.push(aux);                  //coloco la variable auxiliar creada en la ultima posicion 
                                                   //de nuevo array
   }
   frasePalabraInvertida=palabraInvertida.join(" ");  //el array lo vuelvo a convertir en string fonrmado 
                                                      //la palabra de la frase al reves
   return frasePalabraInvertida
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var aux = numero.toString().split("").reverse().join(""); // Aca el metodo interesante es el toString(),
                                                             // el cual convierte un numero en un string
   if(numero == aux) return "Es capicua"; // Se puede comparar numero con string(esto tienen que ser numero si o si)
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replaceAll(/[abc]/g,"");
   /* Sintasis: replaceAll(pattern, replacement) //=> pattern [caracteres](es la expresion para la busqueda 
      de una clase de caracteres especifico; en este ejercicio la busqueda se basa en la tres letras 
      solicitada. Nota: tiene que esta en orden.) / g(esto implica que es una busqueda global). 
      //=> replacement tiene como funciona lo que vamos a reemplazar, por ejemplo en este ejercicio se solicitaba 
      eliminar los caracteres buscado y en su lugar para eliminarlo se coloca comillas y sin espacio (""), entonces
      para entender un poco mejor el codigo, en este caso se buscar en todo el string las letras a,b,c (son los 
      caracteres especificos de la busqueda), ahora si encuentro una de las letras buscada la reemplazo por 
      ""(expresion de eliminacion de letra)
   */
}
 
function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var aux = "";
   for(var i=0; i<arrayOfStrings.length; i++)
   {
      for (var j=i+1; j<arrayOfStrings.length; j++)
      {
         if(arrayOfStrings[i].length > arrayOfStrings[j].length)
         {
            aux = arrayOfStrings[i];
            arrayOfStrings[i]=arrayOfStrings[j];
            arrayOfStrings[j]=aux;
         }
      }
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayNuevo=[];
   for (var i=0; i<array1.length; i++)
   {
      for (var j=0; j<array2.length; j++)
      {
         if (array1[i] == array2[j])
         {
            arrayNuevo.push(array1[i]);
            break;
         }
      }
   }
   return arrayNuevo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
