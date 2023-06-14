const mdlinks = require('./index');

mdlinks('./texto2.md')
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
