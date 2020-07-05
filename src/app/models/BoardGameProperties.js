import Sequelize, {Model} from 'sequelize';

class BoardGameProperties extends Model {
    static init(sequelize) {
        super.init({
            type: Sequelize.STRING,
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            rent: Sequelize.INTEGER,
            text: Sequelize.STRING
        },
        {
            sequelize
        });

        return this;
    }
}

export default BoardGameProperties;