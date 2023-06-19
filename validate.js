const axios = require('axios');

// Validación de los links extraidos
// axios.head obtiene encabezado de resp url
// {...} copiar todas las propiedades del objeto
const validateA = (links) => {
  const linkVali = links.map((link) => axios
    .head(link.href)
    .then((response) => ({
      ...link,
      status: response.status,
      ok: response.status >= 200 && response.status < 400,
    }))
    .catch(() => ({
      ...link,
      status: 0,
      ok: false,
    })));
  return Promise.all(linkVali);
};

module.exports = {
  validateA,
};
