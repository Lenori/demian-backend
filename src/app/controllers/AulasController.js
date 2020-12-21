import Aulas from '../models/Aulas';
import msg from '../../msgs';

import * as Yup from 'yup';

class AulasController {
    async index(req, res) {
        const aulas = await Aulas.findAll({order: ['id']});
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

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string().required(),
            price: Yup.number().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({error: msg.aulas.update.error.err_request_format_invalid});
        }

        const {id, name, price} = req.body;

        const entry = await Aulas.findByPk(id);

        if (!entry) {
            return res
                .status(400)
                .json({error: msg.aulas.update.error.err_aula_not_exists});
        }

        await entry.update({
            name: name,
            price: price
        });

        return res
            .status(200)
            .json({success: msg.aulas.update.success})
    }
}

export default new AulasController();