let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//no se usa fetch porque se utiliza con promesas

function fetchData (url, callback){
 let xhttp = new XMLHttpRequest();
 xhttp.open('GET',url_api,true); //tipo de peticion, url y el true significa activar o no el asincronismo
 xhttp.onreadystatechange = function(event){
    if(xhttp.readyState ===4) //se tienen estados del 0 al 4. El 4 significa que la conexion se hizo bien
    {
        if(xhttp.status === 200) //significa que todo esta bien. Que no hubo fallas de encontrar algo en el servidor por ejemplo
        {
            callback(null,JSON.parse(xhttp.responseText)); //paso la respuesta como json porque sino no podre acceder a su contenido
            //como convencion: se pasa primero el error, luego el resultado
        }
        else{
            const error = new Error ('Error' + url_api); //creo una constante que se llama error y que manda el mensaje error mas la url de la api que tuvo el error
            //regreso el error y luego el resultado

            return callback (error, null) //regreso el callback con el error
        }
    }
 }
 xhttp.send()
}