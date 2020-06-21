import BillGame from '../models/BillGame';
import BillGameBills from '../models/BillGameBills';

class BillGameController {
    async index(req, res) {
        const sunkGame = await BillGame.findAll({
            limit: 1,
            include: [{
                model: BillGameBills,
                as: 'game_bills'
            }]
        });

        return res.json(sunkGame[0]);
    }
}

export default new BillGameController();