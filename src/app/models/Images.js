import Sequelize, {Model} from 'sequelize';

class Images extends Model {
    static init(sequelize) {
        super.init({
            slug: Sequelize.STRING,
            url: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'images'
        });

        return this;
    }
}

export default Images;