<template>
   <v-container>

      <!-- PESQUISAR -->
      <pesquisa />

      <!-- LISTA DE CATEGORIAS (COMPONENT) -->
      <listaCategoriaComponent />

      <!-- LISTA DE PRODUTOS (COMPONENT) -->
      <listaProdutoComponent />

      <!-- DETALHE PRODUTO -->
      <detalheProdutoComponent/>


  </v-container>
</template>

<script>
import listaProdutoComponent from "./../components/ProdutoComponent.vue";
import detalheProdutoComponent from "./../components/ProdutoDetalheComponent.vue";
import listaCategoriaComponent from "./../components/CategoriaComponent.vue";
import pesquisa from "./../components/PesquisaComponent.vue";


export default {
   components: { listaProdutoComponent, detalheProdutoComponent ,listaCategoriaComponent, pesquisa },
   name: "Home",

   data() {
      return {
         produtos: ["produto1", "produto2", "produto3"]
      }
   }
};
</script>
