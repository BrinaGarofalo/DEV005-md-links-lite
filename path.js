const path = require('path');
const fs = require('fs');

const documentValid = (filePath) => {
  const existe = fs.existsSync(filePath);

  if (existe) {
    return filePath;
  }
  const documentAbsolut = path.isAbsolute(filePath) ? filePath : path.resolve(filePath);
  return documentAbsolut;
};

module.exports = {
  documentValid,
};
