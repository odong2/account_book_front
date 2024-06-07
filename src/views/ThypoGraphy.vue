<template>
  <v-contatiner>
    <v-card>
      <v-card-title>
        Typography
      </v-card-title>
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 6"
            class="mx-auto pa-6"
          >
            Prop based elevation
          </v-card>
        </template>
      </v-hover>
      <v-card-text>
        <v-card class="pa-3 text-h2 blue lighten-1">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 secondary darken-1">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 primary--text">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 error--text">
          컨텐츠
        </v-card>
        <p class="text-h1">
          Heading 2
        </p>
        <p class="text-h2">
          Heading 2
        </p>
        <p class="text-h3 text-sm-subtitle-1">
          Heading 3
        </p>
        <p class="text-h1 font-weight-black">
          Heading 3
        </p>
      </v-card-text>
    </v-card>
  </v-contatiner>
</template>

<script>
export default {

};
</script>

<style>

</style>