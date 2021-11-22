const axios = require("axios");
const API_HOST = "http://localhost:3000/cliente";

export default {
  inserir(cliente) {
    return axios
      .post(API_HOST, cliente)
      .then((resposta) => resposta)
      .catch((error) => error);
  },
  editar() {},
};
