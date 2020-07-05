import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

import BudgetGame from '../app/models/BudgetGame';
import BudgetGameLinks from '../app/models/BudgetGameLinks';
import BudgetGameLinksOptions from '../app/models/BudgetGameLinksOptions';
import BudgetGameRoom from '../app/models/BudgetGameRoom';

import SupplyGame from '../app/models/SupplyGame';
import SupplyGameRoom from '../app/models/SupplyGameRoom';

import SunkGame from '../app/models/SunkGame';
import SunkGameStocks from '../app/models/SunkGameStocks';
import SunkGameRoom from '../app/models/SunkGameRoom';

import BillGame from '../app/models/BillGame';
import BillGameBills from '../app/models/BillGameBills';
import BillGameRoom from '../app/models/BillGameRoom';

import BingoGame from '../app/models/BingoGame';
import BingoGameInfos from '../app/models/BingoGameInfos';
import BingoGameQuestions from '../app/models/BingoGameQuestions';
import BingoGameRoom from '../app/models/BingoGameRoom';

import StocksGame from '../app/models/StocksGame';
import StocksGameStocks from '../app/models/StocksGameStocks';
import StocksGameRoom from '../app/models/StocksGameRoom';

import BoardGame from '../app/models/BoardGame';
import BoardGameProperties from '../app/models/BoardGameProperties';
import BoardGameCards from '../app/models/BoardGameCards';
import BoardGameRoom from '../app/models/BoardGameRoom';

const models = [
    User,
    
    BudgetGame,
    BudgetGameLinks,
    BudgetGameLinksOptions,
    BudgetGameRoom,
    
    SupplyGame,
    SupplyGameRoom,

    SunkGame,
    SunkGameStocks,
    SunkGameRoom,

    BillGame,
    BillGameBills,
    BillGameRoom,

    BingoGame,
    BingoGameInfos,
    BingoGameQuestions,
    BingoGameRoom,

    StocksGame,
    StocksGameStocks,
    StocksGameRoom,

    BoardGame,
    BoardGameProperties,
    BoardGameCards,
    BoardGameRoom
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