const fs = require('fs');
const { uniq } = require('lodash');
const path = require('path');
const { getFilesInFolderByPattern } = require('./utils');
const config = require('./config')();

const sourceDir = path.join(__dirname, '..', config.sourceDir);
const outputDir = path.join(__dirname, '..', config.outputDir);
const outputFileName = path.resolve(outputDir, config.outputFilename);

const fileNames = getFilesInFolderByPattern(sourceDir, config.sourceFilePattern);

const result = {};
fileNames.forEach(fileName => {
    const file = path.join(sourceDir, fileName);
    const content = fs.readFileSync(file).toString();
    const lines = content.split('\n');
    let category;
    lines.forEach(line => {
        const found = line.match(config.categoryPattern);
        if (found && found[1] && /\S/.test(found[1])) {
            category = found[1].trim();
            if (!(category in result)) {
                result[category] = [];
            }
        } else if(category && /\S/.test(line)) {
            const trimmedLine = line.trim();
            result[category].push(trimmedLine);
        }
    });

})


const ordered = {};
Object.keys(result).sort().forEach((key) => {
    ordered[key] = uniq(result[key]);
});

fs.writeFile(outputFileName, JSON.stringify(ordered, null, 2), (err) => {
    if (err) return console.error(err);
});
console.log(ordered)