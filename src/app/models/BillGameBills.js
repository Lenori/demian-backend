import Sequelize, {Model} from 'sequelize';

class BillGameBills extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            value: Sequelize.INTEGER,
            score_increase: Sequelize.INTEGER,
            score_decrease: Sequelize.INTEGER,
            score_decrease_message: Sequelize.STRING
        },
        {
            sequelize
        });

        return this;
    }
}

export default BillGameBills;