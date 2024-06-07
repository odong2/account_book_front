<template>
  <v-app>
    <HeaderBar
      :drawerprops="navValue"
      @updateNavValue="updateNavValue"
    />
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

    <v-main>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name : 'DefaultLayout',
  components: {
    HeaderBar
  },
  data : () => ({
    navValue: false,
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      {title: 'Grid System', icon: 'mdi-image', to: '/grid-system'},
      {title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page'},
      {title: 'Break Points', icon: 'mdi-image', to: '/break-point'},
      {title: 'Thypography', icon: 'mdi-image', to: '/thypography'},
      {title: 'TablesVue', icon: 'mdi-image', to: '/tables'},
      {title: '로그인', icon: 'mdi-image', to: '/authentication/login'},
      {title: '회원가입', icon: 'mdi-image', to: '/authentication/sign-up'},
    ],
    right: null,
  }),
  methods : {
    updateNavValue(newValue){
      this.navValue = newValue;
    },
  },

};
</script>

<style>

</style>