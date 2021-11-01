<template>
  <v-card rounded="0">
    <!-- IMAGEM BACKGROUND -->
    <v-container class="page--image" :style="style">
      <div class="page--degrade">
        <div class="page--close" @click="fecharTelaDetails()">
          <v-icon>mdi-close</v-icon>
        </div>

        <div class="page--details">
          <h2>{{ prop1.produto.nome }}</h2>
          <span>{{ prop1.produto.descricao }}</span>
        </div>
      </div>
    </v-container>

    <!-- CONTADOR DE PREÇO -->
    <v-container class="mt-6"> 
      <v-row>
        <v-col align="center">
          <v-btn height="30" elevation="1" @click="addMenos()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <span class="contador">{{ contador }}</span>

          <v-btn height="30" elevation="1" @click="addMais()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>

        <v-col align="center">
          <h3>
            {{ total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }}
          </h3>
        </v-col>
      </v-row>
    </v-container>

    <!-- ADICIONAIS -->
    <v-container> 
      <v-row>
        <v-col>
          <v-list>
            <v-subheader>Adicionais</v-subheader>

            <v-list-item-group multiple>
              <v-list-item v-for="(item, index) in prop1.adicionais" :key="index">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.nome }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }} (unidade)</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- BOTÕES RODAPÉ -->
    <v-container> 
      <v-row>
        <v-col align="right">
          <v-btn height="50" elevation="1" @click="fecharTelaDetails()">
            <v-icon>mdi-close</v-icon>
            <span>CANCELAR</span>
          </v-btn>
        </v-col>

        <v-col align="left">
          <v-btn height="50" elevation="1" color="#da3444" dark>
            <v-icon>mdi-cart</v-icon>
            <span>FINALIZAR</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.page--image {
  height: 50vh;
  position: relative;
}

.page--degrade {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #fff 25%, transparent 50%);
  position: relative;
}

.page--close {
  padding: 15px;
}

.page--details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.contador {
  margin: 0px 15px;
  font-weight: bold;
}
</style>

<script>
export default {
  props: ["prop1"],

  computed: {
    style() {
      return `
        background-image: url("${this.prop1.produto.img}");
        background-size: cover;
        background-position: center;
      `;
    },
  },

  data() {
    return {
      contador: 1,
      total: this.prop1.produto.valor,
    };
  },

  methods: {
    addMais() {
      this.contador++;
      this.total = this.prop1.produto.valor * this.contador;
    },

    addMenos() {
      if (this.contador > 1) {
        this.contador--;
        this.total = this.prop1.produto.valor * this.contador;
      }
    },

    fecharTelaDetails() {
      this.$emit("actionFechaTelaDetails");
    },
  },
};
</script>