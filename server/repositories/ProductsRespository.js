// Este es el encargado de conectarse a la db y traer datos
const Mongo = require('../db/mongo')

class ProductsRespository {

    getAll() {
        return Mongo.productsCollection.find({}).toArray()
    }

    addProduct(product) {
        // conectarnos con mongo
        return Mongo.productsCollection.insertOne(product)
    }

}

module.exports = new ProductsRespository()