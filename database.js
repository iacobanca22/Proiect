// database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crearea instanței Sequelize pentru conexiunea la baza de date MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Testarea conexiunii
sequelize.authenticate()
  .then(() => console.log('Conexiune la baza de date reușită!'))
  .catch(err => console.error('Nu s-a putut conecta la baza de date:', err));

module.exports = sequelize;