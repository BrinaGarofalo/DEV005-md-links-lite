const pathModule = require('path');
const fs = require('fs');

const archivoExist = (path = '') => {
  const exists = fs.existsSync(path);
  // console.log(exists);
  if (exists) {
    console.log('Si existe archivo');
  } else {
    console.log('No existe archivo');
  }
};
const extArchivo = (path = '') => {
  const ext = pathModule.extname(path);
  if (ext === '.md') {
    console.log('Si es un MD');
    const absoluto = pathModule.isAbsolute(path);
    console.log('Es absoluto?', path);
    if (absoluto === false) {
      const convertRoute = pathModule.resolve(path);
      console.log('ruta convertida a abosoluta', convertRoute);
    } else if (absoluto === true) {
      return absoluto;
    }
  } else {
    console.error('No es .md');
  }
};

module.exports = {
  archivoExist,
  extArchivo,
};
