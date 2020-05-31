// hablar con los respositorios, mapear la data a objetos y validaciones

const ProductsRespository = require('../repositories/ProductsRespository')

class ProductsService {

    getAll(){
        return ProductsRespository.getAll()  
    }

    addProduct(product){
        // validar si la data esta completa
        return ProductsRespository.addProduct(product)
    }

}

module.exports = new ProductsService()