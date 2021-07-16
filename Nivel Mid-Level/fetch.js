//Devuelve siempre una promesa encapulada en texto
fetch("https://reqres.in/api/users")
    .then(response =>response.text())
    .then(res =>console.log(res)) 
//Formato JSON
    fetch("https://reqres.in/api/users")
    .then(response =>response.json())
    .then(res =>console.log(res)) 

    fetch("https://reqres.in/api/users",{
        method:"post",
        body:JSON.stringify({"name":"Juan","lastname":"Perez"}),
        headers:{"Content-Type":"application/json"}
    })
    .then(response =>response.json())
    .then(res =>console.log(res)) 
    //blob->almacena imagen en ruta imaginaria
    fetch("https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg",)
    .then(response =>response.blob())
    .then(img =>console.log(img))
