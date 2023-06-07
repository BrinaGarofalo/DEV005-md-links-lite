const path = require('path');
const fs = require('fs');

/* const ruta = './README.md';

if (exists) {
  console.log('Si existe archivo');
  const ext = path.extname(ruta);
  if (ext === '.md') {
    console.log('Si es un MD');
    const validaabsoluto = path.isAbsolute(ruta);
    if (validaabsoluto) {
      console.log('Es una ruta absoluta');
    } else {
      console.log('Es una ruta relativa');
      const rutita = path.resolve(ruta);
      console.log('La ruta absoluta es la siguiente');
      console.log(rutita);
    }
  } else {
    console.log('No es un MD');
  }
} else {
  console.log('No existe archivo');
} */

/// //////////////////////////////////////////////////
const validaArchivo = (rutafun) => new Promise((resolve, reject) => {
  const exists = fs.existsSync(rutafun);
  if (exists) {
    console.log('Si existe archivo');
    const ext = path.extname(rutafun);
    if (ext === '.md') {
      console.log('Si es un MD');
      const validaabsoluto = path.isAbsolute(rutafun);
      if (validaabsoluto) {
        resolve('Es una ruta absoluta');
      } else {
        console.log('Es una ruta relativa');
        const rutita = path.resolve(rutafun);
        console.log('La ruta absoluta es la siguiente');
        resolve(rutita);
      }
    } else {
      reject(new Error('Error al leer el archivo:'));
    }
  } else {
    reject(new Error('No existe archivo'));
  }
});

validaArchivo('./Prueba/prueba.txt')
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });

// const convertRoute = (pathByUser) => {

// escribir una validacion si el archivo existe
// escribir una validacion si el archivo es un .md
// const isAbsolute = path.isAbsolute(pathByUser);
// escribir un if que valide si es true retorne la ruta si es false resuelva como
// absoluta y retorne la ruta absoluta

// console.log(path.resolve(pathByUser));
// return isAbsolute;
// };
// console.log(convertRoute('./README.md'));
