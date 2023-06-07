const mdlinks = require('./index');

mdlinks('./ejemplo', { validate: false }).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
