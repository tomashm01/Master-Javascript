//Async/await

const obtenerTexto= (text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text);
        }, 1000);
    });
}

const mostrarData=async()=>{
    const texto=await obtenerTexto("Hola mundo");
    const texto2=await obtenerTexto("Hello world");
    const texto3=await obtenerTexto("Bye world");
    console.log(texto);
    console.log(texto2);
    console.log(texto3);
}
mostrarData();