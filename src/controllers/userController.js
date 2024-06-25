import { Console } from 'console';
import userModel from '../models/userModel.js'
import userSchema from '../schemas/userSchema.js';

const login = (async (req, res) => {
    try {
        const result = await userSchema.validarUsuario(req.body)
        if (!result.success)
            return res.send(result.error)
        return res.send(await userModel.login(req.body));
    } catch (error) {

        res.send(error);
    }
    
});

const signUp = (async (req, res) =>{
    const result = await userSchema.validarUsuario(req.body)
    if (!result.success)
        return res.send(result.error)
    res.send(await userModel.signUp(req.body))
});

const updatePassword = (async (req,res) =>{
    const result = await userSchema.validarUsuario(req.body)
    if (!result.success)
        return res.send(result.error)
    res.send(await userModel.updatePassword(req.body))
});


const deleteUser = (async (req,res) => {
    const result = await userSchema.validarUsuario(req.body)
    if (!result.success)
        return res.send(result.error)
    res.send(userModel.deleteUser(req.body))
});

export default {
    login,
    signUp,
    updatePassword,
    deleteUser
};


