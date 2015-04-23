var controllers = {};

var get_action = function(action_name) {
  args = action_name.split('#');
  ctl = args[0];
  act = args[1] ? args[1] : "index";

  if (controllers[ctl] === undefined)
  {
    controllers[ctl] = require('../app/controllers/' + ctl);
  }

  return controllers[ctl][act];
};

module.exports = function(router) {
  return {
    get: function(path, action_name) {
      router.get(path, get_action(action_name));
    },
    post: function(path, action_name) {
      router.post(path, get_action(action_name));
    },
  };
};
