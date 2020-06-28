import Sequelize, {Model} from 'sequelize';

class BingoGame extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'bingo_game'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.BingoGameInfos, {foreignKey: 'game_id', as: 'game_info'});
        this.hasMany(models.BingoGameQuestions, {foreignKey: 'game_id', as: 'game_questions'});
    }
}

export default BingoGame;