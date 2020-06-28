import Sequelize, {Model} from 'sequelize';

class BingoGameInfos extends Model {
    static init(sequelize) {
        super.init({
            state: Sequelize.STRING,
            medicare_tax_rate: Sequelize.STRING,
            local_tax_rate: Sequelize.STRING,
            social_security_rate: Sequelize.STRING,
        },
        {
            sequelize
        });

        return this;
    }
}

export default BingoGameInfos;