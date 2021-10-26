<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="#ff5945">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Lanches</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items> </v-toolbar-items>
        </v-toolbar>
        <v-container>
              {{prop1}}
          Foto protuto <br />
          Nome produto <br />
          Detalhe do produto <br />
          <v-row>
            <v-col cols="5">
              <v-text-field>
                <v-icon slot="append" color="red"> mdi-plus </v-icon>
                <v-icon slot="prepend" color="green"> mdi-minus </v-icon>
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-btn dark color="#ff5945" @click="dialog = false">
                Adicionar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  props: ["prop1"],

  data() {
    return {
      dialog: true,
    };
  },
};
</script>