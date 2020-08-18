function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
   console.log(sentence)
}

useCallback(callback)

function oscarin(callback)
{
    tomar('Oscarin va a glup glup glup')
    tomar('en mi cumple :) ')
}

function tomar(texto)
{
    console.log(texto)
}

oscarin(tomar)

function calculate(callback)
{
    sum(1,3)
}

function sum(num1, num2)
{
    res=num1+num2
    console.log(`El resultado es ${res}`)
}
calculate(sum)