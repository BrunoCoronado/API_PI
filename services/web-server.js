const http = require('http');
const morgan = require('morgan');
const express = require('express');
var path = require('path');
const cors = require('cors');
const webServerConfig = require('../config/web-server');
const router = require('./router');
var bodyParser = require('body-parser');

let httpServer;

function initialize(){
    return new Promise((resolve, reject) =>{
        const app = express();
        app.options('*', cors())
        app.use( (req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });
        httpServer = http.createServer(app);
        app.use(morgan('dev'));
        app.use(bodyParser.json()); //esto es para que nos deje hacer req.body con json.
        app.use('/pi/api/', router);
        app.use(express.static(path.join(__dirname, 'public'))); //la carpeta de archivos estáticos
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