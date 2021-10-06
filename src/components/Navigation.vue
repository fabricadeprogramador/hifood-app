<template>
  <div>
    <v-bottom-navigation v-model="value" grow>
      <v-btn value="recent" v-for="(item, index) in itens" :key="index">
        <span>{{ item.rota }}</span>

        <v-icon>{{ item.icone }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    data: () => ({
      value: "Home",
      itens: [
        {
          rota: "Home",
          icone: "mdi-home"
        },
        {
          rota: "Pedidos",
          icone: "mdi-tag"
        },
        {
          rota: "Perfil",
          icone: "mdi-account"
        },
        {
          rota: "Carrinho",
          icone: "mdi-cart"
        }
      ]
    })
  }
</script>

<style></style>
