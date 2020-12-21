import Texts from '../models/Texts';
import msg from '../../msgs';

import * as Yup from 'yup';

class TextsController {
    async index(req, res) {
        const texts = await Texts.findAll({order: ['id']});
        return res
            .status(200)
            .json(texts)
    }

    async read(req, res) {
        const textExists = await Texts.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!textExists) {
            return res
                .status(400)
                .json({error: msg.texts.read.error.err_text_not_exists});
        }

        const text = await Texts.findByPk(req.params.id)
        return res
            .status(200)
            .json(text)
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            text: Yup.string().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({error: msg.texts.update.error.err_request_format_invalid});
        }

        const {id, text} = req.body;

        const entry = await Texts.findByPk(id);

        if (!entry) {
            return res
                .status(400)
                .json({error: msg.texts.update.error.err_text_not_exists});
        }

        await entry.update({text: text});

        return res
            .status(200)
            .json({success: msg.texts.update.success})
    }
}

export default new TextsController();