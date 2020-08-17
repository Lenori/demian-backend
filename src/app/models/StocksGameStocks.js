import Sequelize, {Model} from 'sequelize';

class StocksGameStocks extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            code: Sequelize.STRING,
            price: Sequelize.DECIMAL(9,2),
            rate: Sequelize.DECIMAL(9,2)
        },
        {
            sequelize
        });

        return this;
    }
}

export default StocksGameStocks;