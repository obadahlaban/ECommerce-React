export default class BaseAPI {
    constructor() {
        this.baseUrl = "http://localhost:8085";
        this.headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Accept',
            'Content-Type': 'application/json',
        };
    }
}