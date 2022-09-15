// const fs = require("fs");
// const mkdir = require("mkdirp");
const utils = require("./utils/folgenerators");


const createFols = (path) => {
    
    utils.rootFiles(path);
    utils.publicsFol(path);
    utils.configFol(path);
    utils.dbFol(path);
    utils.modelsFol(path);
    utils.mwFol(path);
    utils.routesFol(path);
}

console.log(`Open new folder: ${process.argv[2]}`)

createFols(process.argv[2]);

