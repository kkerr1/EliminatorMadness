'use strict';

/*eslint no-magic-numbers: 0*/

module.exports = {
  server: {
    port: 3000,
    host: 'localhost',
    staticFiles: {
      ttlMilliseconds: 60 * 60 * 24 * 1000
    }
  }
};
