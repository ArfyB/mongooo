const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('blog');   // blog = mongosh로 생성한 db이름
}

function getDb() {
    if(!database) {
        throw { message : 'Database connection not established!' };
    }
    return database;
}

module.exports = {
    connectToDatabase: connect,
    getDb: getDb
};