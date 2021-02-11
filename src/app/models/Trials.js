import Sequelize, {Model} from 'sequelize';

class Trials extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            phone: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'trialForm'
        });

        return this;
    }
}

export default Trials;