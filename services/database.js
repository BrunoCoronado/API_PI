const mysql = require('mysql');
const dbconfig = require('../config/database');

const connection = mysql.createConnection(dbconfig.pi_connection);

async function initialize(){
    await connection.connect( err => {
        if(err){
            console.log('Error on Connecting to DB');
            return false;
        }
        console.log('Connected to DB');
        return true;
    });
}

async function close(){
    await connection.end();
}

function executeQuery(query){
    return new Promise(async (resolve, reject) => {
        try{
            await connection.query(query, (err, result, fields) => {
                resolve(result);
            });
        }catch(err){
            reject(err);
        }
    });
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.executeQuery = executeQuery;