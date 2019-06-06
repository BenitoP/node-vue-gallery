<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            :src="image"
            :lazy-src="image"
            aspect-ratio="1"
          ></v-img>
          <v-card-actions>
            <v-btn color="primary" @click="goBack">Back</v-btn>
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ImageView',
  data () {
    return {
      image: this.$router.history.current.params.source
    }
  },
  mounted () {
    this.$emit('setTitle', 'Image')
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
