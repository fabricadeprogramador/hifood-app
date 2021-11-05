<template>
  <v-card rounded="0">

    <!-- IMAGEM BACKGROUND -->
    <v-container class="page--image" :style="style">
      <div class="page--degrade">
        <div class="page--close" @click="fecharTelaDetails()">
          <v-icon color="#fff">mdi-close</v-icon>
        </div>

        <div class="page--details">
          <h2>{{ produtoVenda.produto.nome }}</h2>
          <span>{{ produtoVenda.produto.descricao }}</span>
        </div>
      </div>
    </v-container>

    <!-- CONTADOR DE PREÇO -->
    <v-container class="mt-6"> 
      <v-row>
        <v-col align="center">
          <v-btn height="30" elevation="1" @click="actionAddMenos()">
            <v-icon>mdi-window-minimize</v-icon>
          </v-btn>

          <span class="contador">{{ produtoVenda.qtd }}</span>

          <v-btn height="30" elevation="1" @click="actionAddMais()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>

        <v-col align="center">
          <h3 style="padding:0;margin:0;">{{ produtoVenda.subTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }}</h3>
          <p style="font-size:14px;padding:0;margin:0;" v-if="produtoVenda.qtd!=1">
            {{ produtoVenda.produto.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }} (unidade)
          </p>
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
              <v-list-item v-for="(item, index) in produtoVenda.produto.adicionais" :key="index">
                <template>
                  <v-list-item-action>
                    <v-checkbox v-model="selected[index]" @click="actionAddAdicional(index)"></v-checkbox>
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
          <v-btn height="50" elevation="1" color="#da3444" dark @click="actionAddCarrinho()">
            <v-icon>mdi-cart</v-icon>
            <span>ADICIONAR</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- {{produtoVenda}} -->
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
  padding: 0px 10px;
}

.contador {
  margin: 0px 15px;
  font-weight: bold;
}
</style>

<script>
export default {
  props: ["produtoSelecionadoProp"],

  computed: {
    style() {
      return `
        background-image: url("${this.produtoVenda.produto.imagem}");
        background-size: cover;
        background-position: center;
      `;
    }
  },

  mounted() {},

  data() {
    return {
      selected: [],
      produtoVenda: {
        produto: this.produtoSelecionadoProp,
        qtd: 1,
        subTotal: this.produtoSelecionadoProp.valor
      }
    };
  },

  methods: {
    actionAddMais() {
      if(this.produtoVenda.produto.qtdDisponivel > this.produtoVenda.qtd) {
        this.produtoVenda.qtd++;
        this.calculaSubTotal(this.produtoVenda.produto.valor, this.produtoVenda.qtd);
      }
    },

    actionAddMenos() {
      if (this.produtoVenda.qtd > 1) {
        this.produtoVenda.qtd--;
        this.calculaSubTotal(this.produtoVenda.produto.valor, this.produtoVenda.qtd);
      }
    },

    actionAddAdicional(i) {
      if(this.produtoVenda.produto.adicionais[i].selecionado == false) {
        this.produtoVenda.produto.adicionais[i].selecionado = true;
      }else {
        this.produtoVenda.produto.adicionais[i].selecionado = false;
      }

      this.calculaSubTotal(this.produtoVenda.produto.valor, this.produtoVenda.qtd);
    },

    calculaSubTotal(valorP, qtdP) {
      this.produtoVenda.subTotal = (valorP * qtdP);

      // Calculo com Adicionais
      for (let i = 0; i < this.produtoVenda.produto.adicionais.length; i++) {
        const itemAdicional = this.produtoVenda.produto.adicionais[i];

        if(itemAdicional.selecionado) {
          this.produtoVenda.subTotal += itemAdicional.valor * qtdP;
        }
      }
    },

    actionAddCarrinho() {},

    fecharTelaDetails() {
      this.$emit("actionFechaTelaDetails");
    }
  },
};
</script>