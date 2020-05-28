import Sequelize, {Model} from 'sequelize';

class BudgetGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            sallary: Sequelize.INTEGER,
            tax: Sequelize.INTEGER,
            loan: Sequelize.INTEGER
        },
        {
            sequelize,
            tableName: 'budget_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.BudgetGameLinks, {foreignKey: 'game_id', as: 'screens'});
    }
}

export default BudgetGame;