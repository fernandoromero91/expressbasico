const express = require ('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.servicePath= '/api/services';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.servicePath, require('../routes/service.routes'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor on puerto: ', this.port);
        });
    }
}
module.exports = Server;