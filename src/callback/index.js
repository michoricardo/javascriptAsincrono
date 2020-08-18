function suma (numero1,numero2){
    return numero1 + numero2;
}

function calcular (numero1,numero2,callback){
    return callback(numero1,numero2);
}

console.log(calcular(30139,20023,suma));

function date(callback){
    console.log(new Date);
    setTimeout(function()
    {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

function holas(callback){
    console.log("hola");
    setTimeout(function(){
        console.log("ejecutando lo de adentro del callback")
    },4000)
}

function saludar(saluditos){
    console.log("sauditos de la funcion saludar")
}
holas(saludar);

function ejecutor(callback)
{
    console.log('ejecutando la funcion ejecutora')

}

function ejecutada(){
    return "Texto de la funcion ejecutada";
}

console.log(ejecutor(ejecutada));