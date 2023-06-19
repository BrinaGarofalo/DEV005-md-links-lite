const { documentValid } = require('./path');
const { extraerArchivo } = require('./Extraer');
const { validateA } = require('./validate');
const { archivoMd } = require('./archivo');

const mdLinks = (path, options = {}) => new Promise((resolve, reject) => {
  const absolutoDoc = documentValid(path);
  if (!absolutoDoc) {
    reject(new Error('Ruta inexistente'));
    return;// detiene la ejecucion de la funcion luego del rechazo en la promesa//
  }
  archivoMd(absolutoDoc)
    .then((fileContent) => {
      extraerArchivo(fileContent, absolutoDoc)
        .then((links) => {
          if (Array.isArray(links) && links.length > 0) {
            if (options.validate) {
              validateA(links)
                .then((validate) => resolve(validate))
                .catch((error) => reject(error));
            } else {
              resolve(links);
            }
          } else {
            resolve('no existe');
          }
        })
        .catch((error) => reject(error));
    })
    .catch((error) => reject(error));
});

module.exports = {
  mdLinks,
};
