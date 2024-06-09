<template>
  <v-app>
    <v-main
      style="height:100vh"
      class="indigo lighten-3 align-center"
    >
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthenticationLayout'

};
</script>

<style>

</style>