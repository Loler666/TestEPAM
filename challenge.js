
function primeraLetraEnMayuscula(frase) {
    if (typeof frase != 'string'){
        throw TypeError('Passed argument is not a string');
    }

    let palabras = frase.split(' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

try{
    console.log(primeraLetraEnMayuscula('Anita lava la tina'));
}catch(e){
    console.log(`Error: ${e.message}`);
}

try{
    console.log(primeraLetraEnMayuscula('23 es un numero divertido'));
}catch(e){
    console.log(`Error: ${e.message}`);
}

try{
    console.log(primeraLetraEnMayuscula(43));
}catch(e){
    console.log(`Error: ${e.message}`);
}