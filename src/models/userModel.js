import { error } from 'console';
import db from '../db/userDB.js';
import data from './exerciseModel.js'

const login = (async (user) => {
    const [userFinded] = await db.login(user.email)
    if (!userFinded)
        throw"No se encontro el usuario"
    if (user.pass != userFinded.password)
        throw "Contraseña incorrecta";
    return userFinded // Retorna usuario
    //return await data.getAll(user.id) // retorna rutinas,ejercicios etc...
})

const signUp = (async (user) => {
    if (!user.email || !user.pass)
        return 'Email y contraseña necesarios'
    try {
        await db.createUser(user)
        return 'Usuario creado'
    } catch (error) {
        return error        
    }
});

const updatePassword = (async (user) =>{
    return await db.updatePassword(user)
});

const deleteUser = ((user) => {
    console.log(user)
    return bdJson.deleteUser(user)
});

export default {
    login, 
    signUp,
    updatePassword,
    deleteUser
};

