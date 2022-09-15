const fs = require("fs");
const mkdir = require("mkdirp");


const createDir = (path, folderName) => {
    
    fs.mkdir(`${path}/${folderName}`, {recursive: true}, (err) => {
        if(err) console.log(err)
    });

    fs.writeFile(`${path}/${folderName}/.env`, "# Install dotenv", (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.writeFile(`${path}/${folderName}/package.json`, `// run npm init -y`, (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.writeFile(`${path}/${folderName}/server.js`, "// Place server code here", (err) => {
        if(err) {
            console.log(err);
        }
    })
}