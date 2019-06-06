<template>
  <v-app>
    <v-content>
        <v-layout style="height: 100%;">
          <v-flex xs12 sm4 offset-sm4 style="align-items: center;">
            <v-card class="login-card">
              <h3 class="text-xs-left"> Sign in </h3>
              <div class="form-container">
                <LoginForm />
              </div>
            </v-card>
          </v-flex>
        </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from '../components/Forms/Login'

export default {
  name: 'Signin',
  components: {
    LoginForm
  }
}
</script>

<style>
  .form-container {
    width: 100%;
  }

  .login-card {
    padding: 15px 10px;
    min-width: 360px;
    max-width: 450px;
  }
</style>
