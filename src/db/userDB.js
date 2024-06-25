import sql from './postgreDB.js'

const createUser = (async (user) => {
    try {
        const result = await sql`
        insert into "Usuarios" (email, password, nombre)
        values (${user.email},${user.pass},${user.nombre})
        `
    } catch (error) {
        console.log(error)
        console.log(error.name)
        console.log(error.message)
        throw error
    }
});

const updatePassword = (async (user) =>{
    try {
        await sql`
        update "Usuarios" 
        set password = ${user.pass}
        where email = ${user.email}
        `
        return 'Ok'
    } catch (error) {
        return error
    }
});

const login = async function (email) {
    const user = await sql`
    select * from login(${email})
    `
    return user
}

const deleteUser = ((user) =>{
    return 'Funcion  no disponible aun'
});

export default {
    createUser,
    updatePassword,
    deleteUser,
    login
};