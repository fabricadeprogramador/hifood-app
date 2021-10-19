<template>
    <v-bottom-navigation v-model="value" grow>
      <v-btn v-for="(item, index) in itens" :key="index" :to="item.link">
        <span>{{ item.rota }}</span>

        <v-icon>{{ item.icone }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({
      value: "Home",
      itens: [
        {
          rota: "Home",
          icone: "mdi-home",
          link: "/"
        },
        {
          rota: "Pedidos",
          icone: "mdi-tag",
          link: "/pedidos"
        },
        {
          rota: "Perfil",
          icone: "mdi-account",
          link: "/perfil"
        },
        {
          rota: "Carrinho",
          icone: "mdi-cart",
          link: "/carrinho"
        }
      ]
    })
  }
</script>

<style></style>
