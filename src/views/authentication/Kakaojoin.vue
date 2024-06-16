<template>
  <div />
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(
      ['API_URL', 'HOST_URL'],
    )
  },
  created(){
    // 쿼리의 code값 가져오기
    let code = this.$route.query.code;
    this.getToken(code);
  },
  methods: {
    ...mapMutations(
      'authApp', [
        'loginFromKakao'
      ]
    ),
    getToken(code) {
      // 카카오 로그인 처리
      this.loginFromKakao(code);
    }
  },
};
</script>
