var express_config = {
  development: {
    db: "sqlite://localhost/database",
    db_storage: __dirname + "/../db/development.sqlite3",
  },
};

var env = process.env.EXPRESS_ENV
env = env || "development";

if (!express_config[env]) {
  throw new Error('express environment config `' + env + '` not exists!');
}

express_config[env].name = env

module.exports = express_config[env]
