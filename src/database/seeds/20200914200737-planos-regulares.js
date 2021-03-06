'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('planosRegulares', [
        {
          name: 'Masculino Full',
          description: 'ALUNOS A PARTIR DE 15 ANOS DE IDADE',
          price: 35900,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Kids Full',
          description: 'ALUNOS DE 5 A 14 ANOS DE IDADE',
          price: 25900,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/%5BPLUS%5DeIL%5BPLUS%5DfzZNcy7Gt%5BBAR%5DPl5KIrQ%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Feminino Full',
          description: 'ALUNOS A PARTIR DE 15 ANOS DE IDADE',
          price: 27900,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/0GaE9Ux52vXSBHXLH2E5hg%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Plano digital',
          description: '',
          price: 1990,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/xG63XJ2jRN4esIm%5BPLUS%5DagPelg%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('planosRegulares', null, {});
  }
};
