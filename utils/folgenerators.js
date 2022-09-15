const fs = require("fs");
const mkdir = require("mkdirp");

const rootFiles = (path) => {
    fs.writeFile(`${path}/.env`, "# Install dotenv", (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.writeFile(`${path}/package.json`, `// run npm init -y`, (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.writeFile(`${path}/server.js`, "// Place server code here", (err) => {
        if(err) {
            console.log(err);
        }
    })
};

const publicsFol = (path) => {

    fs.mkdir(`${path}/public`, {recursive: true}, (err) => {
        if(err) console.log(err);
    });
    fs.writeFile(`${path}/public/index.html`, "<!--  Place html here -->", (err) => {
        if(err) console.log(err);

    })
    
    fs.mkdir(`${path}/public/assets`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/public/assets/index.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
    fs.writeFile(`${path}/public/assets/styles.css`, "/* place styles here */", (err) => {
        if(err) console.log(err);

    })
};

const configFol = (path) => {

    fs.mkdir(`${path}/config`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/config/connection.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
}

const dbFol = (path) => {

    fs.mkdir(`${path}/db`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/db/schema.sql`, '-- Place your schema here', (err) => {
        if(err) console.log(err);
    })
}

const modelsFol = (path) => {

    fs.mkdir(`${path}/models`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/models/models.js`, "// Place script code for models here", (err) => {
        if(err) console.log(err);

    })
};

const mwFol = (path) => {

    fs.mkdir(`${path}/middleware`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/middleware/clog.js`, "// Place script code for middleware here", (err) => {
        if(err) console.log(err);

    })
}

const routesFol = (path) => {

    fs.mkdir(`${path}/routes`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/routes/index.js`, "// Place script code for routes here", (err) => {
        if(err) console.log(err);
    })

    fs.mkdir(`${path}/routes/api`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/routes/api/routes.js`, "// Place script code for routes here", (err) => {
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
