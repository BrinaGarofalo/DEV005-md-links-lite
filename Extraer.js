const { log } = require('console');
const fs = require('fs');

/* fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('completo'); */

/// /////////////////////////////////////////////////////////////////////////////

const extraerArchivo = (path) => new Promise((res, rej) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log('data', data);
    const regexMdLinks = /\[([^\\[]+)\](\(.*\))/gm;
    // console.log('regexMdLinks', regexMdLinks);
    if (err) {
      rej(new Error('Verificar ruta, no se encontró el archivo'));
    } else if (data.match(regexMdLinks)) {
      const matchMdLinks = data.match(regexMdLinks);
      // console.log('regexMdLinks', matchMdLinks);
      const arrMdLinks = matchMdLinks.map((link) => {
        // Convierte los strings en un arr y elimina ']('
        const arrSplit = link.split('](');
        // Al 1er texto de cada arr remplazar [ por vacio
        const text = arrSplit[0].replace('[', '');
        // Al 2do texto de cada arr remplazar ) por vacio
        const href = arrSplit[1].replace(')', '');
        return ({ href, text, path });
      });
      // console.log('arrMdlinks', arrMdLinks);
      res(arrMdLinks);
    }
  });
});
extraerArchivo('./texto.md')
  .then((res) => {
    console.log('res', res);
  });
const getAllMdLinks = (arrMds) => {
  const arrPromises = arrMds.map((link) => extraerArchivo(link));
  return Promise.all(arrPromises);
};

module.exports = {
  extraerArchivo,
  getAllMdLinks,
};
