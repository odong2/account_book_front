<template>
  <!-- 사이드바  -->
  <v-navigation-drawer
    v-model="navValue"
    app
    dark
    :src="require('@/assets/sidebar.jpg')"
  >
    <!-- # 문법 v-slot 축약형 -->
    <template #img="props">
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
      
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        linke
        :to="item.to"
        active-class=""
        class="py-1"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {

};
</script>

<style>

</style>