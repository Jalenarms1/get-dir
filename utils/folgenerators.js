const fs = require("fs");
const mkdir = require("mkdirp");

const rootFiles = (path) => {
    // fs.writeFile(`${path}/.env`, "# Install dotenv", (err) => {
    //     if(err) {
    //         console.log(err);
    //     }
    // })
    fs.copyFile(`./get-dir/utils/.env`, `${path}/.env`, (err) => {
        if(err) console.log(err);
    })
    

    fs.copyFile( `./get-dir/utils/server.js`, `${path}/server.js`, (err) => {
        if(err) {
            console.log(err);
        }
    })

    fs.mkdir(`${path}/views`, {recursive: true}, (err, res) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/views/layouts`, {recursive: true}, (err, res) => {
        if(err) console.log(err);
    })
    fs.copyFile(`./get-dir/utils/main.handlebars`, `${path}/views/layouts`, (err, res) => {
        if(err) console.log(err);
    })
};

const publicsFol = (path) => {

    fs.mkdir(`${path}/public`, {recursive: true}, (err) => {
        if(err) console.log(err);
    });
    // fs.writeFile(`${path}/public/index.html`, "<!--  Place html here -->", (err) => {
    //     if(err) console.log(err);

    // })
    // fs.copyFile(`./get-dir/utils/htmltemp.html`, `${path}/public/index.html`, (err) => {
    //     if(err) console.log(err);
    // })
    
    fs.mkdir(`${path}/public/assets`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/public/assets/css`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.mkdir(`${path}/public/assets/js`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/public/assets/js/index.js`, "// Place script code here", (err) => {
        if(err) console.log(err);

    })
    fs.writeFile(`${path}/public/assets/css/styles.css`, "/* place styles here */", (err) => {
        if(err) console.log(err);

    })
};

const configFol = (path) => {

    fs.mkdir(`${path}/config`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.copyFile(`./get-dir/utils/connection.js`, `${path}/config/connection.js`, (err) => {
        if(err) console.log(err);
    })
    // fs.writeFile(`${path}/config/connection.js`, "// Place script code here", (err) => {
    //     if(err) console.log(err);

    // })
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

    fs.mkdir(`${path}/utils`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })

    fs.writeFile(`${path}/utils/helpers.js`, "// Place script code for helper functions here", (err) => {
        if(err) console.log(err);

    })
}

const routesFol = (path) => {

    fs.mkdir(`${path}/controllers`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/controllers/index.js`, "// Place script code for routes here", (err) => {
        if(err) console.log(err);
    })

    fs.mkdir(`${path}/controllers/api`, {recursive: true}, (err) => {
        if(err) console.log(err);
    })
    fs.writeFile(`${path}/controllers/api/index.js`, "// Place script code for routes here", (err) => {
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
