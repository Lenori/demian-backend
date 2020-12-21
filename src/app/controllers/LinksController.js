import Links from '../models/Links';
import msg from '../../msgs';

class LinksController {
    async index(req, res) {
        const links = await Links.findAll();
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
}

export default new LinksController();