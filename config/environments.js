var express_config = {
  development: {
    db: {
      datebase: '',
      dialect: 'sqlite',
      storage: __dirname + "/../development.sqlite3",
    },
  },
};

var env = process.env.EXPRESS_ENV
env = env || "development";

if (!express_config[env]) {
  throw new Error('express environment config `' + env + '` not exists!');
}

module.exports = express_config[env]
