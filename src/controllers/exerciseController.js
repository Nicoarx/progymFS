import exerciseModel from '../models/exerciseModel.js'

const getAll = (async (req, res) => res.send(await exerciseModel.getAll()) );

export default {
    getAll,
};
