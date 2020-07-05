import Sequelize, {Model} from 'sequelize';

class BoardGameCards extends Model {
    static init(sequelize) {
        super.init({
            code: Sequelize.INTEGER,
            text: Sequelize.STRING,
        },
        {
            sequelize
        });

        return this;
    }
}

export default BoardGameCards;