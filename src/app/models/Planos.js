import Sequelize, {Model} from 'sequelize';

class Planos extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            price: Sequelize.INTEGER,
            link: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'planosRegulares'
        });

        return this;
    }
}

export default Planos;