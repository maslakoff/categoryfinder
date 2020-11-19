const fs = require('fs');

const getFilesInFolderByPattern = (sourceDir, filePattern) => {
  const matchedFilenames = [];
  fs.readdirSync(sourceDir).forEach((file) => {
    if (filePattern.test(file)) {
      matchedFilenames.push(file);
    }
  });

  return matchedFilenames;
};

module.exports = {
  getFilesInFolderByPattern,
};
