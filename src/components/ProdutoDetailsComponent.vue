<template>
  <v-card rounded="0">
    <div class="page--image" :style="style">
      <div class="page--degrade">
        <div class="page--close" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </div>
        
        <div class="page--details">
          <h2>{{ prop1.produto.nome }}</h2>
          <span>{{ prop1.produto.descricao }}</span>
        </div>
      </div>
    </div>

    <v-container class="mt-3" color="#ff5945">
      <v-row>
        <v-col align="center">
          <v-btn height="30" @click="addMenos()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <span class="contador">{{ contador }}</span>

          <v-btn height="30" @click="addMais()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>

        <v-col align="center">
          <h3>{{ total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) }}</h3>
        </v-col>
      </v-row>
    </v-container>

    <v-bottom-navigation height fixed horizontal grow>
      <v-btn height="50" @click="dialog = false">
        <span>CANCELAR</span>
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-btn height="50" @click="dialog = false">
        <span>FINALIZAR</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
      total: this.prop1.produto.valor
    };
  },

  methods: {
    addMais() {
      this.contador++;
      this.total = this.prop1.produto.valor * this.contador;
    },

    addMenos() {
      if(this.contador > 1){
        this.contador--;
        this.total = this.prop1.produto.valor * this.contador;
      }
    }
  }
};
</script>