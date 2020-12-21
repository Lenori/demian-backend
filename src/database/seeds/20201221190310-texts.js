'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('texts', [
        {
          slug: 'bem_vindo_title',
          text: 'BEM-VINDO À ESCOLA DEMIAN MAIA DE JIU JITSU BRASILEIRO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'bem_vindo_text',
          text: 'NASCIDO NO BRASIL, CONQUISTOU O MUNDO. ARTE MARCIAL PARADOXAL, EM QUE NÃO É NECESSÁRIO A VIOLÊNCIA PARA VENCER. A DEFESA PESSOAL MAIS EFICIENTE JÁ INVENTADA, QUE DÁ CONFIANÇA PARA RESOLVER CONFLITOS DE FORMA PACÍFICA. MEDITAÇÃO EM MOVIMENTO, QUE NOS CONECTA E TRAZ PARA O PRESENTE. POR MEIO DA PRÁTICA ENCONTRAMOS A VERDADE, POIS NÃO EXISTE O “SE”. TUDO É TESTADO, USADO OU DESCARTADO. TREINAMOS O DESCONFORTO, QUE NOS FAZ EVOLUIR E NOS ENSINA LIDAR COM OS “AMASSOS” QUE A VIDA NOS DARÁ. ASSIM O JJB É USADO PARA CONTROLAR A VAIDADE, COMO FERRAMENTA PARA DESENVOLVER A HUMILDADE. MAIS QUE UMA DEFESA, UMA FORMA DE APERFEIÇOAMENTO. MAIS QUE UM ESPORTE, UM PATRIMÔNIO CULTURAL BRASILEIRO.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'jiu_jitsu_todos_title',
          text: 'JIU-JITSU PARA TODOS',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'jiu_jitsu_todos_text',
          text: 'AS PORTAS DA ESCOLA DEMIAN MAIA DE JIU JITSU BRASILEIRO JÁ ESTÃO ABERTAS! ESTAMOS CRIANDO UM ESPAÇO NOVO, PARA QUE TODOS SINTAM-SE ACOLHIDOS, COMO UMA SEGUNDA CASA. ACREDITAMOS QUE PODEMOS TRANSFORMAR VIDAS POR MEIO DO JIU-JÍTSU E ESTAMOS CRIANDO UM ESPAÇO PERFEITO PARA ISSO. APROVEITE A OPORTUNIDADE E MATRICULE-SE HOJE MESMO!',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'proposito_title',
          text: 'NOSSO PROPÓSITO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'proposito_text',
          text: 'TRANSFORMAR A VIDA DAS PESSOAS ATRAVÉS DE 4 PILARES, COMO VÉRTICES DE UM QUADRADO, QUE SÃO DESENVOLVIDOS A CADA AULA. A AUTO-CONFIANÇA QUE SE GANHA AO APRENDER A ARTE MARCIAL MAIS EFICIENTE DO MUNDO. A HUMILDADE POR ENTENDER QUE VOCÊ NÃO SABE TUDO. A CONEXÃO COM O MOMENTO PRESENTE POR MEIO DA MEDITAÇÃO EM MOVIMENTO. A RESILIÊNCIA POR SER COLOCADO FORA DA SUA ZONA DE CONFORTO A CADA AULA. ESSA TRANSFORMAÇÃO COMEÇA NO TATAME E SE EXTENDE PARA A VIDA.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'missao_title',
          text: 'NOSSA MISSÃO',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'missao_text',
          text: 'É LEVAR O JIU JITSU BRASILEIRO E SEUS BENEFÍCIOS PARA O MAIOR NÚMERO DE PESSOAS POSSÍVEL, DESDE O NÍVEL MAIS BÁSICO ATÉ O MAIS AVANÇADO. CADA ALUNO DETERMINARÁ ONDE QUER CHEGAR, PODENDO TREINAR PARA MELHORAR SEU CONDICIONAMENTO FÍSICO, ACALMAR A MENTE, PERDER PESO OU ATÉ PARTICIPAR DE COMPETIÇÕES.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'quote_title',
          text: '"O JIU JITSU É UMA MEDITAÇÃO ATIVA E SEUS BENEFÍCIOS SE ESTENDEM MUITO ALÉM DO TATAME"',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'quote_text',
          text: '- DEMIAN MAIA -',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'horarios_title',
          text: 'TABELA DE DIAS E HORÁRIOS DAS AULAS',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'horarios_text',
          text: 'OBS: VOCÊ QUE ESTÁ INICIANDO NO JIU JITSU E NÃO POSSUÍ OS MATERIAIS DE INICIALIZAÇÃO BÁSICA, PODERÁ ADQUIRIR TODO EQUIPAMENTO NECESSÁRIO PARA INICIO DAS SUAS AULAS NA PRÓPRIA ACADEMIA. ESTAMOS PREPARADOS PARA ATENDÊ-LO EM TODA SUA JORNADA NO JIU JITSU. IMPORTANTE FALAR DE CONDIÇÕES DE PAGAMENTO. TODOS OS PLANOS PODEM SER FEITOS NAS CONDIÇÕES DE PAGAMENTO CRÉDITO E DÉBITO RECORRENTE.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'footer_text',
          text: 'AVENIDA IMPERATRIZ LEOPOLDINA, 1571 - VILA LEOPOLDINA / SÃO PAULO - SP . BRASIL . +55 11 25017282',
          created_at: new Date(),
          updated_at: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('texts', null, {});
  }
};
