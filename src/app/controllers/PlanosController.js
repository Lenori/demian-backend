import Planos from '../models/Planos';

class PlanosController {
    async read(req, res) {
        const planos = await Planos.findAll();
        return res
            .status(200)
            .json(planos)
    }
}

export default new PlanosController();