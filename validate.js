const axios = require('axios');

const validateA = (arrLink) => {
  const arraValidateLinks = arrLink.map((link) => {
    const newLink = { ...link };
    return axios.get(newLink.href)
      .then((res) => {
        if (res.status <= 399) {
          newLink.code = res.status;
          newLink.status = res.statusText;
        } else {
          newLink.code = res.status;
          newLink.status = 'Fail';
        }
        return newLink;
      })
      .catch((err) => {
        newLink.code = err.response?.status || 404;
        newLink.status = err.response?.status === 404 ? 'Fail' : 'Other Error';
        return newLink;
      });
  });
  return Promise.all(arraValidateLinks);
};

const links = [
  { href: 'https://www.google.com' },
  { href: 'C:/Users/ferna/OneDrive/Escritorio/md-links/DEV005-md-links-lite/texto.md' },

  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors',
    text: 'Localizando elementos DOM usando selectores - MDN',
    path: './texto.md',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    path: './texto2.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    path: 'README.md',
  },
];

validateA(links)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  validateA,
};
