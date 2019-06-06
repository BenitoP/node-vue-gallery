<template>
  <v-form v-model="valid">
    <v-alert
      :value="true"
      type="error"
      v-if="error"
    >
      Something went wrong, please try again
    </v-alert>
    <v-text-field
      v-model="email"
      :rules="loginRules.email"
      label="Email Address"
      type="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="loginRules.password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-flex xs12>
      <v-btn color="success" @click="goBack">Back</v-btn>
      <v-btn color="info" @click="doSignup" :loading="loading">Signup</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
import api from '../../service/api'

export default {
  name: 'SignupForm',
  components: {},
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
    goBack: function () {
      this.$router.go(-1)
    },
    doSignup: async function () {
      if (this.valid) {
        this.loading = true
        try {
          const signUpResponse = await api().post('signup', { email: this.email, password: this.password })
          if (signUpResponse.status === 200) {
            const signInResponse = await api().post('signin', { email: this.email, password: this.password })
            if (signInResponse.status === 200) {
              window.localStorage.setItem('token', signInResponse.data)
              this.$router.push({ name: 'gallery' })
            }
          }
        } catch (error) {
          this.loading = false
          this.error = error.message
        }
      }
    }
  }
}
</script>
