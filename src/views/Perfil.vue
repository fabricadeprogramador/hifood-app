<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Perfil</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <v-img
          aspect-ratio="1"
          width="150"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <v-btn elevation="1" @click="actionAddCarrinho()">
          <v-icon>mdi-pencil</v-icon>
          <span>Editar</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
 
          <form>
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Perfil",
};
</script>