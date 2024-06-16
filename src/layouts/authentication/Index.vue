<template>
  <v-app>
    <v-main
      style="height:100vh"
      class="align-center"
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
.v-main {
  background-color: #f6f6f6;
}
</style>