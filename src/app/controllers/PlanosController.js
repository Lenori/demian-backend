import Planos from '../models/Planos';
import msg from '../../msgs';

import * as Yup from 'yup';

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

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string().required(),
            price: Yup.number().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({error: msg.planos.update.error.err_request_format_invalid});
        }

        const {id, name, price} = req.body;

        const entry = await Planos.findByPk(id);

        if (!entry) {
            return res
                .status(400)
                .json({error: msg.planos.update.error.err_plano_not_exists});
        }

        await entry.update({
            name: name,
            price: price
        });

        return res
            .status(200)
            .json({success: msg.planos.update.success})
    }
}

export default new PlanosController();