/*
Tipos de nodos:
-Document
-Element
-Text
-Attribute
-Comentarios y demás
*/

//Metodos de document(Seleccion de elementos)
nombre=document.getElementById("parrafo") //Devuelve el nodo entero por id
console.log(nombre)
nombre=document.getElementsByTagName("p") //Devuelve una lista de elementos 
console.log(nombre)
nombre=document.querySelector("#parrafo") //Devuelve por clases o id
console.log(nombre)
nombre=document.querySelector(".parrafo")
console.log(nombre)

//Metodos para definir,obtener y eliminar valores de atributos
const rango=document.getElementById("rango")
rango.removeAttribute("type")
rango.setAttribute("type","range")
console.log(rango.getAttribute("type"))

//Crear elementos
let contenedor=document.querySelector(".contenedor")
const item=document.createElement("LI") //elementos en mayuscula siempre
const textoItem=document.createTextNode("Item de la lista") 
item.appendChild(textoItem) //Convierte el objeto, es como un getter por decirlo de una forma y lo añade
contenedor.appendChild(item) //Aqui añade como su hijo 
console.log(item)

//Obtencion y modificacion de hijos
contenedor=document.querySelector(".contenedor")
const primerHijo=contenedor.firstElementChild //Devuelve el primer hijo, tambien existe lastElementChild
console.log(primerHijo)
const nodos=contenedor.childNodes //Devulve toda la lista de nodos
console.log(nodos)
const hijos=contenedor.children //Devulve toda la lista de hijos elementos
console.log(hijos)
for(hijo in hijos){
  console.log(hijo)
}



