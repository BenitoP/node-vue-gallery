<template>
  <v-card flat tile class="d-flex" @click="viewImage()">
    <v-img
      :src="source"
      :lazy-src="source"
      aspect-ratio="1"
      class="grey lighten-2"
    >
      <v-layout
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: [
    'source',
    'imageId'
  ],
  methods: {
    viewImage: function (source) {
      this.$router.push({ name: `gallery-image`, params: { photoId: this.imageId, source: this.source } })
    }
  }
}
</script>
