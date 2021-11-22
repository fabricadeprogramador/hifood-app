<template>
  <v-container>
    <v-card v-if="mostrarLogin">
      <v-row>

        <v-img
          :src="logo"
          max-width="100"
        ></v-img>
        <h1 style="font-size: 35px">HiFood</h1>
      </v-row>
      <v-row>
        <v-col align="center">
          <form>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="senha"
              label="Senha"
              required
            ></v-text-field>
            <v-row>
              <v-col align="center">
                <v-btn
                  elevation="1"
                  @click="actionAddCarrinho()"
                >
                  <span>Login</span>
                </v-btn>
              </v-col>
            </v-row>
          </form>
          <v-row>
            <v-col align="center">
              <v-btn text>Esqueceu a senha?</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn
                text
                @click="mostrarCadastro()"
              >Cadastre-se</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-card v-else>
      <v-form>
        <v-card-title class="text-h6">Dados para login:</v-card-title>
        <v-text-field
          v-model="cliente.usuario.email"
          label="E-mail"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.usuario.senha"
          label="Senha"
          required
          outlined
        ></v-text-field>
        <v-card-title class="text-h6">Dados pessoais:</v-card-title>
        <v-text-field
          v-model="cliente.nome"
          label="Nome Completo"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.cpf"
          label="CPF"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.rg"
          label="RG"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.dataNasc"
          label="Data de Nascimento"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.telefone"
          label="Telefone"
          required
          outlined
        ></v-text-field>
        <v-card-title class="text-h6">Dados de entrega:</v-card-title>
        <v-text-field
          v-model="cliente.endereco.cep"
          label="CEP"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.endereco.rua"
          label="Endereço"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.endereco.num"
          label="Número"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.endereco.bairro"
          label="Bairro"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.endereco.cidade"
          label="Cidade"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cliente.endereco.uf"
          label="UF"
          required
          outlined
        ></v-text-field>
        <v-btn @click="salvar()">Cadastrar</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import PerfilClient from "@/apiClient/PerfilClient";
export default {
  name: "Perfil",
  data() {
    return {
      logo: require("./../assets/fast-food.png"),
      mostrarLogin: true,
      cliente: {
        nome: "",
        cpf: "",
        telefone: "",
        rg: "",
        dataNasc: "",
        endereco: {
          cep: "",
          cidade: "",
          bairro: "",
          uf: "",
          rua: "",
          num: "",
        },
        usuario: { email: "", senha: "", tipo: "cliente", ativo: true },
      },
    };
  },
  methods: {
    mostrarCadastro() {
      this.mostrarLogin = false;
    },
    async salvar() {
      let novoCliente = this.cliente;
      let resposta = await PerfilClient.inserir(novoCliente);

      if (resposta.status == 200) {
        this.mostrarLogin = true;
      } else {
        alert("Erro ao cadastrar cliente!");
      }
    },
  },
};
</script>