<template>
  <v-container style="max-width: 400px;">
    <v-row align="center">
      <v-card class="pa-10 rounded-lg">
        <div class="black--text h5 d-flex justify-center">
          <p>간편 회원가입</p>
        </div>
        <v-form
          ref="form"
          v-model="valid"
          lazy-va
          lidation
        >
          <v-text-field
            v-model="formData.name"
            :rules="nameRules"
            dense
            label="이름"
            name="name"
            outlined
            class="pa-2"
            required
            autocomplete="off"
            append-icon="mdi-account"
          />
          <v-text-field
            v-model="formData.nickname"
            dense
            label="닉네임"
            name="id"
            outlined
            class="pa-2"
            required
            autocomplete="off"
            append-icon="mdi-account-edit"
            style="he"
          />

          <v-text-field
            v-model="formData.email"
            dense
            name="email"
            label="이메일"
            outlined
            class="pa-2"
            append-icon="mdi-email-outline"
            autocomplete="off"
            @click:append="show1 = !show1"
          />

          <v-btn
            color="primary"
            depressed
            large
            block
            class="mt-1 rounded-lg"
            type="button"
            @click="submitForm(formData)"
          >
            회원가입
          </v-btn>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    valid: true,
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
    checkbox: false,
    formData: {
      name: '',
      nickname: '',
      email:'',
      id: '',
      provider: '',
    },
  }),
  computed: {
    ...mapState(
      {API_URL : 'API_URL'},

    ),
    ...mapGetters(
      'authApp',[ // 모듈 이름 추가
        'getSignupUser',
      ]),
  },
  created() {
    // getters 사용
    const signupUser = this.getSignupUser;
    if(signupUser == null || signupUser == undefined){
      // window.location.href('http://localhost:')
    }
    this.formData.name = signupUser.nickname;
    this.formData.email = signupUser.email;
    this.formData.id = signupUser.id;
    this.formData.provider = signupUser.provider;
  },
  methods: {
    ...mapMutations(
      'authApp', [
        'submitForm'
      ]
    ),
    validate () {
      this.$refs.form.validate();
    },
    reset () {
      this.$refs.form.reset();
    },
    resetValidation () {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>

</style>