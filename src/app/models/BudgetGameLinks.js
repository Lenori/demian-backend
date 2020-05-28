import Sequelize, {Model} from 'sequelize';

class BudgetGameLinks extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            multiple: Sequelize.BOOLEAN
        },
        {
            sequelize
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.BudgetGameLinksOptions, {foreignKey: 'link_id', as: 'options'});
    }
}

export default BudgetGameLinks;