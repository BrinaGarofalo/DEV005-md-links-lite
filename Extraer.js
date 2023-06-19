/* eslint-disable no-useless-escape */
const fs = require('fs');
const path = require('path');

const extraerArchivo = (pathFile) => new Promise((resolve, reject) => {
  fs.readFile(pathFile, 'utf8', (error, fileContent) => {
    if (error) {
      reject(error);
    } else {
      const regexMdLinks = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
      const links = Array.from(fileContent.matchAll(regexMdLinks), (match) => ({
        href: match[2],
        text: match[1],
        file: path.resolve(pathFile),
      }));
      resolve(links);
    }
  });
});

module.exports = {
  extraerArchivo,

};
