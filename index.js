const { archivoExist, extArchivo } = require('./path');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const siExiste = archivoExist(path);
  const extensionArch = extArchivo(path);

  console.log('Existencia de archivo', siExiste, extensionArch);
  resolve(path, options);
  reject(new Error('Verificar ruta, no se encontró el archivo'));
});

module.exports = mdLinks;
