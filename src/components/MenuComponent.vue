<template>
  <v-bottom-navigation
    v-model="value"
    grow
    color="#000050"
    height
    fixed
    app
  >
    <v-btn
      v-for="
    (item,
    index)
    in
    itens"
      :key="index"
      :to="item.link"
      height="50"
    >
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
        link: "/",
      },
      {
        rota: "Pedidos",
        icone: "mdi-tag",
        link: "/pedidos",
      },
      {
        rota: "Carrinho",
        icone: "mdi-cart",
        link: "/carrinho",
      },
      {
        rota: "Perfil",
        icone: "mdi-account",
        link: "/perfil",
      },
    ],
  }),
};
</script>

<style></style>
