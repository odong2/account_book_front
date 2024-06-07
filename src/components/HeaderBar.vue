<template>
  <v-app-bar
    app
    color="black"
    dark
  >
    <v-app-bar-nav-icon
      @click="updateNav"
    />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawerprops : Boolean 
  },
  data () {
    return { 
    };
  },
  methods: {
    updateNav(){
      this.$emit('updateNavValue', !this.drawerprops);
    },
  }

};
</script>