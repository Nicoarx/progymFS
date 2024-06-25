import { z } from 'zod'

const userSchema = z.object({
    //email: z.string(),
    email: z.string().email(),
    pass: z.string(),
    nombre: z.string().optional().nullable()
})

// Utiliza el 'userSchema' para comparar el user que entra y validar los datos
// Retora un result que indica si hay un error o no
const validarUsuario = ((user) => userSchema.safeParse(user));

export default{
    validarUsuario
}