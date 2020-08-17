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
          description: 'Microsoft Corporation is a technology company. The Company develops, licenses, and supports a range of software products, services and devices.',
          code: 'MSFT',
          price: 196.33,
          rate: 1.93,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Apple Inc.',
          description: 'Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services.',
          code: 'AAPL',
          price: 353.63,
          rate: 1.79,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amazon.com Inc.',
          description: 'Amazon.com, Inc. engages in the provision of online retail shopping services.',
          code: 'AMZN',
          price: 2692.87,
          rate: 1.40,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Facebook Inc.',
          description: 'Facebook, Inc. operates as a social networking company worldwide. The company engages in the development of social media applications for people to connect through mobile devices, personal computers, and other surfaces.',
          code: 'FB',
          price: 216.08,
          rate: 1.12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Alphabet Inc.',
          description: 'Alphabet, Inc. is a holding company, which engages in the business of acquisition and operation of different companies. It operates through the Google and Other Bets segments.',
          code: 'GOOGL',
          price: 1362.54,
          rate: 1.26,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Johnson & Johnson',
          description: 'Johnson & Johnson is a holding company, which engages in the research and development, manufacture and sale of products in the health care field.',
          code: 'JNJ',
          price: 137.81,
          rate: 0.99,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Visa Inc.',
          description: 'Visa, Inc. engages in the provision of digital payment services. It also facilitates global commerce through the transfer of value and information among global network of consumers, merchants, financial institutions, businesses, strategic partners, and government entities.',
          code: 'V',
          price: 189.27,
          rate: 1.09,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'JPMorgan Chase & Co.',
          description: 'JPMorgan Chase & Co. is a financial holding company. It provides financial and investment banking services.',
          code: 'JPM',
          price: 92.59,
          rate: 0.95,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Procter & Gamble Company',
          description: 'Procter & Gamble Co. engages in the provision of branded consumer packaged goods.',
          code: 'PG',
          price: 115.23,
          rate: 1.04,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'United Health Group Inc.',
          description: 'UnitedHealth Group, Inc. engages in the provision of health care coverage, software, and data consultancy services.',
          code: 'UNH',
          price: 286.88,
          rate: 1.18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'MasterCard Inc.',
          description: 'Mastercard, Inc. operates as a technology company. The firm engages in the payments industry that connects consumers, financial institutions, merchants, governments and business.',
          code: 'MA',
          price: 289.34,
          rate: 1.09,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Home Depot Inc.',
          description: 'The Home Depot, Inc. engages in the sale of building materials and home improvement products. Its products include building materials, home improvement products, lawn and garden products, and decor products.',
          code: 'HD',
          price: 241.01,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Intel Corp.',
          description: 'Intel Corp. engages in the design, manufacture, and sale of computer products and technologies. It delivers computer, networking, data storage, and communications platforms.',
          code: 'INTC',
          price: 57.50,
          rate: 1.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NVIDIA Corp.',
          description: 'NVIDIA Corp. engages in the design and manufacture of computer graphics processors, chipsets, and related multimedia software. It operates through the Graphics Processing Unit (GPU) and Tegra Processor segments.',
          code: 'NVDA',
          price: 366.20,
          rate: 2.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Verizon Communications Inc.',
          description: 'Verizon Communications, Inc. is a holding company, which engages in the provision of communications, information, and entertainment products and services to consumers, businesses, and governmental agencies.',
          code: 'VZ',
          price: 53.16,
          rate: 0.93,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AT&T Inc.',
          description: 'AT&T, Inc. is a holding company, which engages in the provision of telecommunications media and technology service.',
          code: 'T',
          price: 29.08,
          rate: 0.87,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Adobe Inc.',
          description: 'Adobe, Inc. engages in the provision of digital marketing and media solutions.',
          code: 'ADBE',
          price: 426.92,
          rate: 1.42,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walt Disney Company',
          description: 'The Walt Disney Co. is a diversified international family entertainment and media enterprise. It operates through the following segments: Media Networks, Parks, Experiences and Products, Studio Entertainment and Direct-to-Consumer and International (DTCI).',
          code: 'DIS',
          price: 109.10,
          rate: 0.78,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Netflix Inc.',
          description: 'Netflix, Inc. is a streaming entertainment service company, which provides subscription service streaming movies and television episodes over the Internet and sending DVDs by mail.',
          code: 'NFLX',
          price: 443.40,
          rate: 1.18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PayPal Holdings Inc.',
          description: 'PayPal Holdings, Inc. engages in the development of technology platform for digital payments. Its solutions include PayPal, PayPal Credit, Braintree, Venmo, Xoom, and Paydiant products.',
          code: 'PYPL',
          price: 170.87,
          rate: 1.49,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Exxon Mobil Corp.',
          description: 'Exxon Mobil Corp. engages in the exploration, development, and distribution of oil, gas, and petroleum products.',
          code: 'XOM',
          price: 43.62,
          rate: 0.57,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Merck & Co. Inc.',
          description: 'Merck & Co., Inc. engages in the provision of health solutions through its prescription medicines, vaccines, biologic therapies, animal health, and consumer care products.',
          code: 'MRK',
          price: 75.19,
          rate: 0.89,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bank of America Corp.',
          description: 'Bank of America Corp. is a bank and financial holding company, which engages in the provision of banking and nonbank financial services.',
          code: 'BAC',
          price: 23.15,
          rate: 0.79,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Cisco Systems Inc.',
          description: 'Cisco Systems, Inc. engages in the design, manufacture, and sale of Internet Protocol based networking products and services related to the communications and information technology industry.',
          code: 'CSCO',
          price: 46.31,
          rate: 0.85,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'PepsiCo Inc.',
          description: 'PepsiCo, Inc. engages in the manufacture, marketing, distribution and sale of beverages, food, and snacks. It is a food and beverage company with a complementary portfolio of brands, including Frito-Lay, Gatorade, Pepsi-Cola, Quaker, and Tropicana.',
          code: 'PEP',
          price: 128.93,
          rate: 0.98,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Pfizer Inc.',
          description: 'Pfizer Inc. engages in the discovery, development, and manufacture of healthcare products specializes in medicines, vaccine, and consumer healthcare.',
          code: 'PFE',
          price: 32.04,
          rate: 0.74,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Comcast Corp.',
          description: 'Comcast Corp. is a media, entertainment, and communications company, which engages in the provision of video, Internet, and phone services.',
          code: 'CMCSA',
          price: 38.65,
          rate: 0.91,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Coca-Cola Company',
          description: 'The Coca-Cola Co. is the nonalcoholic beverage company, which engages in the manufacture, market, and sale of non-alcoholic beverages which include sparkling soft drinks, water, enhanced water and sports drinks, juice, dairy and plant-based beverages, tea and coffee and energy drinks.',
          code: 'KO',
          price: 43.57,
          rate: 0.86,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'AbbVie Inc.',
          description: 'AbbVie, Inc. is a research-based biopharmaceutical company, which engages in the development and sale of pharmaceutical products.',
          code: 'ABBV',
          price: 96.13,
          rate: 1.31,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walmart Inc.',
          description: 'Walmart, Inc. engages in retail and wholesale business. The Company offers an assortment of merchandise and services at everyday low prices.',
          code: 'WMT',
          price: 118.32,
          rate: 1.07,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Chevron Corp.',
          description: 'Chevron Corp. engages in the provision of administrative, financial management, and technology support for energy and chemical operations.',
          code: 'CVX',
          price: 86.46,
          rate: 0.69,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'salesforce.com Inc.',
          description: 'salesforce.com, inc. engages in the design and development of cloud-based enterprise software for customer relationship management.',
          code: 'CRM',
          price: 183.17,
          rate: 1.21,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Abbott Laboratories',
          description: 'Abbott Laboratories engages in the discovery, development, manufacture, and sale of a broad and diversified line of health care products.',
          code: 'ABT',
          price: 88.71,
          rate: 1.05,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Thermo Fisher Scientific Inc.',
          description: 'Thermo Fisher Scientific, Inc. engages in the provision of analytical instruments, equipment, reagents and consumables, software and services for research, analysis, discovery, and diagnostics.',
          code: 'TMO',
          price: 350.95,
          rate: 1.20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'McDonald´s Corp.',
          description: `McDonald's Corp. engages in the operation and franchising of restaurants.`,
          code: 'MCD',
          price: 179.74,
          rate: 0.87,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Amgen Inc.',
          description: 'Amgen, Inc. is a biotechnology company, which engages in the discovery, development, manufacture and marketing of human therapeutics.',
          code: 'AMGN',
          price: 232.84,
          rate: 1.26,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Eli Lilly and Company',
          description: 'Eli Lilly & Co. engages in the discovery, development, manufacture and sale of pharmaceutical products.',
          code: 'LLY',
          price: 162.83,
          rate: 1.47,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Costco Wholesale Corp.',
          description: 'Costco Wholesale Corp. engages in the operation of membership warehouses.',
          code: 'COST',
          price: 296.56,
          rate: 1.13,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Accenture Plc',
          description: 'Accenture Plc engages in the provision of management consulting, technology, and outsourcing services.',
          code: 'ACN',
          price: 212.47,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bristol-Myers Squibb',
          description: 'Bristol Myers Squibb Co. engages in the discovery, development, licensing, manufacture, marketing, distribution, and sale of biopharmaceutical products.',
          code: 'BMY',
          price: 57.54,
          rate: 1.27,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NIKE Inc.',
          description: 'NIKE, Inc. engages in the design, development, marketing, and sale of athletic footwear, apparel, accessories, equipment, and services.',
          code: 'NKE',
          price: 93.67,
          rate: 1.12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Medtronic Plc',
          description: 'Medtronic Plc is a medical technology company, which engages in the development, manufacture, distribution, and sale of device-based medical therapies and services.',
          code: 'MDT',
          price: 88.77,
          rate: 0.90,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Broadcom Inc.',
          description: 'Broadcom, Inc. is a global technology company, which designs, develops and supplies semiconductor and infrastructure software solutions.',
          code: 'AVGO',
          price: 307.41,
          rate: 1.02,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'NextEra Energy Inc.',
          description: 'NextEra Energy, Inc. is an electric power and energy infrastructure company.',
          code: 'NEE',
          price: 236.22,
          rate: 1.15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'American Tower Corp.',
          description: 'American Tower Corp. is a real estate investment trust, which owns, operates, and develops multitenant communications real estate.',
          code: 'AMT',
          price: 246.48,
          rate: 1.21,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Texas Instruments Inc.',
          description: 'Texas Instruments Incorporated engages in the design and manufacture semiconductor solutions for analog and digital embedded and application processing.',
          code: 'TXN',
          price: 123.37,
          rate: 1.08,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Union Pacific Corp.',
          description: 'Union Pacific Corp. engages in the provision of railroad and freight transportation services.',
          code: 'UNP',
          price: 162.64,
          rate: 0.96,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oracle Corp.',
          description: 'Oracle Corp. engages in the provision of products and services that address all aspects of corporate information technology environments.',
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
