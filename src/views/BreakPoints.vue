<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
    </v-card>
    <v-container class="grey lighten-3">
      <v-card 
        class="pa-3"
        outlined
        :height="height"
      >
        콘텐츠
      </v-card>
      <v-card class="mt-5">
        <v-card-title>
          $vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }} {{ $vuetify.breakpoint.mobileBreakpoint }}
        </v-card-title>
      </v-card>
      <v-container class="grey lighten-3">
        <v-card-title>
          Vuetify breakpoint Object
        </v-card-title>
        <v-card
          clas="pa-3"
          outlined
        >
          $vuetify.breakpoint.xs : {{ $vuetify.breakpoint.xs }}
          $vuetify.breakpoint.height: {{ $vuetify.breakpoint.height }}
          $vuetify.breakpoint.width: {{ $vuetify.breakpoint.width }}
        </v-card>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data : () => ({
    dialog: false,
  }),
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs' : return 100;
      case 'sm' : return 200;
      case 'md' : return 300;
      case 'lg' : return 400;
      default : return 500;

      }
    }
  }

};
</script>

<style>

</style>