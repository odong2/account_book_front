<template>
  <v-main>
    <v-container style="max-width: 550px;">
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
              class="pa-2"
              required
              append-icon="mdi-account"
            />

            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="paasword"
              label="비밀번호"
              outlined
              class="pa-2"
              append-icon="mdi-lock-outline"
              @click:append="show1 = !show1"
            />

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="로그인 상태 유지"
            />

            <v-btn
              :disabled="!valid"
              depressed
              large
              block
              color="success"
              class=" rounded-lg"
              @click="validate"
            >
              로그인
            </v-btn>

            <v-btn
              color="primary"
              depressed
              large
              block
              class="mt-1 rounded-lg"
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
    checkbox: false,
  }),

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
  },
};
</script>

<style>

</style>