//Promise
let nombre="pepe"
const promesa=new Promise((resolve, reject)=>{
    if (nombre!="pepe"){
        reject("Error")
    }else{
        resolve("OK")
    }
})

promesa.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
/* Muy util ya que con then muestro
todos los resultados correctos y si la promesa
fue rechazada mostrará el error*/