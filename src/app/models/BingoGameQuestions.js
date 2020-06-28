import Sequelize, {Model} from 'sequelize';

class BingoGameQuestions extends Model {
    static init(sequelize) {
        super.init({
            state: Sequelize.STRING,
            value: Sequelize.STRING,
            question: Sequelize.STRING,
            answer: Sequelize.STRING,
        },
        {
            sequelize
        });

        return this;
    }
}

export default BingoGameQuestions;