import BaseAPI from "./BaseAPI";
import axios from 'axios';

class ProductAPI extends BaseAPI {
    list() {
        return axios.get(this.baseUrl + '/products', {
            headers: this.headers
        });
    }
    listByCategory (category) {
        return axios.get(this.baseUrl + '/products?category=' + category, {
            headers: this.headers
        });
    }
}

export default new ProductAPI();