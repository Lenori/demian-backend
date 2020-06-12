import SupplyGame from '../models/SupplyGame';

class SupplyGameController {
    async index(req, res) {
        const supplyGame = await SupplyGame.findAll({
            limit: 1
        });

        return res.json(supplyGame[0]);
    }
}

export default new SupplyGameController();