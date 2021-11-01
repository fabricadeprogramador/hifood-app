<template>
  <div class="mt-3">
      <v-row>
        <v-col class="text-center">
          <v-chip v-for="(item, index) in categorias" :key="index" class="mb-1 mr-1">
            {{ item.descricao }}
          </v-chip>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
   data() {
      return {
          categorias: [
            {id: 1, descricao: "Laches"},
            {id: 2, descricao: "Pizzas"},
            {id: 3, descricao: "Bebidas"},
            {id: 4, descricao: "Doces"},
            {id: 5, descricao: "Japonesa"},
            {id: 6, descricao: "Brasileira"},
            {id: 7, descricao: "Saldavel"},
            {id: 8, descricao: "Sobremesa"}]
      }
   }
};
</script>
