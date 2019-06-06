<template>
  <v-app>
    <v-content>
        <v-layout style="height: 100%;">
          <v-flex xs12 sm4 offset-sm4 style="align-items: center;">
            <v-card class="login-card">
              <h3 class="text-xs-left"> Sign up </h3>
              <div class="form-container">
                <SignupForm />
              </div>
            </v-card>
          </v-flex>
        </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import SignupForm from '../components/Forms/SignUp'

export default {
  name: 'Signup',
  components: {
    SignupForm
  },
  data () {
    return {
      loading: false,
      error: null,
      valid: false,
      email: null,
      password: null,
      loginRules: {
        email: [
          v => !!v || 'Email address is required',
          v => /.+@.+/.test(v) || 'Must be a valid email address'
        ],
        password: [v => !!v || 'Password is required']
      }
    }
  },
  methods: {
    doSignin: async function () {
      if (this.valid) {
        this.loading = true
        /* try {
          const response = await api().post('signin', { email: this.email, password: this.password })
          if (response.status === 200) {
            window.localStorage.setItem('token', response.data)
            this.$router.push({ name: 'dashboard' })
          }
        } catch (error) {
          this.error = error.message
        } */
      }
    },
    goBack: function () {
      this.$router.go(-1)
    },
    doSignup: function () {
      // this.$router.push({ name: 'signup' })
    }
  }
}
</script>
