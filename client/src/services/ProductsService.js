import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
class ProductsService {

    getAll() {
        return axios.get(`${BASE_URL}/`)
    }
}

export default new ProductsService()