<template>
  <v-app>
    <!-- 헤더바 -->
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon
        @click="updateNavValue"
      />
      <!-- 헤더바 왼쪽 영역  -->
      <img
        id="logoImg"
        src="@/assets/logo.png"
        style="height: 40px;"
        class="logo"
      >
      <v-spacer />

      <!-- 헤더바 오른쪽 영역  -->

      <!-- 마이 메뉴 -->
      <v-menu
        bottom
        absolute
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list
          class="mt-5 rounded-l"
          min-width="170px"
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            disabled
            @click="() => {}"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-subtitle-2">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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
            SpendSavvy  
          </v-list-item-title>
          <v-list-item-subtitle>
            지출은 현명하게, 절약
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in sideItems"
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
import { mapState, mapMutations } from 'vuex';

// const { mapState } = createNamespacedHelpers('menuApp');

export default {
  name : 'DefaultLayout',
  components: {
  },
  computed: {
    ...mapState(
      'menuApp',[ // 모듈 이름 추가
        'navValue',
        'sideItems',
        'gradient',
        'menuItems'
      ]),
  },
  navValue: {
    get() {
      return this.$store.state.menuApp.navValue;
    },
    set(newValue) {
      this.store.commit('menuApp', newValue);
    }
  },
  methods : {
    ...mapMutations(
      'menuApp',[
        'updateNavValue'
      ]),
  },

};
</script>

<style scoped>
.v-main {
  background-color: #f6f6f6;
}

</style>