<template>
  <v-app>
    <v-app-bar
      app
      color="#da3444"
      dark
    >

      <v-icon>mdi-hamburger</v-icon>
      <v-toolbar-title class="ml-2">Hi<b>food</b></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        to="/perfil"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <Navigation />

  </v-app>
</template>

<script>
import Navigation from "./components/MenuComponent.vue";

export default {
  name: "App",
  components: { Navigation },
  data() {
    return {};
  },
};
</script>
