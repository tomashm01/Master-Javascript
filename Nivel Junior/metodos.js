//Metodos de registro
console.clear(); //Limpia cadena
console.error("Error") //Muestra mensaje de error
console.info("Informacion") //Muestra mensaje de informacion
console.log("Mensaje normal") //Imprimir mensje de depuracion
console.warn("CUIDAO") //Mensaje de advertencia

//Metodos de conteo
console.count() //Registra numero de veces que llamamos a count()
console.countReset() //Reset del contador de count() 
//Muy utiles para introducir dentro de una funcion y ver cuantas veces las llamamos

//Metodos de agrupacion
console.group() //Agregamos un grupo 
console.groupEnd() //Eliminamos grupo
console.groupCollapsed() //Crea grupo en linea
console.groupEnd()
//Metodos de temporizacion
console.time() //Desde que ejecuta esto, cuenta el tiempo
console.timeEnd() //termina el tiempo contador 
console.timeLog() //Muestra el tiempo
