const mdlinks = require('./index.js');

mdlinks('./texto.md')
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
