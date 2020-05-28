import BudgetGame from '../models/BudgetGame';
import BudgetGameLinks from '../models/BudgetGameLinks';
import BudgetGameLinksOptions from '../models/BudgetGameLinksOptions';

class BudgetGameController {
    async index(req, res) {
        const budgetGame = await BudgetGame.findAll({
            limit: 1,
            include: [{
                model: BudgetGameLinks,
                as: 'screens',
                include: [{
                    model: BudgetGameLinksOptions,
                    as: 'options'
                }]
            }]
        });

        return res.json(budgetGame[0]);
    }
}

export default new BudgetGameController();