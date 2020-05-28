import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            pass: Sequelize.VIRTUAL,
            password: Sequelize.STRING,
            admin: Sequelize.BOOLEAN
        },
        {
            sequelize
        });

        this.addHook('beforeSave', async (user) => {
            if (user.pass) {
                user.password = await bcrypt.hash(user.pass, 8);
            }
        });

        return this;
    }

    checkPassword(pass) {
        return bcrypt.compare(pass, this.password);
    }
}

export default User;