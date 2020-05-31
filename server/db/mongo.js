const mongo = require('mongodb')

const host = 'localhost'
const port = '27017'
const dbName = 'gonza'
const productsCollection = 'products'
const url = `mongodb://${host}:${port}`

module.exports = class Mongo {
    static client
    static productsCollection

    static connect() {
        return new Promise((resolve, reject) => {
            mongo.MongoClient
                .connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
                    (error, client) => {
                        if (error) {
                            console.error('Error while connecting to Mongodb server.', error)
                            return reject(error);
                        }
                        Mongo.client = client;
                        Mongo.productsCollection = client.db(dbName).collection(productsCollection)
                        resolve(client);
                    });
        });
    }

    disconnect() {
        Mongo.client.close();
    }
}