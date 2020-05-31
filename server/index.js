const express = require('express')
const app = express()
const port = 3001
const ProductsService = require('./services/ProductsService')
const Mongo = require('./db/mongo')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser())
app.use(cors())
// controlador - controller
app.get('/', async (req, res) => {
    try {
        const response = await ProductsService.getAll()
        console.log('res', response)
        return res.status(200).send(response)
    } catch (error) {
        console.log("Error al crear un producto", error)
        return res.status(500).send(error.message || 'Algo salio mal perdon')
    }
})

app.post('/', async (req, res) => {
    try {
        console.log('reeeee', req.body)
        const response = await ProductsService.addProduct(req.body)
        return res.status(201).send(response)
    } catch (error) {
        console.log("Error al crear un producto", error)
        return res.status(500).send(error.message || 'Algo salio mal perdon')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    return Mongo.connect().then(() => console.log('Mongo instance is ok'))
})


// controller => service => respositorios