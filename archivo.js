/* eslint-disable prefer-promise-reject-errors */
const path = require('path');

const archivoMd = (route) => new Promise((resolve, reject) => {
  if (path.extname(route) !== '.md') {
    reject('El archivo es invalido / No posee extension .md');
  } else {
    resolve(route);
  }
});

module.exports = {
  archivoMd,
};
