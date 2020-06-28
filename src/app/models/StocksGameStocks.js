import Sequelize, {Model} from 'sequelize';

class StocksGameStocks extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            code: Sequelize.STRING
        },
        {
            sequelize
        });

        return this;
    }
}

export default StocksGameStocks;