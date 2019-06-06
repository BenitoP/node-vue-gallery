<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="navigateTo('upload')">add_to_photos</v-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view @setTitle="setTitle"/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <v-btn flat color="white" @click="logout">Logout</v-btn>
      <p class="white--text text-xs-right footer-text">&copy; {{currentYear}}</p>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {},
  data () {
    return {
      currentYear: new Date().getFullYear(),
      title: ''
    }
  },
  methods: {
    navigateTo: function (viewName) {
      this.$router.push({ name: viewName })
    },
    setTitle: function (title) {
      this.title = title
    },
    logout: function () {
      window.localStorage.removeItem('token')
      this.$router.push({ name: 'signin' })
    }
  }
}
</script>

<style scoped>
 .footer-text {
   width: 100%;
   margin-bottom: 0px;
   padding-right: 10px;
 }
</style>
