import Sequelize, {Model} from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            birthday: Sequelize.DATEONLY,
            sex: Sequelize.INTEGER,
            rg: Sequelize.STRING,
            cpf: Sequelize.STRING,
            address: Sequelize.STRING,
            number: Sequelize.INTEGER,
            cep: Sequelize.STRING,
            cidade: Sequelize.STRING,
            estado: Sequelize.STRING,
            email: Sequelize.STRING,
            wirecard_id: Sequelize.STRING
        },
        {
            sequelize
        });

        return this;
    }

    static associate(models) {
        this.hasOne(models.Info, {foreignKey: 'user', as: 'userInfo'});
    }
}

export default User;