const path = require('path');
const gateway = require('express-gateway');
require('./services/user');
require('./services/music');

gateway()
  .load(path.join(__dirname, 'config'))
  .run();



