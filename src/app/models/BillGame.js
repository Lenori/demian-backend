import Sequelize, {Model} from 'sequelize';

class BillGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.TEXT,
            money: Sequelize.INTEGER,
            score: Sequelize.INTEGER
        },
        {
            sequelize,
            tableName: 'bill_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.BillGameBills, {foreignKey: 'game_id', as: 'game_bills'});
    }
}

export default BillGame;