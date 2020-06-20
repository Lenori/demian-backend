import Sequelize, {Model} from 'sequelize';

class SunkGameStocks extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            buy_on_start: Sequelize.BOOLEAN,
            start_value: Sequelize.DECIMAL(9,2),
            round_1: Sequelize.DECIMAL(9,2),
            round_2: Sequelize.DECIMAL(9,2),
            round_3: Sequelize.DECIMAL(9,2),
            round_4: Sequelize.DECIMAL(9,2),
            round_5: Sequelize.DECIMAL(9,2),
        },
        {
            sequelize
        });

        return this;
    }
}

export default SunkGameStocks;