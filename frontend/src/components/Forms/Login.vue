<template>
  <v-form v-model="valid">
    <v-alert
      :value="true"
      type="error"
      v-if="error"
    >
      Invalid email / password
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
      <v-btn color="success" @click="doSignin" :loading="loading">Signin</v-btn>
      <v-btn color="info" @click="goToSignup">Signup</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
import api from '../../service/api'

export default {
  name: 'LoginForm',
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
        try {
          const response = await api().post('signin', { email: this.email, password: this.password })
          if (response.status === 200) {
            window.localStorage.setItem('token', response.data)
            this.$router.push({ name: 'gallery' })
          }
        } catch (error) {
          this.loading = false
          this.error = error.message
        }
      }
    },
    goToSignup: function () {
      this.$router.push({ name: 'signup' })
    }
  }
}
</script>
