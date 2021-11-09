<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-center mt-3 text-h5">O que vai <b>comer hoje?</b></div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- EXIBE LISTA DE PRODUTOS -->
        <v-card
          class="d-flex mb-1"
          elevation="1"
          v-for="(item, index) in produtos"
          :key="index"
          @click="btnAbreDetalhes(item)"
        >
          <div>
            <v-card-title class="text-h6">{{
              item.nome.substr(0, 30)
            }}</v-card-title>
            <v-card-subtitle class="pb-0 mb-0">{{
              item.descricao.substr(0, 60) + "..."
            }}</v-card-subtitle>
            <v-card-title class="pt-0 mt-0">{{
              item.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }}</v-card-title>
          </div>

          <v-avatar class="" size="140" tile>
            <v-img :src="item.imagem"></v-img>
          </v-avatar>
        </v-card>

        <!-- EXIBE DETALHES DO PRODUTO AO CLICAR -->
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <produtoDetailsComponent
            :produtoSelecionadoProp="produtoSelecionado"
            :produtoSelecionadoValorProp="produtoSelecionado.valor"
            @actionFechaTelaDetails="btnFechaDetalhes()"
          />
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HomeClient from "./../apiClient/HomeClient";
import produtoDetailsComponent from "./../components/ProdutoDetailsComponent.vue";

export default {
  components: { produtoDetailsComponent },

  data() {
    return {
      dialog: false,
      produtoSelecionado: {},
      produtos: [
        // EXEMPLO DE OBJETO CHEGANDO DA API
        // {
        //   id: 1,
        //   nome: "Hot-Dog Simples",
        //   descricao:
        //     "Pão, Salsicha, Molho Especial e Batata Palha. Pão Moderno Salsicha, Molho Especial e Batata Palha.",
        //   valor: 10.50,
        //   categoria: "Lanches",
        //   qtdDisponivel: 5,
        //   situacao: "Ativo",
        //   imagem: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        //   adicionais: [
        //     {
        //       nome: "Maionese Caseira",
        //       valor: 2.0,
        //       selecionado: false
        //     },
        //     {
        //       nome: "Salsisha",
        //       valor: 1.0,
        //       selecionado: false
        //     },
        //     {
        //       nome: "Ovo",
        //       valor: 1.5,
        //       selecionado: false
        //     },
        //   ],
        // }
      ],
    };
  },

  mounted() {
    this.getListaProdutos();
  },

  methods: {
    btnAbreDetalhes(item) {
      this.produtoSelecionado = Object.assign({}, item);
      this.dialog = true;
    },

    btnFechaDetalhes() {
      this.dialog = false;
      this.produtoSelecionado = {};
    },

    //Requisições na API ---
    async getListaProdutos() {
      let resposta = await HomeClient.listaProdutos();

      if(resposta.status == 200) {
        this.produtos = resposta.data;
      } else {
        alert("Erro ao buscar dados!");
      }
    }
  },
};
</script>
