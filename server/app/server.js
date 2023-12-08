const mongoose = require("mongoose");

const config = require("./config");
const app = require("./app");

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(config.mongo_uri).then(() => {
            console.log("Connection ok");
        }).catch((err) => {
            console.error("Erro to connect", err);
        });

        const server = app.listen(config.port, () => {
            console.log("Server running on", config.port);
        });
    }

}

module.exports = new Database();
