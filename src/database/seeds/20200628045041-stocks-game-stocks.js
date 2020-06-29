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
          price: 196.33,
          rate: 1.93,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Apple Inc.',
          code: 'AAPL',
          price: 353.63,
          rate: 1.79,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amazon.com Inc.',
          code: 'AMZN',
          price: 2692.87,
          rate: 1.40,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Facebook Inc.',
          code: 'FB',
          price: 216.08,
          rate: 1.12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Alphabet Inc.',
          code: 'GOOGL',
          price: 1362.54,
          rate: 1.26,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Johnson & Johnson',
          code: 'JNJ',
          price: 137.81,
          rate: 0.99,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Visa Inc.',
          code: 'V',
          price: 189.27,
          rate: 1.09,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'JPMorgan Chase & Co.',
          code: 'JPM',
          price: 92.59,
          rate: 0.95,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Procter & Gamble Company',
          code: 'PG',
          price: 115.23,
          rate: 1.04,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'United Health Group Inc.',
          code: 'UNH',
          price: 286.88,
          rate: 1.18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'MasterCard Inc.',
          code: 'MA',
          price: 289.34,
          rate: 1.09,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Home Depot Inc.',
          code: 'HD',
          price: 241.01,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Intel Corp.',
          code: 'INTC',
          price: 57.50,
          rate: 1.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NVIDIA Corp.',
          code: 'NVDA',
          price: 366.20,
          rate: 2.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Verizon Communications Inc.',
          code: 'VZ',
          price: 53.16,
          rate: 0.93,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AT&T Inc.',
          code: 'T',
          price: 29.08,
          rate: 0.87,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Adobe Inc.',
          code: 'ADBE',
          price: 426.92,
          rate: 1.42,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walt Disney Company',
          code: 'DIS',
          price: 109.10,
          rate: 0.78,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Netflix Inc.',
          code: 'NFLX',
          price: 443.40,
          rate: 1.18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PayPal Holdings Inc.',
          code: 'PYPL',
          price: 170.87,
          rate: 1.49,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Exxon Mobil Corp.',
          code: 'XOM',
          price: 43.62,
          rate: 0.57,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Merck & Co. Inc.',
          code: 'MRK',
          price: 75.19,
          rate: 0.89,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bank of America Corp.',
          code: 'BAC',
          price: 23.15,
          rate: 0.79,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Cisco Systems Inc.',
          code: 'CSCO',
          price: 46.31,
          rate: 0.85,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PepsiCo Inc.',
          code: 'PEP',
          price: 128.93,
          rate: 0.98,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Pfizer Inc.',
          code: 'PFE',
          price: 32.04,
          rate: 0.74,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Comcast Corp.',
          code: 'CMCSA',
          price: 38.65,
          rate: 0.91,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Coca-Cola Company',
          code: 'KO',
          price: 43.57,
          rate: 0.86,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AbbVie Inc.',
          code: 'ABBV',
          price: 96.13,
          rate: 1.31,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walmart Inc.',
          code: 'WMT',
          price: 118.32,
          rate: 1.07,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Chevron Corp.',
          code: 'CVX',
          price: 86.46,
          rate: 0.69,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'salesforce.com Inc.',
          code: 'CRM',
          price: 183.17,
          rate: 1.21,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Abbott Laboratories',
          code: 'ABT',
          price: 88.71,
          rate: 1.05,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Thermo Fisher Scientific Inc.',
          code: 'TMO',
          price: 350.95,
          rate: 1.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'McDonald´s Corp.',
          code: 'MCD',
          price: 179.74,
          rate: 0.87,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amgen Inc.',
          code: 'AMGN',
          price: 232.84,
          rate: 1.26,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Eli Lilly and Company',
          code: 'LLY',
          price: 162.83,
          rate: 1.47,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Costco Wholesale Corp.',
          code: 'COST',
          price: 296.56,
          rate: 1.13,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Accenture Plc',
          code: 'ACN',
          price: 212.47,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bristol-Myers Squibb',
          code: 'BMY',
          price: 57.54,
          rate: 1.27,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NIKE Inc.',
          code: 'NKE',
          price: 93.67,
          rate: 1.12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Medtronic Plc',
          code: 'MDT',
          price: 88.77,
          rate: 0.90,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Broadcom Inc.',
          code: 'AVGO',
          price: 307.41,
          rate: 1.02,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NextEra Energy Inc.',
          code: 'NEE',
          price: 236.22,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'American Tower Corp.',
          code: 'AMT',
          price: 246.48,
          rate: 1.21,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Texas Instruments Inc.',
          code: 'TXN',
          price: 123.37,
          rate: 1.08,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Union Pacific Corp.',
          code: 'UNP',
          price: 162.64,
          rate: 0.96,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oracle Corp.',
          code: 'ORCL',
          price: 54.18,
          rate: 0.93,
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('stocks_game_stocks', null, {});
  }
};
