var env = require('../config/environments');

console.log(env);

var Sequelize = require('sequelize');
var sequelize = new Sequelize(env.db.database, env.db.username, env.db.password, env.db);

module.exports = sequelize;
