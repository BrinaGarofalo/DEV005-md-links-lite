/* eslint-disable no-console */
const { mdLinks } = require('./index');

/* pasa los argumentos al proceso node.js cuando se ejecuta en la línea de comandos.
El primer elemento es la ruta de ejecución del proceso y el
segundo elemento es la ruta del archivo js */
const path = process.argv[2];

mdLinks(path, { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.log(error);
  });
