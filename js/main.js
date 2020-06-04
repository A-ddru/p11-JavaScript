//=====================Funcion Constructora o Clases======================

//cuandocreamos una funcion constructora java Scrip la asigna automaticamente es por eso que la podemos utilizar aunque no este declarada dentro de esta


/* 
//funcion constructora
var Clase = function(){
//propiedad - agregas un valor

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());

*/


//sirve como prototipo para crear nuevos ejemplos 

//getName - este metodo nos va a servir para mostrar el valor de la propiedad name 
// por cada objeto creado se vuelve a crear name, setName, getName el script va a tener un rendidmeinto lento y poca memoria usar la propiedad prototype
// que va a hacer que cada que instacie el objeto solaentese instancia la clase constructora y no todo lo demas

//propiedad protype nos ayuda a solucionar el problema de rendimiento cuando queramos instanciar varis objetos de una mismo clase o funcion constructora la cual ya contiene todas las propiedades o metodos declarados  
//esta propiedad nos va a permitir añadir propiedades o metodos a una clase o funcion constructora 

//Funcion constructora con prototype
/* 
var clase = function(){


}

  //esta es la primer proiedad declarada
clase.prototype.name = "Paulo";

clase.prototype.setName = function(nombre) {
    //primer metodo declarado 
    this.name = nombre;
}
    //segundo metodo declarado
clase.prototype.getName = function(){
    return this.name;
}


//instanciar objetos 
var objeto1 = new clase();
var objeto2 = new clase();

objeto2.setName("Cesar");

console.log(objeto1.getName());
console.log(objeto2.getName());

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());
*/


//=====================Spread Operator======================
/* 
El operador de propagación spread operator permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
spread operator 
es representado por tres puntos ... y es de ecma script 6 divide un objeto iterable en valores individuales puede
colocarse donde se esperan multiples argumentos en una funcion o multiples elementos como arrays y literales  

Llamadas a funciones:
f(...iterableObj);

Arrays literales:
[...iterableObj, 4, 5, 6]

Desestructuración destructuring:
[a, b, ...iterableObj] = [1, 2, 3, 4, 5];

*/
/* 
=====================Ejemplos================
Un mejor método apply
Ejemplo: Es común usar Function.prototype.apply en casos donde se require un array como contenedor de los argumentos que se enviarán a una llamada de función:

function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);


Con el operador spread de ES6, el ejemplo anterior se puede rescribir como:

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);



Cualquier argumento en la lista de argumentos puede usar la sintaxis de propagación spread, donde además puede ser usada varias veces.

function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);


Un array literal mas poderoso
Ejemplo: La sintaxis de un array literal que existe hoy en día no es suficiente si se requiere agregar los elementos de un array dentro de otro array existente. Actualmente se debe escribir código imperativo usando una combinación de métodos como push, splice, concat, etc. Con la sintaxis de propagación spread esta tarea resulta mucho mas concisa:

var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
Al igual que con una lista de argumentos, en este caso también puede ser usado en cualquier ubicación dentro del array literal, además de poderse incluir una o varias veces.



Combinación del método apply y el operador new
Ejemplo: En ES5 no es posible combinar new y apply (en ES5  el método apply crea un [[Call]] y no un [[Construct]]). En ES6 la sintaxis de propagación spread soporta esto de forma natural:

var dateFields = readDateFields(database);
var d = new Date(...dateFields);



Un método push mejorado
Ejemplo: push suele usarse para agregar los elementos de un array al final de otro array existente. En ES5 esta tarea puede ser realizada de la siguiente manera:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Agregar todos los elementos de arr2 a arr1
Array.prototype.push.apply(arr1, arr2);



Usando el operador de propagación spread de ES6, este sería el resultado:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
Solo funciona para iterables
var obj = {"key1":"value1"};
function myFunction(x) {
    console.log(x); // undefined
}
myFunction(...obj);
var args = [...obj];
console.log(args, args.length) //[] 0

*/
//1 ejemplo de cmo se pasaban valores antes a una funcion desde un array 


//======================destruccturing object============

/* 
La sintaxis de asignación desestructurante (destructuring assignment) es una expresión que posibilita la extracción de datos de arrays, 
o de propiedades de objetos, en variables distintas.



Sintaxis
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Propuesta de etapa 4 (terminada)
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


Descripción
Las expresiones literales de objetos y arrays proporcionan una manera fácil de crear paquetes de datos.

const x = [1, 2, 3, 4, 5];



La asignación desestructurante utiliza una sintaxis similar, pero en el lado izquierdo de la asignación define qué valores desempaquetar de la variable de origen.

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2



Esta capacidad es similar a funcionalidades presentes en otros lenguajes como Perl y Python.

Desestructuración de arreglos
Asignación básica de variables
const foo = ['uno', 'dos', 'tres'];

const [rojo, amarillo, verde] = foo;
console.log(rojo); // "uno"
console.log(amarillo); // "dos"
console.log(verde); // "tres"



Asignación separada de la declaración
A una variable se le puede asignar su valor mediante la desestructuración separada de la declaración de la variable.

let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2



Valores predeterminados
A una variable se le puede asignar un valor predeterminado en caso de que el valor desempaquetado del arreglo sea undefined.

let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7




Intercambio de variables
Se pueden intercambiar los valores de dos variables en una expresión de desestructuración.

Sin una asignación desestructurante, cambiar el orden de dos variables requiere una variable temporal (o, en algunos lenguajes de bajo nivel, el algoritmo XOR-swap).

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]




Múltiples valores de retorno
Si bien siempre ha sido posible devolver un array desde una función, por medio de la desestructuración es posible trabajar con dicho array de forma mucho más concisa.

En este ejemplo, f() devuelve los valores [1, 2] como salida. A través de la desestructuración es posible interpretar dicha salida en una única línea.

function f() {
  return [1, 2];
}

let a, b; 
[a, b] = f();

console.log(a); // 1
console.log(b); // 2




La sentencia [a, b] = f() asigna los resultados de las variables en corchetes en orden. A a se le asigna el valor de 1 y a b se le asigna 2.

También puedes tomar los valores de retorno en un solo arreglo:

let a = f();

console.log(a); // [1, 2]




En este caso, a es un arreglo que contiene los valores 1 y 2.

Ignorando algunos valores de retorno
Puedes ignorar los valores de retorno en los que no estás interesado:

function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3





Puedes ignorar cualquiera de los valores retornados (o incluso todos). Por ejemplo:

[,,] = f();




Asignación del resto de un array a una variable
Al desestructurar un array, puedes desempaquetar y asignar la parte restante a una variable usando el patrón rest:

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]




Tenga en cuenta que se lanzará un SyntaxError si se utiliza una coma final en el lado izquierdo con un elemento de rest:

const [a, ...b,] = [1, 2, 3];

// SyntaxError: el elemento rest puede no tener una coma final
// Considere siempre usar el operador rest como último elemento




Extrayendo valores de una expresión regular
Cuando el método de expresión regular exec() encuentra una coincidencia, devuelve un arreglo que contiene la primera porción de la primera coincidencia entera y luego las porciones de la cadena que coinciden con cada grupo entre paréntesis en la expresión regular. Las asignaciones destructurantes te permiten extraer facilmente las partes de este arreglo, ignorando la coincidencia entera si no es necesaria.

const url = "https://developer.mozilla.org/en-US/Web/JavaScript";

const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
const [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // https:
Desestructuración de objetos
Asignación básica
const o = {p: 42, q: true};
const {p, q} = o;

console.log(p); // 42
console.log(q); // true




Asignación sin declaración
Se puede hacer una asignación desestructurante sin declaración en la sentencia de asignación.

let a, b;

({a, b} = {a: 1, b: 2});
Los paréntesis (...) alrededor de la sentencia de asignación son obligatorios cuando se usa asignación object literal destructuring (asignación desestructurante literal de objetos) sin una declaración.

{a, b} = {a: 1, b: 2} no es una sintaxis válida, ya que {a, b} en el lado izquierdo se considera un bloque y no un objeto literal.

Sin embargo, ({a, b} = {a: 1, b: 2}) es válido, al igual que const {a, b} = {a: 1, b: 2} .

La expresión (...) debe continuar con un punto y coma o puede usarse para ejecutar una función en la línea anterior.






Asignación a nuevos nombres de variables
Se puede desempaquetar una propiedad de un objeto y asignarla a una variable con un nombre diferente al de la propiedad del objeto.

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true
Aquí, por ejemplo, const {p: foo} = o toma del objeto o la propiedad llamada p y la asigna a una variable local llamada foo.






Valores predeterminados
A una variable se le puede asignar un valor predeterminado en el caso de que el valor desempaquetado del objeto sea undefined.

const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
Argumentos por defecto en funciones
Version de ES5
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});





Version de ES2015 
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});




En Firefox, todavía no se implementan los valores por defecto en asignaciones desestructurantes: var { x = 3 } = {} and var [foo = "bar"] = []. Revisa error 932080 para valores por defecto en destructuraciones en el caso de funciones.





Carga de módulos (no-ES2015)
La desestructuración puede ser útil para cargar subconjuntos específicos de módulos no-ES2015, como aquí en Add-on SDK:

const { Loader, main } = require('toolkit/loader');




Objetos anidados y desestructuración de arrays
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"




Iteraciones "for...of" y desestructuración
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"





Obteniendo campos de objetos pasados como parámetros de función
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
Esto obtiene los campos id, displayName and firstName del objeto usuario e imprime los valores.





Computed object property names and destructuring
Computed property names, like on object literals, can be used with destructuring.

let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
*/