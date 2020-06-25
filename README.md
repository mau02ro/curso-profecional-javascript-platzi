# CURSO PROFESIONAL DE JAVASCRIPT

## Cómo llega un script al navegador:

El **DOM **es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

#### Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:

- async:
  Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
- defer:
  La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga
se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el
documento esté disponible.

## Scope

El scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro codigo pueden ser usadas.

- Global scope:
  Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la pagina.Aqui hay ucho riesgo de sobreescritura.
- Function scope:
  variables declaradas dentro de una funcion solo visible dentro de ella misma (incluyendo los agumentos de la funcion).
- Block scope:
  varibles definidas dentro de un bloque, por ejemplo varibles declaradas dentro un loop while o for.se utiliza let y const para declarar este tipo de variables.
- Module Scope:
  cuando se denota un script de un tipo module con el atributo type='mosule' las variables son limitadas al archivo en el que estan declaradas.

## Closures

Son funciones que regresan una funcion o un objeto con funciones que mantienen las variables que fueron declaradas fuera del scope.

Los Closures nos sirven para tener algo parecido a variables privadas, caracteristica que no tiene JavaScript por default.Es decir ancpsulan variables que no pueden ser modificadas directamente por otros ojetos, solo por funciones pertenecientes al mismo.

## This

this se refiere a un objeto, ese objeto es el que actualmente esta ejecutando un pedazo de codig.

No se puede asugnar un valos a this directamente y este depende de en que scope nos encontremos.

- Cuando llamamos a this en el Global Scope o Function Scope, s ehace referencia al objeto window, a excepcion de cuando estamos en 'stric mode' que nos regresa undefined.
- Cuando llamamos a this desde una funcion que esta contenida en un objeto, this hace referencia a ese objeto.
- Cuando llamamos a this desde una 'clase', se hace referencia a la instancia generada por el constructor.

## Los metodos call, apply y bind

Estan funciones nos sirven para establecer el valor de this, es decir cambiar el valor que se va a usar cuando la funcion sea llamada.

Las funciones call,apply y bind son parte del prototipo Function. Toda funcion usa este prototipo y por lo Tanto tiene estas tres funciones:

- functionName.call():
  Ejecuta la funcion recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la funcion que llamo call.
- functionName.apply():
  Ejecuta la funcion recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la funcion que llamo a apply.
- functionName.bind():
  Recibe como primer y unico argumento el this.No ejecuta la funcion, solo regresa otra funcioncon el nuevo this integrado.

## Prototype

En JavaScript todo son objetos, no tenemos clases, no tenemos esa plano para crear objetos.

Todos los objetos 'heredan' de un prototype que a su vez hereda de otro prototype y asi sucesivamente creando lo que se llama la prototype chain.

La keyword new crea un nuevo objeto que hereda todas las propiedades del prototipo de otro objeto.No prototype con proto que es sólo una propiedad en cada instancia que apunta al prototipo del que hereda.

## Herencia Prototipal

Por default los objetos en JavaScript tienen como prototipo a Object que es ek punto de partida de todos los objetos, es el prototipo padre.Object es la raiz de todo por lo tanto tiene un protitipo padre undefined.

Cuando se llama a una funcion o variable que no se encuentra en el mismo objeto que la llama, se busca en toda la prototype chain hasta encontrar o regresar undefined.

La funcion hasOwnProperty sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype sy prototype chain.

## Parsers y el Abstract Syntax Tree

https://esprima.org/
https://esprima.org/

El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

El parser descompone y crea tokens que integran el AST.
Se compila a bytecode y se ejecuta.
Lo que se pueda se optimiza a machine code y se reemplaza el código base.
Un SyntaxError es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

### Resumen Parsers y el Abstract Syntax Tree:

- QUE HACE UN PARSER?
  Lee el codigo fuente y lo descompone en tokens, luego se crea el Abstract Syntax Tree.
  Si en este proceso de crear AST ocurre una falla se va a producir un :

```
Syntax Error: es lanzado cuando el motor de Javascript se encuentra con partes de codigo que no forman parte de la sintaxis del lenguaje al momento de analizar el codigo.
```

El proceso de parsing es importante que se haga bien. Google dice que el Parsig es el 15-20% de ejecucion. La mayoria del Javascript en una pagina nunca se ejecuta. Esto hace que bundling y code splitting sea muy importante!

#### Parser de V8(Motor de google chrome)

Eager Parsing:

- Encuentra errores de sintaxis.
- Crea el AST.
- Construye los scopes.

Lazy Parsing:

- Doble de rapido que el eager parser.
- NO creal el AST.
- Construye parcialmente los scopes.

### AST

Es una estructura en forma de arbol. Es un grafo(estructure de datos) que representa un programa:

Se usa en :

- Javascript Engine.
- Bundlers: WebPack, Rollup, Parcel.
- Transpilers = Babel.
- Linters: ESlint, Prettify.
- Syntax Highlighters.
- Type Checkers: Typescript, Flow.

## Reglas eslint

[Regla para eslint](https://astexplorer.net/#/gist/5d46bc0e7e5221a270bbcaf94ca6e71c/0862a9e309eeb454da35eba7b718f5433a801ad6)

##Cómo funciona el JavaScript Engine

Una vez tenemos el AST ahora hay que convertirlo a Bytecode.

Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.

Machine code es el más bajo nivel, es código binario que va directo al procesador.

El profiler se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

- SpiderMonkey - Firefox
- Chackra - Edge
- JavaScriptCore - Safari
- V8 - Chrome

##Event Loop

El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

- Stack:
  Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- Memory Heap:
  De forma desorganizada se guarda información de las variables y del scope.
- Pop:
  Operacion de sacar las funciones del stack
- Schedule Tasks:
  Aquí se agregan a la cola, las tareas programadas para su ejecución.
- Task Queue:
  Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- MicroTask Queue:
  Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.
