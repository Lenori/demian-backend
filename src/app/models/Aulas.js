import Sequelize, {Model} from 'sequelize';

class Aulas extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            price: Sequelize.INTEGER
        },
        {
            sequelize,
            tableName: 'aulasParticulares'
        });

        return this;
    }
}

export default Aulas;