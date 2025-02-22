'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('usuarios', { 
        id: {
          type:Sequelize.INTEGER ,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
        },
        nome: {
          type:Sequelize.STRING ,
          allowNull:false,
        },
        email: {
          type:Sequelize.STRING ,
          allowNull:false,
          unique:true,
        },
        password_hash: {
          type:Sequelize.STRING ,
          allowNull:false,          
        },
      
        username: {
          type:Sequelize.STRING ,
          allowNull:false,
          unique:true,
        },
        trocasenha: {
          type:Sequelize.INTEGER ,
        },
        createdAt:{
          type:Sequelize.DATE ,
          allowNull:false,
        }  ,

        updatedAt:{
          type:Sequelize.DATE ,
          allowNull:false,
        }  

      });
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('usuarios');
   
  }
};
