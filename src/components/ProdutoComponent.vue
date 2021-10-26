<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-center mt-3 text-h5">O que vai comer hoje?</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
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
      </v-col>
    </v-row>

    <!-- DETALHE PRODUTO -->
    <detalheProdutoComponent :prop1="exibeDetalheProduto" />
  </div>
</template>

<script>
import detalheProdutoComponent from "./../components/ProdutoDetalheComponent.vue";

export default {
  components: { detalheProdutoComponent },

  data() {
    return {
      exibeDetalheProduto: "",
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
          id: 1,
          nome: "Hot-Dog Simples",
          descricao: "Pão, Salsicha, Molho Especial e Batata Palha.",
          valor: 10.95,
          categoria: "",
          qtdDisponivel: 10,
          situacao: "Ativo",
          img: "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg",
        },
        {
          id: 1,
          nome: "Hot-Dog Simples",
          descricao: "Pão, Salsicha, Molho Especial e Batata Palha.",
          valor: 10.95,
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
      this.exibeDetalheProduto = "teste";
      
    },
  },
};
</script>
