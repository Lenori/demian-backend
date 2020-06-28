import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class StocksGameRoom extends Model {
    static init(sequelize) {
        super.init({
            game_id: Sequelize.INTEGER,
            teacher_id: Sequelize.INTEGER,
            status: Sequelize.INTEGER,
            pass: Sequelize.VIRTUAL,
            password: Sequelize.STRING
        },
        {
            sequelize
        });

        this.addHook('beforeSave', async (room) => {
            if (room.pass) {
                room.password = await bcrypt.hash(room.pass, 8);
            }
        });

        return this;
    }

    checkPassword(pass) {
        return bcrypt.compare(pass, this.password);
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'teacher_id', as: 'teacher'});
        this.belongsTo(models.StocksGame, {foreignKey: 'game_id', as: 'game'});
    }
}

export default StocksGameRoom;