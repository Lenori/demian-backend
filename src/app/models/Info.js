import Sequelize, {Model} from 'sequelize';

class Info extends Model {
    static init(sequelize) {
        super.init({
            user: Sequelize.INTEGER,
            already_practice: Sequelize.STRING,
            other_sport: Sequelize.STRING,
            hobbies: Sequelize.STRING,
            opinion: Sequelize.STRING,
        },
        {
            sequelize,
            tableName: 'info'
        });

        return this;
    }
}

export default Info;