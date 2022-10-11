let materias = {                                    // Array - Objeto
    fisica : [90,6,3,"fisica"],
    matematicas: [84,8,2,"matematicas"],
    logoca: [92,8,4,"logica"],
    quimica: [96,6,3,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,9,2,"programacion"],
    biologia: [75,9,2,"biologia"],
    bacesDeDatos: [98,9,2,"bacesDeDatos"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = () => {                          //Funcion con variable constante
    for (materia in materias){                      // for in esto sirve para recorer el array por indice.
        let promedio = materias[materia][0];
        let asistencias = materias[materia][1];
        let trabajos = materias[materia][2];
        let materiaas = materias[materia][3];
        if(promedio >= 90){
            console.log(`Aprobo la materia de ${materiaas} con un promedio de: ${promedio}, asistencias de: ${asistencias} y un numero de trabajos realizados de: ${trabajos} este semestre<br><br>`);
        } else {
            console.log(`Desaprobo la materia de ${materiaas} con un promedio de: ${promedio}`);
        }
    }
}

aprobo();                                       // llamo a la funcion