import Sequelize, {Model} from 'sequelize';

class BoardGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            money: Sequelize.INTEGER
        },
        {
            sequelize,
            tableName: 'board_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.BoardGameProperties, {foreignKey: 'game_id', as: 'properties'});
        this.hasMany(models.BoardGameCards, {foreignKey: 'game_id', as: 'cards'});
    }
}

export default BoardGame;