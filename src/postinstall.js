const fs = require('fs');
const path = require('path');
const config = require('./config.example')();

const outputDir = path.join(__dirname, '..', config.outputDir);
const sourceDir = path.join(__dirname, '..', config.sourceDir);

const dirs = [sourceDir, outputDir];
dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const configExampleFile = path.join(__dirname, 'config.example.js');
const configFile = path.join(__dirname, 'config.js');
if (!fs.existsSync(configFile)) {
    fs.copyFileSync(configExampleFile, configFile);
}
