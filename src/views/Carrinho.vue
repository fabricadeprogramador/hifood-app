<template>
  <v-container>
    <v-card flat>
      <v-card-title>Meu carrinho <v-icon class="mx-3">mdi-cart</v-icon>
      </v-card-title>
      <v-list>
        <v-row>
          <v-col cols="4">
            <v-card-text>Produto</v-card-text>
          </v-col>
          <v-col cols="4">
            <v-card-text>
              Quantidade
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-card-text>Total</v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-template
          v-for="produto in produtos"
          :key="produto.nome"
        >
          <v-row>
            <v-col cols="4">
              <v-card-text>{{ produto.nomeProduto }}</v-card-text>
            </v-col>
            <v-col cols="4">
              <v-card-text>
                <v-btn icon>
                  <v-icon
                    small
                    @click="remover(produto)"
                  >mdi-minus</v-icon>
                </v-btn>{{ produto.qtd }}
                <v-btn icon>
                  <v-icon
                    small
                    @click="adicionar(produto)"
                  >mdi-plus</v-icon>
                </v-btn>
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-card-text>{{produto.valorTotProd.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}} <v-btn icon>
                  <v-icon
                    small
                    @click="deletar(produto)"
                  >mdi-delete</v-icon>
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-template>
        <v-row>
          <v-col cols="12">
            <v-card-text> Valor total: {{valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}}</v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12">
            <v-card-text> Data: {{novaVenda.data}}</v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-list>
      <v-row>
        <v-col align="center">
          <v-btn
            class="my-4"
            color="#FE7028"
            dark
            @click="finalizar()"
          >Finalizar compra</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Carrinho",
  data() {
    return {
      produtos: [
        {
          id: 1,
          nomeProduto: "Suco de Laranja com Menta",
          categoria: "Bebidas",
          qtd: 1,
          valorUn: 44,
          valorTotProd: 44,
        },
        {
          id: 2,
          nomeProduto: "Suco de Laranja com Menta",
          categoria: "Bebidas",
          qtd: 1,
          valorUn: 32,
          valorTotProd: 32,
        },
        {
          id: 3,
          nomeProduto: "Suco de Laranja com Menta",
          categoria: "Bebidas",
          qtd: 1,
          valorUn: 29,
          valorTotProd: 29,
        },
      ],
      valorTotal: 0,
      qtdTotal: 0,
      novaVenda: {
        cpf: "",
        data: "",
        produtos: [],
        valorTotal: 0,
        qtdTotal: 0,
      },
    };
  },
  methods: {
    somaTotal() {
      this.valorTotal = 0;
      for (let i = 0; i < this.produtos.length; i++) {
        this.valorTotal = this.valorTotal + this.produtos[i].valorTotProd;
      }
    },
    adicionar(produto) {
      produto.qtd++;
      produto.valorTotProd = produto.valorUn * produto.qtd;
      this.somaTotal();
    },
    remover(produto) {
      produto.qtd--;
      produto.valorTotProd = produto.valorUn * produto.qtd;
      this.somaTotal();
      if (produto.qtd == 0) {
        this.deletar(produto);
      }
    },
    deletar(produtoDelete) {
      for (let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].id == produtoDelete.id) {
          this.produtos.splice(i, 1);
        }
      }
    },
    finalizar() {
      let data = newDate();
      this.novaVenda.data = data.toLocaleString();
    },
  },
  mounted() {
    this.somaTotal();
  },
};
</script>