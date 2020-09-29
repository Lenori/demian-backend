import Aulas from '../models/Aulas';

class AulasController {
    async index(req, res) {
        const aulas = await Aulas.findAll();
        return res
            .status(200)
            .json(aulas)
    }

    async read(req, res) {
        const aulaExists = await Aulas.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!aulaExists) {
            return res
                .status(400)
                .json({error: msg.aulas.read.error.err_aula_not_exists});
        }

        const aula = await Aulas.findByPk(req.params.id)
        return res
            .status(200)
            .json(aula)
    }
}

export default new AulasController();