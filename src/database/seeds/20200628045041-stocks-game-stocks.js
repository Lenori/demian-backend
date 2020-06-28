'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from stocks_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('stocks_game_stocks', [
        {
          game_id: gameRows[0].id,
          name: 'Microsoft Corp.',
          code: 'MSFT',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Apple Inc.',
          code: 'AAPL',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amazon.com Inc.',
          code: 'AMZN',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Facebook Inc.',
          code: 'FB',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Alphabet Inc.',
          code: 'GOOGL',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Johnson & Johnson',
          code: 'JNJ',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Visa Inc.',
          code: 'V',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'JPMorgan Chase & Co.',
          code: 'JPM',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Procter & Gamble Company',
          code: 'PG',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'United Health Group Inc.',
          code: 'UNH',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'MasterCard Inc.',
          code: 'MA',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Home Depot Inc.',
          code: 'HD',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Intel Corp.',
          code: 'INTC',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NVIDIA Corp.',
          code: 'NVDA',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Verizon Communications Inc.',
          code: 'VZ',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AT&T Inc.',
          code: 'T',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Adobe Inc.',
          code: 'ADBE',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walt Disney Company',
          code: 'DIS',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Netflix Inc.',
          code: 'NFLX',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PayPal Holdings Inc.',
          code: 'PYPL',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Exxon Mobil Corp.',
          code: 'XOM',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Merck & Co. Inc.',
          code: 'MRK',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bank of America Corp.',
          code: 'BAC',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Cisco Systems Inc.',
          code: 'CSCO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PepsiCo Inc.',
          code: 'PEP',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Pfizer Inc.',
          code: 'PFE',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Comcast Corp.',
          code: 'CMCSA',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Coca-Cola Company',
          code: 'KO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AbbVie Inc.',
          code: 'ABBV',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walmart Inc.',
          code: 'WMT',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Chevron Corp.',
          code: 'CVX',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'salesforce.com Inc.',
          code: 'CRM',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Abbott Laboratories',
          code: 'ABT',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Thermo Fisher Scientific Inc.',
          code: 'TMO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'McDonald´s Corp.',
          code: 'MCD',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amgen Inc.',
          code: 'AMGN',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Eli Lilly and Company',
          code: 'LLY',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Costco Wholesale Corp.',
          code: 'COST',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Accenture Plc',
          code: 'ACN',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bristol-Myers Squibb',
          code: 'BMY',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NIKE Inc.',
          code: 'NKE',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Medtronic Plc',
          code: 'MDT',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Broadcom Inc.',
          code: 'AVGO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NextEra Energy Inc.',
          code: 'NEE',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'American Tower Corp.',
          code: 'AMT',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Texas Instruments Inc.',
          code: 'TXN',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Union Pacific Corp.',
          code: 'UNP',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oracle Corp.',
          code: 'ORCL',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('stocks_game_stocks', null, {});
  }
};
