<template>
  <v-main>
    <v-container style="max-width: 400px;">
      <v-row align="center">
        <v-card class="pa-10 rounded-lg">
          <div class="black--text h4 d-flex justify-center">
            <p>로그인</p>
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="아이디"
              name="id"
              outlined
              dense
              class="pa-2"
              required
              hide-details
              append-icon="mdi-account"
            />

            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="paasword"
              label="비밀번호"
              outlined
              dense
              class="pa-2"
              append-icon="mdi-lock-outline"
              hide-details
              @click:append="show1 = !show1"
            />
            <v-row class="pa-1 mb-3">
              <v-col class="d-flex">
                <v-checkbox
                  v-model="checkbox1"
                  label="자동 로그인"
                  hide-details
                />
                <v-checkbox
                  v-model="checkbox2"
                  label="아이디 저장"
                  class="ms-3"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-btn
              :disabled="!valid"
              depressed
              large
              block
              dark
              class="orange accent-3 rounded-lg"
              @click="validate"
            >
              로그인
            </v-btn>

            <v-row class="mt-1">
              <v-col class="d-flex justify-end grey--text text-subtitle-2">
                <a>아이디 찾기</a>
              </v-col>
              <v-col class="d-flex justify-start grey--text text-subtitle-2">
                <a>비밀번호 찾기 </a>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="d-flex justify-center">
                <a
                  class="me-2"
                  @click="kakaoLogin()"
                >
                  <v-img
                    id="logoImg"
                    alt="카카오 로그인"
                    src="@/assets/kakao.png"
                    class="logo mt-1"
                    width="50px"
                  />              
                </a>
                <a @click="kakaoLogin()">
                  <v-img
                    id="logoImg"
                    alt="네이버 로그인"
                    src="@/assets/naver.png"
                    class="logo mt-1"
                    width="50px"
                  />              
                </a>
              </v-col>
            </v-row>

            <v-btn
              depressed
              large
              block
              class="mt-8 rounded-lg grey lighten-3"
              @click="resetValidation"
            >
              회원가입
            </v-btn>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox1: false,
    checkbox2: false,
  }),
  computed: {
    ...mapState(
      'authStore', [
        'constants'
      ]
    ),
  },
  methods: {
    validate () {
      this.$refs.form.validate();
    },
    reset () {
      this.$refs.form.reset();
    },
    resetValidation () {
      this.$refs.form.resetValidation();
    },
    kakaoLogin() {
      const redirect_uri = `${this.constants.HOST_URL}/auth/kakao/join`;
      const clientId = '16dc5d22956229c5bba702cb65e7399b';
      const Auth_url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}`;
      window.location.href = Auth_url;
    }
  },
};
</script>

<style >
</style>