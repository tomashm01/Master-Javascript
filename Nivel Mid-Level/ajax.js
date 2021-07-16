let peticion
if(window.XMLHttpRequest) {
     peticion=new XMLHttpRequest();
}else{
    peticion =new ActiveXObject("Microsoft.XMLHTTP");//cubierto para internet explorer
}
//GET
peticion.onreadystatechange = function() {
    if (peticion.readyState == 4 && peticion.status == 200 ) {
        console.log(peticion.response)
}
}
peticion.open("GET","informacion.txt");
peticion.send();

//POST
peticion.addEventListener = ("load",() => { 
    if (peticion.readyState == 4 && peticion.status == 201 ) {
        console.log(JSON.parse(peticion.response))
    }
})
peticion.open("POST","https://reqres.in/api/users");
peticion.setRequestHeader("Content-type","application/json;charset=UTF8")
peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));

