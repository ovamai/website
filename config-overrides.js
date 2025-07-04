
{/*
const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
  };
  return config;
};

*/}


{/*}

const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias(configPaths('./jsconfig.json'))(config);
  return config;
};


*/}



const path = require("path");
const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  config = alias(configPaths("jsconfig.json"))(config);

  // Also support manual alias setup if needed
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
  };

  return config;
};
