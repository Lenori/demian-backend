import Sequelize, {Model} from 'sequelize';

class SunkGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            stocks: Sequelize.INTEGER,
            description: Sequelize.TEXT
        },
        {
            sequelize,
            tableName: 'sunk_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.SunkGameStocks, {foreignKey: 'game_id', as: 'game_stocks'});
    }
}

export default SunkGame;