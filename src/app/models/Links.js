import Sequelize, {Model} from 'sequelize';

class Links extends Model {
    static init(sequelize) {
        super.init({
            slug: Sequelize.TEXT,
            link: Sequelize.TEXT
        },
        {
            sequelize,
            tableName: 'links'
        });

        return this;
    }
}

export default Links;