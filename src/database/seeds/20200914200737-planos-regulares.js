'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('planosRegulares', [
        {
          name: 'Recorrente / Masculino Full',
          description: 'ALUNOS A PARTIR DE 15 ANOS DE IDADE',
          price: 359,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Recorrente / Kids Full',
          description: 'ALUNOS DE 5 A 14 ANOS DE IDADE',
          price: 269,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Recorrente / Feminino Full',
          description: 'ALUNOS A PARTIR DE 15 ANOS DE IDADE',
          price: 299,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Anual',
          description: 'ECONOMIA DE 20% NESTE PLANO',
          price: 3590,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Diária',
          description: 'DIVERSOS PÚBLICOS',
          price: 3590,
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('planosRegulares', null, {});
  }
};
