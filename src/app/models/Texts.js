import Sequelize, {Model} from 'sequelize';

class Texts extends Model {
    static init(sequelize) {
        super.init({
            slug: Sequelize.TEXT,
            text: Sequelize.TEXT
        },
        {
            sequelize,
            tableName: 'texts'
        });

        return this;
    }
}

export default Texts;