import Sequelize, {Model} from 'sequelize';

class SupplyGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'supply_game'
        });

        return this;
    }
}

export default SupplyGame;