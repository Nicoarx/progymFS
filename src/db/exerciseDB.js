import { error } from 'console';
import sql from './postgreDB.js'

const getRutinas = (async () => {
    try {
        const result = await sql`
        select * from getRutinas()
        `;
        console.log(result)
        return result
    } catch (error) {
        throw error;
    }
});


const getRutinas2 = (async (idEntrenador) => {
    let result = {}
    try {
        let tabla = await sql`
        select * from getCLientes(${idEntrenador})
        `;
        result["clientes"] = tabla
        tabla = await sql`
        select * from "Rutina" where "Rutina".id_entrenador = ${idEntrenador}
        `;
        result["rutinas"] = tabla
        tabla = await sql`
        select * from getEntrenamientos(${idEntrenador})
        `;
        result["entrenamientos"] = tabla
        tabla = await sql`
        select * from "Entrenamiento-Ejercicio"
        `;
        result["entrenamiento-ejercicio"] = tabla
        tabla = await sql`
        select * from "Rutina-Entrenamiento"
        `;
        result["rutina-entrenamiento"] = tabla
        tabla = await sql`
        select * from getEjercicios(${idEntrenador})
        `;
        result["ejercicios"] = tabla
        tabla = await sql`
        select "Ejercicios"."Nombre", "Clasificacion".nombre as descripcion from "Ejercicios"
        join "Clasificacion" on "Clasificacion".id = "Ejercicios".id_clasificacion
        `;
        result["listaEjercicios"] = tabla
        /*
        tabla = await sql`
        select * from "Clasificacion"
        `;
        result["clasificaciones"] = tabla
        */
        return result
    } catch (error) { 
        throw error;
    }
});

const getExercisesByClasifier = ( (clasifier) =>{
    const idx = ejercicios.findIndex(x => x.Clasificacion === clasifier);
    if (idx == -1)
        return 'No existe la clasificacion'
    console.log(ejercicios[idx])
    return ejercicios[idx];
});


const modificarJson = ((nuevo) =>{
    fs.writeFile('./jsons/ejercicios.json',JSON.stringify(nuevo,null,2),'utf-8',(err) => {
        if (err) {
          console.error('Error al escribir el archivo:', err);
          return;
        }
        console.log('Archivo actualizado con éxito');
      });
})


export default {
    getRutinas,
    getRutinas2,
    getExercisesByClasifier
};