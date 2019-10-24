<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title class="headline">
        Top 20 Coins App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/coins">Coins</v-btn>
      </v-toolbar-items>
     
     
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
