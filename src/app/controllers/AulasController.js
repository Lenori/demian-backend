import Aulas from '../models/Aulas';

class AulasController {
    async read(req, res) {
        const aulas = await Aulas.findAll();
        return res
            .status(200)
            .json(aulas)
    }
}

export default new AulasController();