import Planos from '../models/Planos';
import msg from '../../msgs';

class PlanosController {
    async index(req, res) {
        const planos = await Planos.findAll({order: ['id']});
        return res
            .status(200)
            .json(planos)
    }

    async read(req, res) {
        const planoExists = await Planos.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!planoExists) {
            return res
                .status(400)
                .json({error: msg.planos.read.error.err_plano_not_exists});
        }

        const plano = await Planos.findByPk(req.params.id)
        return res
            .status(200)
            .json(plano)
    }
}

export default new PlanosController();