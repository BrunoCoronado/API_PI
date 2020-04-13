const http = require('http');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const webServerConfig = require('../config/web-server');
const router = require('./router');

let httpServer;

function initialize(){
    return new Promise((resolve, reject) =>{
        const app = express();
        app.options('*', cors())

        app.use(express.bodyParser());
        httpServer = http.createServer(app);
        app.use(morgan('dev'));
        app.use('/pi/api/', router);
        httpServer.listen(webServerConfig.port)
        .on('listening', () =>{
            console.log(`Servidor iniciado, escuchando en el puerto ${webServerConfig.port}`);
            resolve();
        })
        .on('error', error => {
            reject(error);
        });
    });
}

function close(){
    return new Promise((resolve, reject) => {
        httpServer.close(err =>{
            if(err)
                return reject(err);
            resolve();
        });
    });
}

module.exports.initialize = initialize;
module.exports.close = close;