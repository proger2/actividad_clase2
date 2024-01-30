const readlineSync = require('readline-sync');

const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumUsuario = () => {
    return readlineSync.question('Ingrese numero')
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('BIENVENIDOS AL JUEGO ADIVINA EL NÚMERO');
    
    console.log('ESCOGE UN NÚMERO DEL 1 AL 20');

    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = obtenerNumUsuario();

        console.log('tu numero es: ' + numeroAdivinado)

        verificarAdivinanza(numeroSecreto,numeroAdivinado)
    }
};

juegoAdivinanza();