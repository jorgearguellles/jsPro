# jsPro

## 1. Repaso de Conceptos Fundamentales

#### Cómo llega un script al navegador
El **DOM** es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento **DOMContentLoaded** lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

##### Formas de poner código JS en el documento HTML

1. Scripts embebidos
![Script embebido](./screenshots/scriptEmbebido.png)
2. Scripts externos Sincronos
![Script embebido](./screenshots/scriptExternos.png)
3. Scripts externos Asincronos
Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:
    - **async:** Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
    ![Script embebido](./screenshots/async.png)
    ![Script embebido](./screenshots/ordenDeEjecuciónAsync.png)
    - **defer:** La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.
Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.
![Script embebido](./screenshots/defer.png)

#### Scope
- **¿Qué es el Scope?**
El Scope es el alcanse que tienen las variables en donde están disponibles.
El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

- **Global Scope**
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

- **Function Scope**
Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

- **Block Scope**
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

- **Module Scope**
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

Partiendo del módelo Cliente-Servidos de la web, JavaScript trabaja con ambitos globales en cada lado:
- En el lado del **Cliente(Frontend)**, el ambito global se trabaja con la palabra reservada **window**
- En el lado del **Servidos(Backend)**, el ambito global se trabaja con la palabra reservada **...**

#### Clousure / Clausuras
**¿Qué son las Clousures?**
- Combinando el poder del Scope con funciones creamos algo que se llama _Clousure_
- Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.
- Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.


## 2. Cómo funciona JavaScript
## 3. Fundamentos Intermedios
## 4. Fundamentos Avanzados
## 5. APIs del DOM
## 6. TypeScript
## 7. Patrones de diseño
## 8. Proyecto: MediaPlayer