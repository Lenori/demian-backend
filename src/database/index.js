import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

import BudgetGame from '../app/models/BudgetGame';
import BudgetGameLinks from '../app/models/BudgetGameLinks';
import BudgetGameLinksOptions from '../app/models/BudgetGameLinksOptions';

import BudgetGameRoom from '../app/models/BudgetGameRoom';

const models = [User, BudgetGame, BudgetGameLinks, BudgetGameLinksOptions, BudgetGameRoom];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();