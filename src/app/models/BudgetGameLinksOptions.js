import Sequelize, {Model} from 'sequelize';

class BudgetGameLinksOptions extends Model {
    static init(sequelize) {
        super.init({
            link_id: Sequelize.INTEGER,
            name: Sequelize.STRING,
            cost: Sequelize.INTEGER,
            description: Sequelize.STRING,
            warning: Sequelize.STRING,
            allow_frequency: Sequelize.BOOLEAN,
        },
        {
            sequelize
        });

        return this;
    }
}

export default BudgetGameLinksOptions;