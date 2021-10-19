<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      Hifood
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    
    <Navigation />
    
  </v-app>
</template>

<script>
  import Navigation from "./components/MenuComponent.vue"
  
  export default {
    name: "App",
    components: { Navigation },
    data() {
      return {}
    }
  }
</script>
