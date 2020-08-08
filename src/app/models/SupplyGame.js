import Sequelize, {Model} from 'sequelize';

class SupplyGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.TEXT
        },
        {
            sequelize,
            tableName: 'supply_game'
        });

        return this;
    }
}

export default SupplyGame;