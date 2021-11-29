const axios = require("axios")
const API_HOST = "https://hifood-api.herokuapp.com/cliente"

export default {
  inserir(cliente) {
    return axios
      .post(API_HOST, cliente)
      .then((resposta) => resposta)
      .catch((error) => error)
  },
  editar() {}
}
