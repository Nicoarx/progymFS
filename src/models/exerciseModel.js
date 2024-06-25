import db from '../db/exerciseDB.js';

const getAll = (async () => {
    const result = await db.getRutinas2(33);
    
    result["rutinas"].forEach(rutina => {
        rutina["entrenamientos"] = [];
        result["rutina-entrenamiento"].filter(x => x["id_rutina"] === rutina["id"]).forEach( x => {
            rutina["entrenamientos"].push(x["id_entrenamiento"])
        });
    });

    result["entrenamientos"].forEach(entrenamiento => {
        entrenamiento["ejercicios"] = []
        entrenamiento["ejercicios2"] = []
    /*
    ** Esta linea lleva el array de ejercicios dentro de entrenamientos
        entrenamiento["ejercicios2"].push(result["entrenamiento-ejercicio"].filter(ej => ej["id_entrenamiento"] === entrenamiento["id"]))
    */
        result["entrenamiento-ejercicio"].filter(ej => ej["id_entrenamiento"] === entrenamiento["id"])
            .sort((a, b) => a["orden"] - b["orden"])
            .forEach(x => { entrenamiento["ejercicios"].push(x["id"]) });
    });

    //delete result["ejercicios"];
    delete result["rutina-entrenamiento"];
    delete result["entrenamiento-ejercicio"];

    return result
})
/*
const getAll = (async () => {
    const result = await db.getRutinas2(33);
    result["rutina"].forEach(rutina => {
        rutina["entrenamientos"] = []
        result["entrenamientos"].forEach(entrenamiento => {
            entrenamiento["ejercicios"] = []
            if (result["rutina-entrenamiento"].find
                (x => x["id_entrenamiento"] === entrenamiento["id"] &&
                    x["id_rutina"] === rutina["id"]
                )){
                    rutina["entrenamientos"].push(entrenamiento)
                }
                result["ejercicios"].forEach(ejercicio => {
                    if (result["entrenamiento-ejercicio"].find
                        (x => x["id_entrenamiento"] === entrenamiento["id"] &&
                            x["id_ejercicio"] === ejercicio["id"]
                         )){
                            entrenamiento["ejercicios"].push(ejercicio)
                    }
                });
        });
    });
    
    delete result["entrenamiento-ejercicio"];
    delete result["rutina-entrenamiento"];

    return result
})
*/

const getByClasifier = ((clasifier) => bdJson.getExercisesByClasifier(clasifier));

export default {
    getAll,
    getByClasifier    
};