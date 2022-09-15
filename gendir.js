const fs = require("fs");
const mkdir = require("mkdirp");
const utils = require("./utils/dirgenerators");


const createDir = (path, folderName) => {
    
    utils.rootFiles(path, folderName);
    utils.publicsFol(path, folderName);
    utils.configFol(path, folderName);
    utils.dbFol(path, folderName);
    utils.modelsFol(path, folderName);
    utils.mwFol(path, folderName);
    utils.routesFol(path, folderName);
}

console.log(`Open new folder: ${process.argv[2]}/${process.argv[3]}`)

createDir(process.argv[2], process.argv[3]);