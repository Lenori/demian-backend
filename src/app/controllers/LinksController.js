import Links from '../models/Links';
import msg from '../../msgs';

import * as Yup from 'yup';

class LinksController {
    async index(req, res) {
        const links = await Links.findAll({order: ['id']});
        return res
            .status(200)
            .json(links)
    }

    async read(req, res) {
        const linkExists = await Links.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!linkExists) {
            return res
                .status(400)
                .json({error: msg.links.read.error.err_link_not_exists});
        }

        const link = await Links.findByPk(req.params.id)
        return res
            .status(200)
            .json(link)
    }

    async update(req, res) {
        console.log(req.body);
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            link: Yup.string().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({error: msg.links.update.error.err_request_format_invalid});
        }

        const {id, link} = req.body;

        const entry = await Links.findByPk(id);

        if (!entry) {
            return res
                .status(400)
                .json({error: msg.links.update.error.err_link_not_exists});
        }

        await entry.update({link: link});

        return res
            .status(200)
            .json({success: msg.links.update.success})
    }
}

export default new LinksController();