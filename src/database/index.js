import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Planos from '../app/models/Planos';
import Aulas from '../app/models/Aulas';
import Order from '../app/models/Order';
import Info from '../app/models/Info';

const models = [
    User,
    Planos,
    Aulas,
    Order,
    Info
];

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