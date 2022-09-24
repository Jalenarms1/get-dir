const fs = require("fs");
const mkdir = require("mkdirp");

const rootFiles = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

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

    fs.copyFile( `./get-dir/utils/server.js`, `${path}/${folderName}/server.js`, (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.mkdir(`${path}/${folderName}/views`, {recursive: true}, (err, res) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/${folderName}/views/layouts`, {recursive: true}, (err, res) => {
        if(err) console.log(err);
    })
    fs.copyFile(`./get-dir/utils/main.handlebars`, `${path}/${folderName}/views/layouts`, (err, res) => {
        if(err) console.log(err);
    })
};

const publicsFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/public`, {recursive: true}, (err) => {
        if(err) console.log(err);
    });
    
    
    fs.mkdir(`${path}/${folderName}/public/assets`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/public/assets/css`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/public/assets/js`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/${folderName}/public/assets/js/index.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
    fs.writeFile(`${path}/${folderName}/public/assets/css/styles.css`, "/* place styles here */", (err) => {
        if(err) console.log(err);

    })
};

const configFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/config`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/config/connection.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
}

const dbFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/db`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/${folderName}/db/schema.sql`, '-- Place your schema here', (err) => {
        if(err) console.log(err);
    })
}

const modelsFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/models`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/${folderName}/models/models.js`, "// Place script code for models here", (err) => {
        if(err) console.log(err);

    })
};

const mwFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/utils`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/${folderName}/utils/helpers.js`, "// Place script code for middleware here", (err) => {
        if(err) console.log(err);

    })
}

const routesFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/controllers`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/controllers/index.js`, "// Place script code for routes here", (err) => {
        if(err) console.log(err);
    })

    fs.mkdir(`${path}/${folderName}/controllers/api`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/controllers/api/index.js`, "// Place script code for routes here", (err) => {
        if(err) console.log(err);
    })
}

module.exports = {
    rootFiles,
    publicsFol,
    configFol,
    dbFol,
    modelsFol,
    mwFol,
    routesFol

};
