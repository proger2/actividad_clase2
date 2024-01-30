const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numAleatorio,numUsuario) => {
    if (numUsuario == numAleatorio) {
        console.log('FELICITACIONES HAS ACERTADO EL NUMERO');
    }
    else if (numUsuario > numAleatorio){
        console.log('NO ACERTASTE, EL NÚMERO ES  MENOR, SIGUE INTENDANDO! ');
    }
    else {
        console.log('NO ACERTASTE, EL NÚMERO ES MAYOR, SIGUE INTENTANDO! ')
    }
};

module.exports = {generarNumeroAleatorio,verificarAdivinanza};

