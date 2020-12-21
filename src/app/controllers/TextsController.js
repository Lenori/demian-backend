import Texts from '../models/Texts';
import msg from '../../msgs';

class TextsController {
    async index(req, res) {
        const texts = await Texts.findAll();
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
}

export default new TextsController();