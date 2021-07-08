const boton=document.querySelector(".boton");
boton.addEventListener("click",saludar); 
function saludar(){
  console.log("Hola")
  boton.removeEventListener("click",saludar); //Remueve el evento
}

boton.addEventListener("click",(e)=>{
  console.log(e.target.innerHTML) //Propieda del evento(e)
  e.stopPropagation(); //Detiene el evento y evita que se ejecute el resto de eventos del flujo
});

//MouseEvents

boton.addEventListener("dblclick",(e)=>{
  console.log("Hicistes doble click");
});

//KeyEvents
const teclado=document.querySelector(".teclado");
 //Solo puedo escribir numeros
teclado.addEventListener("keypress",(e)=>{
  if(e.keyCode<48 || e.keyCode>57){ 
    e.preventDefault();
    console.log("Solo puedes escribir numeros");
  }
});

//InterfaceEvents: error,load,unload,resize,scroll
const img=document.querySelector(".img");
window.addEventListener("load",()=>{
  console.log("Sitio cargado correctamente");
});

//Timers: setTimeOuts, setInterval

setTimeout(()=>{
  console.log("Hola");
},2000);
setInterval(()=>{
  console.log("Cada 4 segundos");
},4000);