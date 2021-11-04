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
            <v-img :src="item.img"></v-img>
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
            :prop1="produtoSelecionado"
            @actionFechaTelaDetails="btnFechaDetalhes()"
          />
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import produtoDetailsComponent from "./../components/ProdutoDetailsComponent.vue";

export default {
  components: { produtoDetailsComponent },

  data() {
    return {
      dialog: false,

      produtoSelecionado: {
        // id: 1,
        // nome: "Hot-Dog Simples",
        // descricao:
        //   "Pão, Salsicha, Molho Especial e Batata Palha. Pão Moderno Salsicha, Molho Especial e Batata Palha.",
        // valor: 10.95,
        // categoria: "Lanches",
        // qtdDisponivel: 10,
        // situacao: "Ativo",
        // img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        // adicionais: [
        //   {
        //     nome: "Maionese Caseira",
        //     valor: 2.0,
        //     selecionado: false
        //   },
        //   {
        //     nome: "Salsisha",
        //     valor: 1.0,
        //     selecionado: false
        //   },
        //   {
        //     nome: "Ovo",
        //     valor: 1.5,
        //     selecionado: false
        //   },
        // ],
      },

      produtos: [
        {
          id: 1,
          nome: "Hot-Dog Simples",
          descricao:
            "Pão, Salsicha, Molho Especial e Batata Palha. Pão Moderno Salsicha, Molho Especial e Batata Palha.",
          valor: 10.95,
          categoria: "Lanches",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
          adicionais: [
            {
              nome: "Maionese Caseira",
              valor: 2.0,
              selecionado: false
            },
            {
              nome: "Salsisha",
              valor: 1.0,
              selecionado: false
            },
            {
              nome: "Ovo",
              valor: 1.5,
              selecionado: false
            },
          ],
        },
        {
          id: 2,
          nome: "Suco de Laranja",
          descricao:
            "Polpa de laranja 100% natural com água, gelo, açucar e aquele toque finalite.",
          valor: 12.7,
          categoria: "Bebidas",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://img.elo7.com.br/product/zoom/262F374/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg",
          adicionais: [
            {
              nome: "Copo Personalizado",
              valor: 3.00,
              selecionado: false
            },
            {
              nome: "Menta",
              valor: 2.50,
              selecionado: false
            }
          ],
        },
        {
          id: 3,
          nome: "Frango ao Creme",
          descricao: "Pão, Salsicha, Molho Especial e Batata Palha.",
          valor: 11.9,
          categoria: "Pizza",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://d1uz88p17r663j.cloudfront.net/resized/f7e3e253ba96faaf75334e19e0f53c7a_pizza-liquidificador-receitas-nestle_1200_600.jpg",
          adicionais: [
            {
              nome: "Maionese Caseira",
              valor: 2.0,
              selecionado: false
            },
            {
              nome: "Catupiry",
              valor: 3.0,
              selecionado: false
            },
            {
              nome: "Ovo",
              valor: 1.5,
              selecionado: false
            },
          ],
        },
      ],
    };
  },

  methods: {
    btnAbreDetalhes(item) {
      this.produtoSelecionado = item;
      this.dialog = true;
    },

    btnFechaDetalhes() {
      this.dialog = false;
    },
  },
};
</script>
