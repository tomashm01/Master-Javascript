/*Libreria que hay que instalar: npm install axios
Pegar <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
en el html
*/
//El 2º parametro es la configuracion en get
axios.get("https://reqres.in/api/users")
.then(res=>console.log(res))

//Enviar data que queremos es el 2º parametro en post
axios.post("https://reqres.in/api/users",{
    "Prueba de envio que tiene que devolver" : "Hola"
})
.then(res=>console.log(res))

//async y await con axios

const getName=async()=>{
    let peticion=await fetch("informacion.txt")
    let resultado=await peticion.json()
    console.log(resultado)
}
getName()