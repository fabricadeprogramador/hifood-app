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
              v-model="usuario"
              label="Usuário"
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
          v-model="usuario"
          label="Usuário"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="senha"
          label="Senha"
          required
          outlined
        ></v-text-field>
        <v-card-title class="text-h6">Dados pessoais:</v-card-title>
        <v-text-field
          v-model="nome"
          label="Nome Completo"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cpf"
          label="CPF"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="rg"
          label="RG"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="data"
          label="Data de Nascimento"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="telefone"
          label="Telefone"
          required
          outlined
        ></v-text-field>
        <v-card-title class="text-h6">Dados de entrega:</v-card-title>
        <v-text-field
          v-model="cep"
          label="CEP"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="endereco"
          label="Endereço"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="numero"
          label="Número"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="bairro"
          label="Bairro"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cidade"
          label="Cidade"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="uf"
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
export default {
  name: "Perfil",
  data() {
    return {
      logo: require("./../assets/fast-food.png"),
      mostrarLogin: true,
    };
  },
  methods: {
    mostrarCadastro() {
      this.mostrarLogin = false;
    },
    salvar() {
      this.mostrarLogin = true;
    },
  },
};
</script>