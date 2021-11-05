const axios = require("axios");
const API_HOST = "http://localhost:3000";

export default {

    listaProdutos() {
        return axios.get(API_HOST+"/produto").then(function(resposta) {
            return resposta;
        }).catch(function(error) {
            return error;
        });
    },

    listaCategorias() {
        return axios.get(API_HOST+"/categoria").then(function(resposta) {
            return resposta;
        }).catch(function(error) {
            return error;
        });
    }
}