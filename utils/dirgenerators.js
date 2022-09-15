const fs = require("fs");
const mkdir = require("mkdirp");

const rootFiles = (path, folderName) => {
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
};

const publicsFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/public`, {recursive: true}, (err) => {
        if(err) console.log(err);
    });
    fs.writeFile(`${path}/${folderName}/public/index.html`, "<!--  Place html here -->", (err) => {
        if(err) console.log(err);

    })
    
    fs.mkdir(`${path}/${folderName}/public/assets`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/public/assets/index.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
    fs.writeFile(`${path}/${folderName}/public/assets/styles.css`, "/* place styles here */", (err) => {
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

    fs.mkdir(`${path}/${folderName}/middleware`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/${folderName}/middleware/clog.js`, "// Place script code for middleware here", (err) => {
        if(err) console.log(err);

    })
}

const routesFol = (path, folderName) => {

    fs.mkdir(`${path}/${folderName}/routes`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/routes/index.js`, "// Place script code for routes here", (err) => {
        if(err) console.log(err);
    })

    fs.mkdir(`${path}/${folderName}/routes/api`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/${folderName}/routes/api/routes.js`, "// Place script code for routes here", (err) => {
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
