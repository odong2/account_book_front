<template>
  <v-container style="max-width: 450px;">
    <v-row align="center">
      <v-card class="pa-10 rounded-lg">
        <div class="black--text h5 d-flex justify-center">
          <!-- 간편 회원가입 -->
          <p>{{ constants.SOCIAL_SIGNUP_TITLE }}</p>
        </div>
        <v-form
          ref="form"
          lazy-va
          lidation
        >
          <v-row v-if="socialFormData.profileImage != undefined || null || ''">
            <v-col
              cols="12"
              class="d-flex justify-center  mb-4"
            >
              <v-img
                :src="socialFormData.profileImage" 
                class="rounded-xl"
                max-width="100px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-text-field
              v-model="socialFormData.name"
              dense
              label="이름"
              outlined
              class="pa-2"
              required
              autocomplete="off"
              append-icon="mdi-account"
              @input="updateForm('name', socialFormData.name)"
            />
          
            <v-text-field
              v-model="socialFormData.nickname"
              dense
              label="닉네임"
              outlined
              class="pa-2"
              required
              autocomplete="off"
              append-icon="mdi-account-edit"
              @input="updateForm('nickname', socialFormData.nickname)"
            />

            <v-text-field
              v-model="socialFormData.email"
              dense
              label="이메일"
              outlined
              class="pa-2"
              append-icon="mdi-email-outline"
              autocomplete="off"
              @input="updateForm('email', socialFormData.email)"
            />
          </v-row>

          <v-btn
            color="primary"
            depressed
            large
            block
            class="mt-1 rounded-lg"
            type="button"
            @click="socialSignUp"
          >
            {{ constants.SIGNUP_BTN_TEXT }}
          </v-btn>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(
      'authStore', [
        'constants',         // 상수값
        'signupBtnText',     // 회원가입 버튼 텍스트
        'socialFormData'     // 폼 데이터(v-model 매핑을 위해 필요)
      ]
    ),
    ...mapGetters(
      'authStore',[ // 모듈 이름 추가
        'getSignupUser',
        'getSocialFromData',
      ]),
  },
  created() {
    // getters 사용
    const signupUser = this.getSignupUser;

    // 로컬 스토리지에 회원의 정보 없는 경우
    if(signupUser == null || signupUser == undefined){
      window.alert('유저 정보가 없어 로그인 페이지로 이동합니다.');
      window.location.href = `${process.env.VUE_APP_HOST_URL}/auth/login`;
    }
    const formData = [
      { key: "name", value: signupUser.nickname },
      { key: "id", value: signupUser.id },
      { key: "provider", value: signupUser.provider },
      { key: "profileImage", value: signupUser.profileImage }
    ];

    formData.forEach(item => this.updateSocialFormData(item));
    
  },
  methods: {
    ...mapMutations(
      'authStore', [
        'socialSignUp', // 소셜 회원 가입
        'updateSocialFormData', // 폼 데이터 수정
      ]
    ),
    // input 입력시 마다 데이터 변경
    updateForm(key, value) {
      this.updateSocialFormData({key, value});
    }
  },
};
</script>

<style scoped>

</style>