import Sequelize, {Model} from 'sequelize';

class StocksGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            money: Sequelize.INTEGER
        },
        {
            sequelize,
            tableName: 'stocks_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.StocksGameStocks, {foreignKey: 'game_id', as: 'game_stocks'});
    }
}

export default StocksGame;