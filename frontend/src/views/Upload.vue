<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <input type="file" multiple @change="handleFileChange"/>
      </v-flex>
    </v-layout>
    <div class="break"></div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h5> File list </h5>
        <ul v-for="(file, index) in selectedFiles" :key="index">
          <li>
            {{ file.name }}
          </li>
        </ul>
        <v-progress-linear v-model="valueDeterminate" v-if="valueDeterminate > 0"></v-progress-linear>
        <div class="break"></div>
        <v-btn color="primary" @click="uploadSelectedFiles" :loading="loading"> Upload </v-btn>
        <v-btn color="secondary" @click="goBack"> Back </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../service/api'

export default {
  name: 'Upload',
  components: {},
  data () {
    return {
      loading: false,
      title: 'Upload',
      selectedFiles: [],
      valueDeterminate: 0
    }
  },
  mounted () {
    this.$emit('setTitle', 'Upload')
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    handleFileChange: function (event) {
      this.selectedFiles = event.target.files
    },
    uploadSelectedFiles: async function () {
      let length = this.selectedFiles.length
      let completed = 0
      if (length) {
        this.loading = true
        for (let index in this.selectedFiles) {
          await this.uploadFile(this.selectedFiles[index])
          completed++
          this.valueDeterminate = (completed / length * 100)
          if (completed >= length) {
            this.loading = false
            this.selectedFiles = []
            this.$router.go(-1)
          }
        }
      }
    },
    uploadFile: async function (file) {
      let formData = new FormData()
      formData.append('image', file)
      await api('multipart/form-data').post('/upload', formData)
    }
  }
}
</script>

<style>
 .break {
   margin: 15px 0px;
   border-bottom: 1px solid #ECECEC;
 }
</style>
