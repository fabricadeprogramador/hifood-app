<template>
   <v-container>

      <!-- PESQUISAR -->
      <!-- <pesquisaComponent /> -->

      <!-- LISTA DE CATEGORIAS (COMPONENT) -->
      <categoriaComponent />

      <!-- LISTA DE PRODUTOS (COMPONENT) -->
      <produtoListComponent />

  </v-container>
</template>

<script>
import pesquisaComponent from "./../components/PesquisaComponent.vue";
import categoriaComponent from "./../components/CategoriaComponent.vue";
import produtoListComponent from "./../components/ProdutoListComponent.vue";

export default {
   components: { produtoListComponent, categoriaComponent, pesquisaComponent },
   name: "Home",

   data() {
      return {
         produtos: ["produto1", "produto2", "produto3"]
      }
   }
};
</script>
