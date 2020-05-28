import fs from 'fs';
import pdf from'html-pdf';
import {resolve} from 'path';

const gamePdf = resolve(__dirname, '..', '..', '..', 'public', 'pdf', 'results', 'budget-game')

class BudgetGameResultsController {
    async create(req, res) {
        const html = fs.readFileSync(`${gamePdf}/default.html`, 'utf8');
        const options = { format: 'Letter' };

        pdf.create(html, options).toFile(`${gamePdf}/businesscard.pdf`, function(err, response) {
            if (err) {
                return res
                    .status(500)
                    .json({error: err});
            }

            return res
                    .status(500)
                    .json(response);
          });
    }
}

export default new BudgetGameResultsController();