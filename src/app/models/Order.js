import Sequelize, {Model} from 'sequelize';

class Order extends Model {
    static init(sequelize) {
        super.init({
            user_id: Sequelize.INTEGER,
            plan_type: Sequelize.INTEGER,
            plan_id: Sequelize.INTEGER,
            payment_method: Sequelize.STRING,
            payment_id: Sequelize.STRING,
            price: Sequelize.INTEGER,
            order_id: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'orders'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'userID', as: 'user'});
    }
}

export default Order;