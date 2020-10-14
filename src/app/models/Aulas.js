import Sequelize, {Model} from 'sequelize';

class Aulas extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            price: Sequelize.INTEGER,
            link: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'aulasParticulares'
        });

        return this;
    }
}

export default Aulas;