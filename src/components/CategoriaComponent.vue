<template>
  <div class="mt-3">
      <v-row>
        <v-col class="text-center">
          <v-chip v-for="(item, index) in categorias" :key="index" class="mb-1 mr-1">
            {{ item.categoria }}
          </v-chip>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import HomeClient from "./../apiClient/HomeClient";

export default {
   data() {
      return {
          categorias: [
            // EXEMPLO DE OBJETO CHEGANDO DA API
            // {id: 1, categoria: "Laches"},
            // {id: 2, categoria: "Pizzas"},
            // {id: 3, categoria: "Bebidas"},
            // {id: 4, categoria: "Doces"},
            // {id: 5, categoria: "Japonesa"},
            // {id: 6, categoria: "Brasileira"},
            // {id: 7, categoria: "Saldavel"},
            // {id: 8, categoria: "Sobremesa"}
          ]
      }
   },

   mounted() {
     this.getListaCategorias();
   },

   methods: {
     async getListaCategorias() {
      let resposta = await HomeClient.listaCategorias();

      if(resposta.status == 200) {
        this.categorias = resposta.data;
        console.log(this.categorias);
      } else {
        alert("Erro ao buscar dados!");
      }
    }
   }
};
</script>
