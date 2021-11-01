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
          @click="btnAbreDetalhes"
        >
          <div>
            <v-card-title class="text-h6">{{ item.nome }}</v-card-title>
            <v-card-subtitle class="pb-0 mb-0">{{
              item.descricao.substr(0, 60) + "..."
            }}</v-card-subtitle>
            <v-card-title class="pt-0 mt-0">R$ {{ item.valor }}</v-card-title>
          </div>

          <v-avatar class="" size="140" tile>
            <v-img :src="item.img"></v-img>
          </v-avatar>
        </v-card>

        <!-- EXIBE DETALHES DO PRODUTO AO CLICAR -->
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <produtoDetailsComponent :prop1="produtoSelecionado" @actionFechaTelaDetails="btnFechaDetalhes()" />
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
        produto: {
          id: 1,
          nome: "Hot-Dog Simples",
          descricao:
            "Pão, Salsicha, Molho Especial e Batata Palha. Pão Moderno Salsicha, Molho Especial e Batata Palha.",
          valor: 10.95,
          categoria: "Lanches",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg"
        },

        adicionais: [
          {
            id: 1,
            nome: "Maionese Caseira",
            valor: 2.00 
          },
          {
            id: 2,
            nome: "Salsisha",
            valor: 1.00 
          },
          {
            id: 3,
            nome: "Ovo",
            valor: 1.50 
          }
        ],

        dialog: this.dialog
      },
      
      produtos: [
        {
          id: 1,
          nome: "Hot-Dog Simples",
          descricao:
            "Pão, Salsicha, Molho Especial e Batata Palha. Pão Moderno Salsicha, Molho Especial e Batata Palha.",
          valor: 10.95,
          categoria: "",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        },
        {
          id: 2,
          nome: "Hot-Dog Simples 2",
          descricao: "Pão, Salsicha, Molho Especial e Batata Palha.",
          valor: 22.70,
          categoria: "Bebidas",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        },
        {
          id: 3,
          nome: "Hot-Dog Simples",
          descricao: "Pão, Salsicha, Molho Especial e Batata Palha.",
          valor: 11.90,
          categoria: "",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        },
      ],
    };
  },

  methods: {
    btnAbreDetalhes() {
      this.dialog = true;
    },

    btnFechaDetalhes() {
      this.dialog = false;
    }
  },
};
</script>
