<template>
  <div />
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  created(){
    // 쿼리의 code값 가져오기
    let code = this.$route.query.code;
    this.getAccessToken(code);
  },
  methods: {
    ...mapMutations(
      'authStore', [
        'loginFromKakao'
      ]
    ),
    // accessToken 가져오기
    getAccessToken(code) {
      // 카카오 로그인 처리
      this.loginFromKakao(code);
    }
  },
};
</script>
