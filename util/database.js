const Sequelize = require('sequelize');

const sequelize = new Sequelize('levinus_api', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});
if(sequelize){
  console.log('Database connection successful');
}

module.exports = sequelize;
