import Images from '../models/Images';
import msg from '../../msgs';

class ImagesController {
    async index(req, res) {
        const images = await Images.findAll();
        return res
            .status(200)
            .json(images)
    }

    async read(req, res) {
        const imageExists = await Images.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!imageExists) {
            return res
                .status(400)
                .json({error: msg.images.read.error.err_image_not_exists});
        }

        const image = await Images.findByPk(req.params.id)
        return res
            .status(200)
            .json(image)
    }
}

export default new ImagesController();